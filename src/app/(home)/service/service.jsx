import React from 'react'
import DeveloperBadge from './develperbadge'
import DatabaseBadge from './tadabasebadge'
import Expresbadge from './expresbadge'

function Service() {
    return (
        <div className='service-root'>
            <div className='service-head'>
                <span className='pill'>JavaScript Services</span>
                <h2 className='service-title'>Full-stack delivery, end to end</h2>
            </div>
            <div className='service-grid'>
                <DeveloperBadge />
                <DatabaseBadge />
                <Expresbadge />
            </div>
        </div>
    )
}

export default Service
