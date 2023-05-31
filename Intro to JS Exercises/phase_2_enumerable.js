const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    const mapped = [];
    this.myEach((el) => mapped.push(callback(el)));
    return mapped; 
};

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    if (!initialValue) {
        initialValue = arr.shift();
    }

    arr.myEach((el) => initialValue = callback(initialValue, el));

    return initialValue;
};