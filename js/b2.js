'use strict'

const getStr = prompt('Введите любую строку:');

function reverseStr(str) {
    let newStr = str.split('').reverse().join('').toString();
    return console.log(newStr);
}

reverseStr(getStr);