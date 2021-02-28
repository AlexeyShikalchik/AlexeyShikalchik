'use strict'

function HashStorageFunc(name, age, sex, growth) {

    const that = this;

    that.name = name;
    that.age = age;
    that.sex = sex;
    that.growth = growth;

    that.addValue = function(key, value) {
        return that[key] = value;
    };

    that.getValue = function(key) {
        return that[key];
    };

    that.deleteValue = function(key) {
        that[key] = null
        if (that[key] === null) {
            return true;
        } else {
            return false;
        };
    };
    
    that.getKeys = function(key) {
        return that[key];
    };
    
};

let alex = new HashStorageFunc('Alex', 22, 'Man', 174);

console.log(alex.addValue(surname, 'Shikalchik'));
