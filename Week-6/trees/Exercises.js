class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    findNode(value) {
        let found = false
        if (this.value === value) 
            found = true
         else if (value > this.value && this.rightChild) {
            found = this.rightChild.findNode(value)
        } else if (value <= this.value && this.leftChild) {
            found = this.leftChild.findNode(value)
        }
        return found
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        } else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        } else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        } else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        } else {
            this.rightChild = new BSNode(newVal)
        }
    }
    //made this function cuz you asked for two params only :3 
    findCommonParent(node1, node2) {
        return this.findCommonParentForTree(this, node1, node2)
    }

    findCommonParentForTree(root, node1, node2) {
        if (!root) {
            return null
        } else if (root.value === node1 || root.value === node2) {
            return root
        }

        let leftCommon = this.findCommonParentForTree(root.leftChild, node1, node2)
        let rightCommon = this.findCommonParentForTree(root.rightChild, node1, node2)

        if (leftCommon && rightCommon) {
            return root
        } else {
            return leftCommon ? leftCommon : rightCommon
        }
    }
    removeNode(node, val) {
        if (!node) 
            return undefined;
         else if (val < node.value) {
            node.leftChild = this.removeNode(node.leftChild, val);
            return node;
        } else if (val > node.value) {
            node.rightChild = this.removeNode(node.rightChild, val);
            return node;
        } else {
            if (!node.leftChild && !node.rightChild) {
                node = undefined;
                return node;
            } else if (!node.leftChild) {
                node = node.rightChild;
                return node;
            } else if (!node.rightChild) {
                node = node.leftChild;
                return node;
            }


            let minNode = this.findMinNode(node.leftChild);
            node.value = minNode.value;


            node.leftChild = this.removeNode(node.leftChild, minNode.value);
            return node;
        }


    }
    findMinNode(node) {
        if (!node.rightChild) 
            return node;
         else 
            return this.findMinNode(node.rightChild);
        
    }
}


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 