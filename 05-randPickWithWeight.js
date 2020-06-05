/**
 * @param {number[]} w
 */
function Solution(w) {
    this.tWeight = w.reduce((a, b) => a + b);
    this.probs = w.reduce(
        (acc, cur) => [...acc, cur + (acc[acc.length - 1] || 0)],
        []
    );
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    if (this.probs.length === 1) return 0;

    const rand = Math.random() * this.tWeight;
    for (let i = 0; i < this.probs.length; i++) {
        if (this.probs[i] > rand) return i;
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
