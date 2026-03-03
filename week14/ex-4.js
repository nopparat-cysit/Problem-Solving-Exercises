function isPalindrome(word) {
    let data = word
    
    if (data.split('').reverse().join('') === word) {
        return true
    }
    return false
}
 
 let result1 = isPalindrome("madam");
 console.log(result1); // true
 
 let result2 = isPalindrome("hello");
 console.log(result2); // false
 