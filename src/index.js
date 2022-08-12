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
    let codeArr = expr.split("**********");
    let result = [];

    //step first: split EXPR into parts & translate numbers into symbols
    codeArr.forEach(el => {
        let counter = Math.floor(el.length/10); 
        let words = el;
        let currentWord = "";
        let decodeArr = [];
        
        for (let i = 0; i < counter; i++) {
            let transformedWord = "";
            currentWord = words.slice(i*10, 10 + i*10);
            currentWord.replace(/(10)|(11)|(00)/g, (match, p1, p2, p3) => {
                if(p1) {transformedWord+="."};
                if(p2) {transformedWord+="-"};
                if(p3) {transformedWord+=""};
            })
            decodeArr.push(transformedWord);
        }

        //step second: split EXPR into parts & translate numbers into symbols
        decodeArr.forEach((el, index) => {
            decodeArr[index] = MORSE_TABLE[el]
        })
        decodeArr = decodeArr.join('');
        result.push(decodeArr);
              
    });
    
    //step third: connect people c:
    result = result.join(" ");
    return result;
}

module.exports = {
    decode
}