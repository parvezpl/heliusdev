import Sanscript from '@sanskrit-coders/sanscript';
export default async function handler(req, res) {
    if (req.method == "GET") {
        const { word } = req.query
        console.log(word)
        const output = Sanscript.t(`${word}`, "itrans", "devanagari");
        console.log(output)
        const suggationword = changeWov(output)
        return res.status(200).json({ suggationword });
    }

}


function changeWov(text) {
    let databreakintoken = [...text];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '्' && databreakintoken[i - 1] === 'न') {
            databreakintoken.splice(i - 1, 1); // remove 'न'
            databreakintoken[i - 1] = 'ं';     // replace '्' with 'ं'
        }
    }
    text = databreakintoken.join('');
    let newdata = [];
    const wov = [
        ['ू', 'ु'],
        ['ि', 'ी'],
        ['ष', 'श'],
        ['श', 'स'],
        ['ं', 'न्'],
        ['ृ', '्रि'],
    ];
    let tokenword = [...text];
    for (let i = 0; i < tokenword.length; i++) {
        let x = tokenword[i];
        for (let group of wov) {
            if (group.includes(x)) {
                for (let z of group) {
                    let tokenwords = [...tokenword];
                    tokenwords[i] = z;
                    newdata.push(tokenwords.join(''));
                }
            }
        }
    }
    return newdata.length === 0 ? [text] : newdata;
}

// Example usage:
