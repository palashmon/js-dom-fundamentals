/**
    Concept     :   Monad
    Description :   Monad are special functors that also implements flatMap
    Usability   :   Quite useful while using streams
    Source      :   https://www.youtube.com/watch?v=9QveBbn7t_c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=12


    Flatmap     :   For each element in the source Observable, spawn a new stream using the function `f`,
                    and collect events from each of the spawned streams into the result.
                    The return value of function `f` can be either an Observable or a constant value.
                    The result of flatMap is always an EventStream.
                    The "Function Construction rules" apply here.

*/

const Bacon = require('baconjs');

const portuguese = ['que', 'bonito', 'rir', 'pequeno', 'longe'];
const randomWord = arr => arr[Math.floor(Math.random() * (arr.length - 1))];
const getPortuguese = word => {
    const promise = Promise.resolve(`${word} ${randomWord(portuguese)}`);
    const stream = Bacon.fromPromise(promise);
    return stream;
};

const stream = new Bacon.Bus();

stream
    .flatMap(word => getPortuguese(word))
    // .map(word => getInPortuguese(word))
    .map(word => word.toUpperCase())
    .onValue(word => console.log(word));

stream.push('cat');
stream.push('meal');
stream.push('trumpet');

/*
Output using map:
Bacon.fromPromise({})
Bacon.fromPromise({})
Bacon.fromPromise({})

and output using flatMap:
CAT RIR
MEAL QUE
TRUMPET BONITO

*/
