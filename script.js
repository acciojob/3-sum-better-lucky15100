function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        // If the sum is equal to the target, we found the closest sum, so we can return it immediately
        return sum;
      }
    }
  }

  return closestSum;
}

// Test the function with the example input
const S = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(S, target);
console.log(result); // Output: 2 (as -1 + 2 + 1 = 2)
