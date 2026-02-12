'use client'
import React, { useEffect } from 'react'
import Button from '../../../components/ui/Button'
import { MdSystemUpdateAlt, MdDelete, MdCancel } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function Page() {
    const [isUserOpen, setUserOpen] = React.useState(false)
    const [userdata, setUserdata] = React.useState({})
    const [formdata, setFormdata] = React.useState({})
    const [editabledata, setEditabledata] = React.useState({})
    const [collection, setCollection] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState("")

    const fetchUsers = async () => {
        setLoading(true)
        setError("")
        try {
            const res = await fetch('/api/user/head/headfetch')
            if (!res.ok) throw new Error('Failed to load users')
            const collections = await res.json()
            setCollection(collections.users || [])
        } catch (err) {
            setError(err.message || 'Failed to load users')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const userhandler = (id) => {
        const fetchdata = async () => {
            const response = await fetch(`/api/user/oneUseData?id=${id}`);
            const result = await response.json();
            setUserdata(result.user)
        }
        fetchdata()
        setUserOpen(true)
    }

    const onDelete = (id) => {
        const fetchdata = async () => {
            const response = await fetch(`/api/user/delete?id=${id}`, { method: 'DELETE' });
            const result = await response.json();
            if (result?.user) {
                setUserdata(result.user)
            }
            fetchUsers()
        }
        fetchdata()
    }

    const onUpdate = (id) => {
        setEditabledata({})
        const fetchdata = async () => {
            const response = await fetch(`/api/user/oneUseData?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    head: formdata.head,
                    value: formdata.value,
                }),
            });
            const result = await response.json();
            setUserdata(result.user)
            alert(result.massage)
            fetchUsers()
        }
        fetchdata()
    }

    const onEdit = (res) => {
        setEditabledata(res)
    }

    const inputhandler = (e) => {
        setFormdata({ ...formdata, head: editabledata.head, value: e.currentTarget?.textContent })
    }

    const inpursearchhandler = (e) => {
        const term = e.target.value.trim()
        if (term.length === 0) {
            fetchUsers()
            return
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/user/head/usersearch?search=${term}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCollection(data.seardata);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Search failed')
            }
        };
        fetchData();
    }

    return (
        <div className='admin-page'>
            <div className='panel pad-lg admin-head-row'>
                <div>
                    <h3 className='panel-title'>Users</h3>
                    <p className='panel-subtitle'>Search, view, and update user records.</p>
                </div>
                <div className='input-shell' style={{ maxWidth: '420px', width: '100%' }}>
                    <input
                        type="text"
                        placeholder="Search users..."
                        onChange={inpursearchhandler}
                    />
                    <IoSearchOutline />
                </div>
            </div>

            <div className='panel pad-md'>
                {error && <div className="alert">{error}</div>}
                <div className='admin-table-wrap'>
                    <table className='admin-table'>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Member</th>
                                <th>Office User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="4">Loading...</td>
                                </tr>
                            ) : (
                                collection && collection.map((value, index) => (
                                    <tr key={index} onClick={() => userhandler(value._id)} className='admin-row-click'>
                                        <td>{value.username}</td>
                                        <td>{value.role}</td>
                                        <td>{value.memberShip}</td>
                                        <td>{`${value.officeUser}`}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isUserOpen && (
                <div className='admin-modal'>
                    <div className='admin-modal-card'>
                        <MdCancel onClick={() => setUserOpen(false)} className='admin-modal-close' />
                        <h3 className='panel-title' style={{ fontSize: '1.35rem' }}>{`User: ${userdata.username || ''}`}</h3>
                        <div className="detail-list">
                            {Object.keys(userdata).map((item, index) => (
                                <div key={index} className="detail-row">
                                    <div className="detail-key">{`${item}`}</div>
                                    {typeof (userdata[item]) === 'object' ? (
                                        userdata[item].length
                                    ) : (
                                        <div
                                            className={`detail-value ${index === editabledata.clickid ? 'editable' : ''}`}
                                            onInput={(e) => inputhandler(e)}
                                            contentEditable={index === editabledata.clickid}
                                            suppressContentEditableWarning
                                        >
                                            {`${userdata[item]}`}
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                                        <Button variant="destructive" onClick={() => onDelete(userdata._id)} className='icon-btn warn'>
                                            <MdDelete />
                                        </Button>
                                        {index === editabledata.clickid ? (
                                            <Button variant="outline" onClick={() => onUpdate(userdata._id)} className='icon-btn ok'>
                                                <MdSystemUpdateAlt />
                                            </Button>
                                        ) : (
                                            <Button variant="outline" onClick={() => onEdit({ head: item, clickid: index })} className='icon-btn info'>
                                                <FaRegEdit />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page
