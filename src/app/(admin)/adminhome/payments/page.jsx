'use client'
import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function Page() {
    const [paymentdata, setCollection] = React.useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/user/payments/payment');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setCollection(data.payments);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const inpursearchhandler = (e) => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/user/payments/seachpayment?search=${e.target.value}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setCollection(data.seardata);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }
    console.log(paymentdata.length !== 0)
    return (
        <div className='flex flex-col gap-4 p-4 items-center w-full h-screen'>
            <h1 className='text-2xl font-bold'>Payments</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-semibold'>Payment History</h2>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center border border-gray-300 rounded-md p-2'>
                            <input type="text" placeholder="Search..." className='outline-none' onChange={inpursearchhandler} />
                            <IoSearchOutline className='text-2xl'/>
                        </div>
                        <div className='flex flex-col gap-2 bg-gray-300 text-gray-500 h-fit w-[20vw] p-2 rounded-md'>
                        //suggasion
                        </div>
                    </div>
                </div>
                <div className='overflow-auto max-h-[60vh]'>
                    <table className='min-w-full border-collapse border border-gray-300'>
                        <thead>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2'>Name</th>
                                <th className='border border-gray-300 px-4 py-2'>Date</th>
                                <th className='border border-gray-300 px-4 py-2'>Amount</th>
                                <th className='border border-gray-300 px-4 py-2'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through payment data here */}

                            {
                                paymentdata.length !== 0 ? paymentdata.map((value, index) => {
                                    const date = new Date(value.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    });
                                    return (
                                        <tr key={index}>
                                            <td className='border border-gray-300 px-4 py-2'>{value.userId.username}</td>
                                            <td className='border border-gray-300 px-4 py-2'>{date}</td>
                                            <td className='border border-gray-300 px-4 py-2'>{value.amount}</td>
                                            <td className='border border-gray-300 px-4 py-2'>{value.status}</td>
                                        </tr>
                                    )
                                })
                            :
                            <tr>
                                <td colSpan="4" className='border border-gray-300 px-4 py-2 text-center'>No Data Found</td>
                            </tr>
                            } 


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
