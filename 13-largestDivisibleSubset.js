/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
    if (!nums.length) return [];

    nums.sort((a, b) => a - b);
    const helperArr = nums.map((num) => [num]);

    let resultIdx = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        let tmpArr = [];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % nums[i] === 0 && tmpArr.length < helperArr[j].length) tmpArr = helperArr[j];
        }

        helperArr[i] = [...helperArr[i], ...tmpArr];
        if (helperArr[i].length > helperArr[resultIdx].length) resultIdx = i;
    }

    return helperArr[resultIdx];
};

console.log(largestDivisibleSubset([1, 3, 4, 2]));
