Array.prototype.uniq = function() {
    const uniq = [];

    this.forEach((el) => {
        if (!uniq.includes(el)) {
            uniq.push(el);
        }
    })

    return uniq;
};

Array.prototype.twoSum = function() {
    const pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (i != j && this[i] + this[j] == 0) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
};

Array.prototype.transpose = function() {
    const transposed = Array.from(
        {length: this[0].length}, () => Array.from({length: this.length})
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[1].length; j++) {
            transposed[j][i] = this[i][j];    
        }
    }

    return transposed;
};

Array.prototype.myTranspose = function() {
    return this[0].map((_, colIdx) => 
        this.map((row => row[colIdx]))
    )
};