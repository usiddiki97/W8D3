Array.prototype.uniq = function() {
    let unique = [];

    for (let i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) === -1) {
            unique.push(this[i]);
        }
    }
    console.log(unique);
};

// [1, 2, 2, 3, 3, 3].uniq()

Array.prototype.twoSum = function() {
    let pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }  
    }
    console.log(pairs);
};


// [1, 2, 3, 4, -1, -2, -3].twoSum() 
// [[0,4], [1,5], [2,6]]

Array.prototype.transpose = function() {
    // let matrix = Array(this[0].length).fill(0).map(function(x) {
    //     return Array(this.length).fill(0);
    // });
    let matrix = Array.from({ length: this[0].length }, function () {
        return Array.from({ length: this.length })
    });
    // debugger
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
                matrix[j][i] = this[i][j];
        }
    }
    console.log(matrix);
};

[[1,2,3], [4,5,6], [7, 8, 9]].transpose();
// [[1,4], [2,5], [3,6]]

