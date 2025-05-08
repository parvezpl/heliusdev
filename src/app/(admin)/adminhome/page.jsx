'use client'
import React from 'react'
import useStore from '../../../../store/useStore'
import Button from '../../components/ui/Button'
import { MdSystemUpdateAlt, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";



function Page() {
    const [isUserOpen, setUserOpen] = React.useState(false)
    const [userdata, setUserdata] = React.useState({})
    const [isEdit, setIsEdit] = React.useState(false)
    const [formdata, setFormdata] = React.useState({})
    const [editabledata, setEditabledata] = React.useState({})

    const collection = useStore((state) => state.collection)
    const collectionHead = useStore((state) => state.collectionHead)

    const userhandler = (id) => {
        console.log(id)
        const fetchdata = async () => {
            const response = await fetch(`api/user/oneUseData?id=${id}`);
            const result = await response.json();
            console.log(result.user)
            setUserdata(result.user)
        }
        fetchdata()
        setUserOpen(true)
    }

    const onDelete = (id) => {
        console.log('del', id)
        const fetchdata = async () => {
            const response = await fetch(`api/user/delete?id=${id}`);
            const result = await response.json();
            console.log(result.user)
            setUserdata(result.user)
        }
        // fetchdata()
    }
    const onUpdate = (id) => {
        console.log(formdata)
        setEditabledata({})
        const fetchdata = async () => {
            const response = await fetch(`api/user/oneUseData?id=${id}`,{
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
            console.log(result.user)
            setUserdata(result.user)
            alert(result.massage)
        }
        fetchdata()
    }
    const onEdit = (res) => {
        setEditabledata(res)
    }

    const inputhandler = (e) => {
        console.log(e.currentTarget?.textContent)
        setFormdata({ ...formdata, head:editabledata.head,  value: e.currentTarget?.textContent })
    }       
    return (
        <div className='flex flex-col w-full h-screen items-center border box-border'>
            <h3 className='text-2xl font-bold'>{collectionHead}</h3>
            <div className=' relative flex flex-col w-full h-full bg-green-700 items-center'>
                <table className=' relative flex flex-col w-full h-full bg-green-100  mx-1'>
                    <thead>
                        <tr className='flex flex-row justify-around m-1 gap-1'>
                            <th className='w-full place-items-start pl-4 bg-green-400 '>USERNAME</th>
                            <th className='w-full place-items-start  bg-green-400'>ROLE</th>
                            <th className='w-full place-items-start  bg-green-400'>MEMBER-SHIP</th>
                            <th className='w-full place-items-start  bg-green-400'>OFFECE-USER</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-auto'>
                        {
                            collection && collection.map((value, index) => {
                                return (
                                    <tr key={index} onClick={() => userhandler(value._id)} className='flex flex-row justify-around m-1 gap-1 cursor-pointer '>
                                        <td className='w-full place-items-start pl-4 bg-green-200 capitalize'>{value.username}</td>
                                        <td className='w-full place-items-start bg-green-200'>{value.role}</td>
                                        <td className=' w-full place-items-start bg-green-200'>{value.memberShip}</td>
                                        <td className=' w-full place-items-start bg-green-200'>{`${value.officeUser}`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>
                    {
                        isUserOpen &&
                        <div className=' absolute top-15 right-0 w-[65vw] mr-1 sm:w-[50vw] md:w-[60vw] bg-green-400 flex flex-col items-center  border rounded-sm
                        shadow-lg shadow-black h-[40vh] text-[12px] sm:text-[1rem] overflow-y-auto'>
                            <h3 className='font-bold bg-green-300 px-2 rounded-sm uppercase '>{`User Name : ${userdata.username}`}</h3>
                            <div className="max-w-2xl mx-auto mt-6 bg-white shadow rounded">
                                {Object.keys(userdata).map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-3 items-center gap-4 p-4 border-b"
                                    >
                                        <div className="font-semibold text-gray-800 break-all">{`${item}`}</div>
                                        {typeof (userdata[item]) === 'object' ?
                                            userdata[item].length
                                            : <div className={` text-gray-600 break-all ${index === editabledata.clickid && 'border'}`}
                                                // onInput={e =>console.log(e.currentTarget?.textContent)}
                                                onInput={e => inputhandler(e)}
                                                contentEditable={index === editabledata.clickid}
                                                suppressContentEditableWarning
                                            >{`${userdata[item]}`}</div>
                                        }
                                        <div className="flex gap-2">
                                            <Button
                                                variant="destructive"
                                                onClick={() => onDelete(index)}
                                                className='!p-0 !bg-gray-300 w-fit flex justify-center items-center '
                                            >
                                                <MdDelete className='text-xl text-red-500' />
                                            </Button>
                                            {
                                                index === editabledata.clickid ? <Button
                                                    variant="outline"
                                                    onClick={() => onUpdate(userdata._id)}
                                                    className='!p-0 !bg-gray-300 w-fit flex justify-center items-center '
                                                >
                                                    <MdSystemUpdateAlt className='text-xl text-green-700' />
                                                </Button>
                                                    :
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => onEdit({ head:item, clickid: index })}
                                                        className='!p-0 !bg-gray-300 w-fit flex justify-center items-center '
                                                    >
                                                        <FaRegEdit className='text-xl text-blue-800' />
                                                    </Button>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page