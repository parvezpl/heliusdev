'use client';

import { Code, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Expresbadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[200px] bg-gray-900 text-white p-6 rounded-2xl shadow-lg text-center max-w-xl mx-auto mt-10"
        >
            <h2 className="text-xl md:text-2xl font-semibold flex flex-wrap items-center justify-center gap-2">
                <Code className="w-6 h-6 text-indigo-400" />
                <Server className="w-5 h-5 text-green-400" />
                <span className='text-green-500  uppercase'>Express.js</span>
                <Code className="w-6 h-6 text-indigo-400" />
            </h2>
            <div className='mt-4'>
                <span className=' text-justify '>
                    <p className='ml-4 text-gray-400'>Experienced in building robust backend APIs using Express.js with JavaScript and TypeScript for scalable server-side development.</p>
                </span>
                
            </div>
        </motion.div>
    );
}


