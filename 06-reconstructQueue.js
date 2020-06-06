/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
    people.sort(([h1, k1], [h2, k2]) => {
        if (h1 === h2) return k1 - k2;
        return h2 - h1;
    });

    const res = new Array();

    people.forEach((p) => res.splice(p[1], 0, p));

    return res;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));