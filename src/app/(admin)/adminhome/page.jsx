'use client'
import React from 'react'
import useStore from '../../../../store/useStore'
import Button from '../../components/ui/Button'
import { MdSystemUpdateAlt } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


function Page() {
    const [isUserOpen, setUserOpen] = React.useState(false)
    const [userdata, setUserdata] = React.useState({})
    const [isEdit, setIsEdit] = React.useState(false)

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
        console.log("up", id)
        setIsEdit(false)
        const fetchdata = async () => {
            const response = await fetch(`api/user/update?id=${id}`);
            const result = await response.json();
            console.log(result.user)
            setUserdata(result.user)
        }
        // fetchdata()
    }
    const onEdit = (id) => {
        console.log("up", id)
        setIsEdit(true)
        const fetchdata = async () => {
            const response = await fetch(`api/user/update?id=${id}`);
            const result = await response.json();
            console.log(result.user)
            setUserdata(result.user)
        }
        // fetchdata()
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
                        shadow-lg shadow-black h-[40vh] text-[12px] sm:text-[1rem] overflow-auto'>
                            <h3 className='font-bold bg-gray-300 px-2 rounded-sm'>{`User Name : ${userdata.username}`}</h3>
                            <div className="max-w-2xl mx-auto mt-6 bg-white shadow rounded">
                                {Object.keys(userdata).map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-3 items-center gap-4 p-4 border-b"
                                    >
                                        <div className="font-semibold text-gray-800 break-all">{`${item}`}</div>
                                        {typeof (userdata[item]) === 'object' ?
                                            userdata[item].length
                                            : <div className={` text-gray-600 break-all ${isEdit && 'border'}`} contentEditable={isEdit}>{`${userdata[item]}`}</div>}
                                        <div className="flex gap-2">
                                            <Button
                                                variant="destructive"
                                                onClick={() => onDelete(index)}
                                                className='p-0 h-fit, w-fit'
                                            >
                                                Del
                                            </Button>
                                            {
                                                isEdit ? <Button
                                                    variant="outline"
                                                    onClick={() => onUpdate({ [item]: userdata[item] })}
                                                >
                                                    <MdSystemUpdateAlt className='text-xl' />
                                                </Button>
                                                    :
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => onEdit({ [item]: userdata[item] })}
                                                    >
                                                        <FaRegEdit className='text-xl' />
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