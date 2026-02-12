'use client'
import React, { useEffect, useRef } from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function Page() {
    const [paymentdata, setCollection] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState("")
    const searchTimeout = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError("")
                const response = await fetch('/api/user/payments/payment');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCollection(data.payments);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load payments')
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    const inpursearchhandler = (e) => {
        const term = e.target.value.trim()
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current)
        }
        searchTimeout.current = setTimeout(async () => {
            try {
                if (term.length === 0) {
                    setLoading(true)
                    setError("")
                    const response = await fetch('/api/user/payments/payment');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setCollection(data.payments);
                    setLoading(false)
                    return
                }
                const response = await fetch(`/api/user/payments/seachpayment?search=${term}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCollection(data.seardata);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Search failed')
            } finally {
                setLoading(false)
            }
        }, 250)
    }

    return (
        <div className='admin-page'>
            <div className='panel pad-lg admin-head-row'>
                <div>
                    <h1 className='panel-title'>Payments</h1>
                    <p className='panel-subtitle'>Track recent transactions and payment status.</p>
                </div>
                <div className='input-shell' style={{ maxWidth: '420px', width: '100%' }}>
                    <input
                        type="text"
                        placeholder="Search payments..."
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
                                <th>Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="4">Loading...</td>
                                </tr>
                            ) : paymentdata.length !== 0 ? (
                                paymentdata.map((value, index) => {
                                    const date = new Date(value.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    });
                                    return (
                                        <tr key={index}>
                                            <td>{value.userId?.username || 'Unknown'}</td>
                                            <td>{date}</td>
                                            <td>Rs{value.amount}</td>
                                            <td><span className="status-ok">{value.status}</span></td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4">No Data Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
