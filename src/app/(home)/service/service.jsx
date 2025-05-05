import React from 'react'
import DeveloperBadge from './develperbadge'
import Pythonbadge from './pythonbadge'
import DatabaseBadge from './tadabasebadge'
import Expresbadge from './expresbadge'

function Service() {
    return (
        <div className='flex flex-col w-full justify-center'>
            <h1 className=' self-center m-4 font-bold text-orange-500 text-2xl text-shadow-black text-shadow-md'>JavaScript Sevice</h1>
            <div className='flex flex-wrap h-full gap-8'>
                <DeveloperBadge />
                <DatabaseBadge/>
                <Expresbadge/>
             
            </div>
        </div>
    )
}

export default Service