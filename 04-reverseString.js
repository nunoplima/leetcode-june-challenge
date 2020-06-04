/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    const mid = Math.floor(s.length / 2);
    for (let i = 0; i < mid; i++) {
        let tmp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = tmp;
    }
    return s;
};
