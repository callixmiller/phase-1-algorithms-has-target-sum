function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  This solution uses O(n^2) time complexity
*/

/* 
  Add your pseudocode here
  Iterate through an array comparing two values
    find if two numbers add up equal the target value
      if two numbers in array add up to target value
        return true
*/

/*
  Add written explanation of your solution here
  hasTargetSum iterates a for loop on the array.
  A nested loop iterates the array with an index of + 1, this prevents a number being duplicated.
  If statement checks to see if array index vale of i + array index value of j is equal to target value.
  If two values add up to target value, true is returned.
  If two values do not add up to target value, false is return. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
