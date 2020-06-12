/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
    let mid = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.unshift(0);
            mid++;
        }
        if (nums[i] == 1) {
            nums.splice(i, 1);
            nums.splice(mid, 0, 1);
        }
    }
};
