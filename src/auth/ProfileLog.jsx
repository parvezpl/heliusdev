'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';

export default function ProfileLog({ session }) {
    const [profilebox, setProfilebox] = useState(false);
    const router = useRouter();

    const userboxhandler = async (url) => {
        if (url) {
            router.push(url);
            setProfilebox(false);
            return;
        }
        await signOut({ callbackUrl: '/' });
    };

    const userBox = [
        { id: 1, name: 'Profile', url: '/userbox/userprofile' },
        { id: 2, name: 'Setting', url: '/usersetting' },
        { id: 3, name: 'Contact', url: '/usercontact' },
        { id: 4, name: 'Help', url: '/userhelp' },
        ...(session?.user?.role === 'admin' ? [{ id: 6, name: 'Admin', url: '/adminhome' }] : []),
        { id: 5, name: 'Logout', url: '' }
    ];

    return (
        <div className='profile-root'>
            <button type="button" onClick={() => setProfilebox((prev) => !prev)} className='profile-pill'>
                {session?.user?.username || session?.user?.name}
            </button>
            {profilebox && (
                <div className='profile-menu'>
                    <div className='profile-header'>logo</div>
                    {userBox.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => userboxhandler(item.url)}
                            className='profile-action'
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
