'use strict'

var personSurname = prompt('Введите Вашу фамилию:');
var personName = prompt('Введите Ваше имя:');
var personPatronymic = prompt('Введите Ваше отчество:');
var ageInYears = parseInt(prompt('Введите Ваш возраст в годах:'));
var sex = confirm('Нажмите "ОК", если вы мужчина');
var ageInDays = ageInYears * 365;
var ageIn5Years = ageInYears + 5;
var pension;

if ((sex && ageInYears >= 62) || (!sex && ageInYears >=58)) {
    pension = 'да';
} else {
    pension = 'нет';
};

if (sex) {
    sex = 'мужской';
} else {
    sex = 'женский';
};

//Вариант 2
// pension = (sex && ageInYears >= 62) || (!sex && ageInYears >=58) ? 'да' : 'нет';
// sex = sex ? 'мужской' : 'женский';

alert('Ваше ФИО: ' + personSurname + ' ' + personName + ' ' + personPatronymic + '\nВаш возраст в годах: ' + ageInYears + '\nВаш возраст в днях: ' + ageInDays + '\nЧерез 5 лет Вам будет: ' + ageIn5Years + '\nВаш пол: ' + sex + '\nВы на пенсии: ' + pension);