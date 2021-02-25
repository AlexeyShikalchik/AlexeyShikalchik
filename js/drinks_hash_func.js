'use strict'

function HashStorageFunc(name, age, sex, growth) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.growth = growth;
    this.addValue = function(key, value) {
        return this[key] = value;
    };
    this.getValue = function(key) {
        return this[key];
    };
    this.deleteValue = function(key) {
        if (this[key] = null) {
            return true;
        } else {
            return false;
        };
    };
    this.getKeys = function() {
        return this.key;
    };
};

let alex = new HashStorageFunc('Alex', 22, 'Man', 174);
alex.addValue(big, yes)
console.log(alex.big);