'use strict'

const getYear = prompt('Введите любой год: ');

function checkCentury(year) {
    const century = Math.floor(year / 100 + 1);
    return century;
};

console.log('Это ' + checkCentury(getYear) + ' век.');