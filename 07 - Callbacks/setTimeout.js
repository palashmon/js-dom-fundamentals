const h = require('../helpers');

// life Without Callbacks
{
    h.log('starting ...');
    h.log('ending!');
    h.log('continuing ...');
    /*
        As you can see when you run this, it prints "ending!" before "continuing ..."
        pretty much exactly as expected. And no good. We don't want to end in the middle.
        We want to end at the end.
    */
}

// Create some space in console
h.log();

// settimeout() and a simple callback
{
    // Define the Write Ending Function
    const writeEnding = () => h.log('ending!');

    h.log('starting ...');

    // Wait 1.5 second before firing the writeEnding() function
    setTimeout(writeEnding, 1500);

    h.log('continuing ...');

    /*
        Now we're back to having the right order in our output,
        even though the code's not sequential, because we're waiting 1.5 second
        before executing writeEnding function that writes our "ending!" string
    */
}
