Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                sorted = false;
                [this[i], this[i+1]] = [this[i+1], this[i]];
            }
        }
    }
    return this;
};

String.prototype.subStrings = function() {
    let subStrings = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            subStrings.push(this.slice(i, j));
        }
    }
    return subStrings;
}