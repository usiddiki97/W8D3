Array.prototype.bubbleSort = function () {

    for (let sorted = false; sorted !== true;) {
        sorted = true; for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                    // let a = this[i];
                    // let b = this[i + 1];
                    // this[i] = b;
                    // this[i + 1] = a;
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
};


console.log([1, 5, 6, 3, 2, 8].bubbleSort());

String.prototype.subStrings = function () {
    let substrings = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++)  {
            substrings.push(this.slice(i, j));
        }
    }
    return substrings;
};

console.log("cats".subStrings());