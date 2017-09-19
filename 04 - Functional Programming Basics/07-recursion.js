/**
    Concept     :   Recursions
    Description :   Recursion is a technique for iterating over an operation by having a
                    function call itself repeatedly until it arrives at a result.
    Usability   :   It allows for the construction of code that doesn’t require setting
                    and maintaining state with local variables.
                    Recursive functions are also naturally easy to test because they are easy to write in a pure manner
    Source      :   https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7
*/

// Create a function to countdown & display output from 10 to 1
const countdownFrom = function(num) {
    if (num === 0) return;
    console.log(num);
    countdownFrom(num - 1);
};

countdownFrom(10);
