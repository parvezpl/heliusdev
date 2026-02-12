'use client'
import React from 'react'
import useStore from '../../../store/useStore'
import { useRouter } from 'next/navigation'

export default function Servicebar({ isSidebarOpen }) {
    const router = useRouter();
    const setCollection = useStore((state) => state.setCollection);

    const collectionHead = [
        { name: 'Users', rout: 'adminhome/users', api: 'api/user/head/headfetch' },
        { name: 'Payments', rout: 'adminhome/payments', api: 'api/user/payments/payment' },
        { name: 'Links' },
        { name: 'blogs' },
    ];

    const headheander = (value) => {
        if (!value?.rout) return;
        setCollection(value);
        router.push(`/${value.rout}`);
    };

    return (
        <div className={`admin-sidebar ${isSidebarOpen ? "hidden" : ""}`}>
            <div>
                <div className="admin-sidebar-title">Admin</div>
                <h1 className='admin-sidebar-heading'>Data Console</h1>
            </div>
            <div className="admin-separator" />
            <div className='admin-sidebar-list'>
                {collectionHead.map((value, index) => {
                    const isDisabled = !value?.rout;
                    return (
                        <button
                            key={index}
                            onClick={() => headheander(value)}
                            className="admin-sidebar-btn"
                            disabled={isDisabled}
                            type="button"
                        >
                            <span>{value.name}</span>
                            <span>-></span>
                        </button>
                    );
                })}
            </div>
        </div>
    )
}
