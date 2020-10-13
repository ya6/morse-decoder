const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const tr = {
        '00': '',
        '10': '.',
        '11': '-',
        '**': ' ',
    };
    let _str = '';
    let str = '';
    let letter = '';

    for (let index = 0; index < expr.length; index += 10) {
        letter = expr.slice(index, index + 10);

        _str = '';
        for (let j = 0; j < 10; j += 2) {
            _str = _str + tr[letter[j] + letter[j + 1]];
        }

        str += MORSE_TABLE[_str] || ' ';
    }
    return str;
}

module.exports = {
    decode
}