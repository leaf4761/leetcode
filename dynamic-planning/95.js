/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    function gTrs(start, end) {
        let res = []
        if (start > end) {
            res.push(null)
            return res
        }

        for (let i = start; i <= end; i++) {
            let leftTree = gTrs(start, i - 1)
            let rightTree = gTrs(i + 1, end)

            for (let l of leftTree) {
                for (let r of rightTree) {
                    let node = new TreeNode(i)
                    node.left = l
                    node.right = r
                    res.push(node)
                }
            }
        }
        
        return res
    }

    if (n == 0) {
        return []
    }

    return gTrs(1, n)
};

console.log(generateTrees(3))