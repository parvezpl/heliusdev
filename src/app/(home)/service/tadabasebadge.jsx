'use client';

import { Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DatabaseBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="service-card"
        >
            <div className="service-card-header">
                <div className="service-icon warn">
                    <Database size={20} />
                </div>
                <div>
                    <h3 className="service-card-title">MongoDB</h3>
                    <p className="service-card-meta">Document databases</p>
                </div>
            </div>
            <div className='service-card-copy'>
                <p>Scalable schema design, query performance, and production-ready data modeling.</p>
                <div className="service-tags">
                    <span className="pill muted">Indexes</span>
                    <span className="pill muted">Aggregations</span>
                    <span className="pill muted">Atlas</span>
                </div>
            </div>
        </motion.div>
    );
}
