/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    const invert = (node) => {
        if (!node) return;

        const tmpChild = node.left;
        node.left = node.right;
        node.right = tmpChild;
        invert(node.left);
        invert(node.right);
    };

    invert(root);

    return root;
};
