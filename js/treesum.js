'use strict'

const getArr = [ 5, 7, [ 4, [2], 8, [1, 3], 2 ], [ 9, [] ], 1, 8];

function treeSum(arr) {

    // вариант 1
    arr = arr.flat(Infinity);

    //вариант 2
    // for (let i = 0; i <= arr.length - 1; i++) {
        // if (Array.isArray(arr[i])) {
        //     console.log(arr[i] + ' подмассив');
        // } else {
        //     console.log(arr[i] + ' НЕ подмассив');
        // };
    // };
    
};

treeSum(getArr);