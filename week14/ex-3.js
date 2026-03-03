function findMax(nums) {
    let result = 0
    let data = nums.sort((a,b) => a - b)
    console.log(data);
     
   for (let i = nums[0] ; i < data.length; i++) {
    if ( data[i] < data[i + 1]) {
        result = data[i]
    } else {
        result = data[i]
    }
    
   }
   return result
};

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2