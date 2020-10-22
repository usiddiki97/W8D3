function range(start, end) {
    if (start >= end) {
        return [];
    }
    
    return [start].concat(range(start + 1, end));
};
console.log(range(1,10))
// def range(min, max)
//      return [] if min >= max
//      [min] + range(min + 1, max)
// end