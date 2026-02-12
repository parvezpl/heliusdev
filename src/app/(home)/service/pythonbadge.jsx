'use client';

import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pythonbadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="service-card"
    >
      <div className="service-card-header">
        <div className="service-icon cyan">
          <Code size={20} />
        </div>
        <div>
          <h3 className="service-card-title">Python APIs</h3>
          <p className="service-card-meta">FastAPI and Automation</p>
        </div>
      </div>
      <div className='service-card-copy'>
        <p>High-performance APIs and automation workflows with clean, typed endpoints.</p>
        <div className="service-tags">
          <span className="pill muted">FastAPI</span>
          <span className="pill muted">Background Jobs</span>
          <span className="pill muted">Data Pipelines</span>
        </div>
      </div>
    </motion.div>
  );
}
