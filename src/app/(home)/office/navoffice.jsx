import { Link2, Link2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navoffice() {
    return (
        <div className=' w-full sm:w-40 bg-gray-700 px-4 py-2'>
            <span className='flex gap-1 text-green-400 hover:text-blue-500'>
                <Link2Icon />
                <Link href={'/office/vatshlya'}>Vatshlya</Link>
            </span>
        </div>
    )
}

export default Navoffice