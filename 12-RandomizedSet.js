/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.hM = {};
    this.offset = 0;
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.hM.hasOwnProperty(val)) {
        this.arr.push(val);
        this.hM[val] = this.arr.length - 1;
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    const idx = this.hM[val];
    if (idx != undefined) {
        this.arr[idx] = this.arr[this.arr.length - 1];
        this.hM[this.arr[idx]] = idx;
        this.arr.pop();
        delete this.hM[val];
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
