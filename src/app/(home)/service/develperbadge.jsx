'use client';

import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DeveloperBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="service-card"
        >
            <div className="service-card-header">
                <div className="service-icon">
                    <Code size={20} />
                </div>
                <div>
                    <h3 className="service-card-title">Full-stack Web</h3>
                    <p className="service-card-meta">Next.js / React</p>
                </div>
            </div>
            <div className='service-card-copy'>
                <p><strong>React.js:</strong> Dynamic, responsive interfaces with modern component architecture.</p>
                <p><strong>Next.js:</strong> SSR/SSG performance, routing, and optimized delivery.</p>
            </div>
        </motion.div>
    );
}
