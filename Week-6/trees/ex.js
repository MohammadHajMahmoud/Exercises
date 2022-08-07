class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    findNode(value) {
        let found = false
        if (this.value === value) found = true
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

}

const letters = ["H", "E", "S", "G", "L", "Y", "I"]

let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))

//Use the following to test
console.log(bSTree.findNode("H")) // should print true
bSTree.findNode("G") // should print true
bSTree.findNode("Z") // should print false
console.log(bSTree.findNode("F")) // should print false
bSTree.findNode("y") // should print false - we didn't make the 