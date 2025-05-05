'use client';

import { Code, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pythonbadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[200px] bg-gray-900 text-white p-6 rounded-2xl shadow-lg text-center max-w-xl mx-auto mt-10"
    >
      <h2 className="text-xl md:text-2xl font-semibold flex flex-wrap items-center justify-center gap-2">
        <Code className="w-6 h-6 text-indigo-400" />
        Python
        <Code className="w-6 h-6 text-indigo-400" />
      </h2>
      <div className='mt-4'>
                <span className=' text-justify '>
                    <p className='ml-4 text-gray-400'>Proficient in building high-performance APIs with FastAPI, utilizing JavaScript and TypeScript for efficient, scalable backend development.</p>
                </span>
                
            </div>
    </motion.div>
  );
}


