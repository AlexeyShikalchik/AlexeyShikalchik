'use strict'
// debugger
const getStr = prompt('Введите любую строчку:');

function countingVowels(str) {
    const vowels = {
        letter1: 'а',
        letter2: 'у',
        letter3: 'о',
        letter4: 'ы',
        letter5: 'и',
        letter6: 'э',
        letter7: 'я',
        letter8: 'ю',
        letter9: 'е',
        letter10: 'ё',
        letter11: 'А',
        letter12: 'У',
        letter13: 'О',
        letter14: 'Ы',
        letter15: 'И',
        letter16: 'Э',
        letter17: 'Я',
        letter18: 'Ю',
        letter19: 'Е',
        letter20: 'Ё',
    }
    var quantity = 0;  
    for (var i = 0; i <= str.length-1; i++) {
        for (var key in vowels) {
            if (str[i] === vowels[key]) {
                quantity++;
            }
        }
    }
    return console.log(quantity);
};

countingVowels(getStr);