'use client';

import { Code, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DeveloperBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[200px] bg-gray-900 text-white p-6 rounded-2xl shadow-lg text-center max-w-xl mx-auto mt-10"
        >
            <h2 className="text-xl md:text-2xl font-semibold flex flex-wrap items-center justify-center gap-2">
                <Code className="w-6 h-6 text-indigo-400" />
                Full-Stack Web Developer
                <Code className="w-6 h-6 text-indigo-400" />
            
                <span className="flex items-center text-fuchsia-700 gap-1">
                    Next.js / React.js
                </span>
            </h2>
            <div className='mt-4'>
                <span className=' text-justify '>
                    <h3 className='text-green-600 font-bold'>REACT.JS</h3>
                    <p className='ml-4 text-gray-400'>Proficient in building dynamic and responsive user interfaces using React.js with JavaScript, following component-based architecture and modern UI practices.</p>
                </span>
                <span className=' text-justify'>
                    <h3 className='text-green-600 font-bold'>NEXT.JS</h3>
                    <p className='ml-4 text-gray-400'>Experienced in building optimized, server-side rendered and statically generated web applications using Next.js with JavaScript and TypeScript.</p>
                </span>
            </div>
        </motion.div>
    );
}


