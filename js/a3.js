'use strict'

var str1 = 'wq    Я - арка края qw';

function checkPalindrome(str) {

    // новая строка для записии реверса
    var strNew = '';

    // ассоциативный массив нежалательных знаков припинания
    var symbols = {
        space: ' ',
        dot: '.',
        screamer: '!',
        query: '?',
        colon: ':',
        semicolon: ';',
        comma: ',',
        dash: '-'
    };

    // игнорирование регистра букв
    str = str.toLowerCase();

    // игнорирование символов
    for (var i = 0; i <= str.length - 1; i++) {
        for (var key in symbols) {
            if (str[i] === symbols[key]) {
                str = str.replace(symbols[key], '');
                i--;
            } else if (str[i] === 'ё') {
                str = str.replace('ё', 'е');
                i--;
            } else if (str[i] === 'ъ') {
                str = str.replace('ъ', 'ь');
                i--;
            };
        };
    };

    // реверс строки
    for (var i = str.length-1; i >= 0; i--) {
        strNew += str[i];
    };

    console.log(strNew); 

    // сравнение строк
    if (strNew == str) {
        return console.log('Данная строка является палиндромом');
    } else {
        return console.log('Данная строка НЕ является палиндромом');
    }
};

checkPalindrome(str1);