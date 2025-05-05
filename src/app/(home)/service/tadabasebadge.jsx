'use client';

import { Code, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DatabaseBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[200px] bg-gray-900 text-white p-6 rounded-2xl shadow-lg text-center max-w-xl mx-auto mt-10"
        >
            <h2 className="text-xl md:text-2xl font-semibold flex flex-wrap items-center justify-center gap-2">
                <Code className="w-6 h-6 text-indigo-400" />
                <Database className="w-5 h-5 text-yellow-400" />
                <span className='text-yellow-500 '>MongoDB</span>
                <Code className="w-6 h-6 text-indigo-400" />
            </h2>
            <div className='mt-4'>
                <span className=' text-justify '>
                    <p className='ml-4 text-gray-400'>Skilled in using MongoDB with JavaScript and TypeScript to design and manage scalable, document-based databases for modern web applications.</p>
                </span>
                
            </div>
        </motion.div>
    );
}


