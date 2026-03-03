function isEvenNumber(num) {
    let result = false
    if (num %2==0 ) {
        result = true
    } else {
        result = false
    }
    return result
};

let result1 = isEvenNumber(4);
console.log(result1); // true

let result2 = isEvenNumber(7);
console.log(result2); // false