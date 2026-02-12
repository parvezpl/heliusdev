'use client';

import { Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Expresbadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="service-card"
        >
            <div className="service-card-header">
                <div className="service-icon">
                    <Server size={20} />
                </div>
                <div>
                    <h3 className="service-card-title">Express.js</h3>
                    <p className="service-card-meta">API architecture</p>
                </div>
            </div>
            <div className='service-card-copy'>
                <p>Fast, secure REST APIs with clean middleware patterns and integrations.</p>
                <div className="service-tags">
                    <span className="pill muted">Auth</span>
                    <span className="pill muted">Payments</span>
                    <span className="pill muted">Webhooks</span>
                </div>
            </div>
        </motion.div>
    );
}
