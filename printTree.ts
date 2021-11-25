// goal to print id from 0 - 8
// object with nested arrays
// input the node and loop through the first node 

interface ITreeNode {
    id: number;
    childNodes: ITreeNode[];
}
  
const myTree: ITreeNode = {
    id: 0,
    childNodes: [{
        id: 1,
        childNodes: [{
            id: 2,
            childNodes: [],
        }, {
            id: 3,
            childNodes: [],
        }],
    }, {
        id: 4,
        childNodes: [],
    }, {
        id: 5,
        childNodes: [{
            id: 6,
            childNodes: [{
                id: 7,
                childNodes: [{
                    id: 8,
                    childNodes: [],
                }],
            }],
        }],
    }],
};


const loop = (tree : ITreeNode) => {

    // handle the error if input does not exist
    if (!tree) {
        console.log('no tree');
    }

    // check for childNodes
    let childNodes = tree.childNodes;

    if (childNodes) {
        // loop through the childNodes and find the nested nodes.
        for (let i = 0; i < childNodes.length; i++) {
            loop(childNodes[i])
        }
    }
}

loop(myTree);
