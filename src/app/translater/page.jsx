'use client';

import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  const handleTranslate = async () => {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    data.translatedText[0]?.map(item=>{
        console.log('data', item[0]);
        setTranslated(prev => prev + ' ' + item[0]);
    })
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">English to Hindi Translator</h2>
      <div className=' flex  flex-col items-center '>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full border rounded p-2 mb-3"
        placeholder="Enter English text..."
      />
      <span><span>text.count-</span>{text.length}</span>
      </div>
      <button
        onClick={handleTranslate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Translate
      </button>

      {translated && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <h3 className="font-medium">Hindi Translation:</h3>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}
