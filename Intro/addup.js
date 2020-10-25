const {performance} = require('perf_hooks');
/**
 * Function Complexity : O(n) --> iterates the entire input size
 * @param n
 * @returns {number}
 */
const addOneFirstMethod = (n) => {
    let result = 0;
    for (i=0;i<=n;i++){
        result+=i;
    }
    return result;
}

/**
 * Function Complexity : O(1) --> Returns immediate result
 * @param n
 * @returns {number}
 */
const addOneSecondMethod = (n) => {

    return n * (n+1)/2;
}


// First Function
let t1 = performance.now();
console.log(addOneFirstMethod(100));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 -t1) / 1000} seconds.`);

// Second Function
let t3 = performance.now();
console.log(addOneSecondMethod(100));
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 -t3) / 1000} seconds.`);

// How are we going to compare performance ? except the obvious Big-O calculation we can check the difference by using time functions
