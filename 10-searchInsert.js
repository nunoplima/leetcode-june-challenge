/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let first = 0;
    let last = nums.length;
    while (first < last) {
        const mid = Math.floor((first + last) / 2);
        if (target == nums[mid]) return mid;
        if (target > nums[mid]) first = mid + 1;
        else if (target < nums[mid]) last = mid;
    }
    return first;
};
