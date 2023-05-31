function range(start, end) {
    if (start === end) {
        return [end];
    }

    return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    return arr[0] + sumRec(arr.slice(1));
}