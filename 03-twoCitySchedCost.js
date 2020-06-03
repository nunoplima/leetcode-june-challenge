/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = costs => {
    const max = costs.length / 2    
    let total = 0;

    const lst = [];
    costs.forEach(([aCost, bcost], i) => {
        lst.push([aCost - bcost, i]);
    });

    lst.sort((a, b) => a[0] - b[0]);

    lst.forEach(([cost, i], idx) => {
        if (idx < max) total += costs[i][0];
        else total += costs[i][1];
    });

    return total;
};


console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])); // 110
console.log(twoCitySchedCost([[10,20],[20,40],[30,50],[10,20]])); // 90
