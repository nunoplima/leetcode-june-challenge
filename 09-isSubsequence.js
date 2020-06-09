/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    const rows = s.length + 1;
    const cols = t.length + 1;
    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0);
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (s[r - 1] === t[c - 1]) {
                matrix[r][c] = matrix[r - 1][c - 1] + 1; 
            } else {
                matrix[r][c] = Math.max(matrix[r - 1][c], matrix[r][c - 1]);
            }
        }
    }

    return matrix[rows - 1][cols - 1] === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));