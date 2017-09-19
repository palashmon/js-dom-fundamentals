/**
    Concept     :   Recursions
    Description :   Recursion is a technique for iterating over an operation by having a
                    function call itself repeatedly until it arrives at a result.
    Usability   :   It allows for the construction of code that doesn’t require setting
                    and maintaining state with local variables.
                    Recursive functions are also naturally easy to test because they are easy to write in a pure manner
    Source      :   https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7
*/

// Create a function to show nested tree for each matching parent
// We have an array like
const categories = [
    { id: 'Animals', parent: null },
    { id: 'Mammals', parent: 'Animals' },
    { id: 'Cats', parent: 'Mammals' },
    { id: 'Dogs', parent: 'Mammals' },
    { id: 'Persian', parent: 'Cats' },
    { id: 'Siamese', parent: 'Cats' },
    { id: 'Labrador', parent: 'Dogs' },
    { id: 'Chihuahua', parent: 'Dogs' }
];

// This is our recursive function
const makeTree = (categoryList, parent) => {
    const node = {};
    console.log('Parent id: ', parent);
    console.log();
    categoryList.filter(c => c.parent === parent).forEach(c => {
        node[c.id] = makeTree(categoryList, c.id);
    });
    return node;
};

const list = JSON.stringify(makeTree(categories, null), null, 2);
console.log(list);

/*
We get a beautiful tree like output like

{
  "Animals": {
    "Mammals": {
      "Cats": {
        "Persian": {},
        "Siamese": {}
      },
      "Dogs": {
        "Labrador": {},
        "Chihuahua": {}
      }
    }
  }
}

*/
