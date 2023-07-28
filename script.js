function threeSum(nums, target) {
  // Sort the array in ascending order to simplify the process
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;
  let result;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // If the sum is equal to target, we have found the exact match
        return sum;
      }
    }
  }

  return closestSum;
}

// Test case
const S = [-1, 2, 1, -4];
const target = 1;
console.log("Closest sum:", threeSum(S, target));
