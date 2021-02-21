
'use strict'

var message = prompt('Напишите любое сообщение (вставьте любое количество пробелов в начале и в конце строки - они исчезнут):');

function delSpaces(str) {

    while (str[0] === ' ') {
        str = str.slice(1);
    };
    while (str[str.length-1] === ' ') {
        str = str.slice(0, str.length-1);
    };
    console.log('\u00A9' + str + '\u00A9');

};

delSpaces(message);