export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests allowed' });
    }

    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const encodedText = encodeURIComponent(text);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodedText}`;

        const response = await fetch(url);
        const data = await response.json();

        //fetch all data from the translation API


        const translatedText = data[0][0][0]; // Extract translated text


        res.status(200).json({ translatedText:data });
    } catch (error) {
        res.status(500).json({ error: 'Translation failed', details: error.message });
    }
}
