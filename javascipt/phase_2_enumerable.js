Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

function eachCallback(ele) {
    console.log(ele)
};
// [1,2,3,4,5].myEach(eachCallback);

Array.prototype.myMap = function (callback) {
    let mapped = [];

    this.myEach(function(ele) {
        mapped.push(callback(ele))
    });
    console.log(mapped);
};

function mappedCallback(ele) {
    return ele * 2
}; 

// [1, 2, 3, 4, 5].myMap(mappedCallback);

Array.prototype.myReduce = function (callback, initialValue) {
    let array = this;
    // debugger
    if (initialValue === undefined) {
        initialValue = array[0];
        array = array.slice(1);
    };

    array.myEach( function(ele) {
        initialValue = callback(initialValue, ele);
    });
    
    return (initialValue);
};


console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25));
