/**
 * Generators
 * Using fetch API
 */

const h = require('../helpers');
const fetch = require('node-fetch');

function ajax(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => dataGen.next(data)); // We can also send value to the generator
}

function* steps() {
    // fetching post 1
    const posts = yield ajax('http://jsonplaceholder.typicode.com/posts/1');
    h.log(posts);

    // fetching random user
    const randomuser = yield ajax('https://randomuser.me/api/');
    h.log();
    h.log(randomuser.results[0].name);

    // fetching random name
    const name = yield ajax('https://uinames.com/api/?region=united+states&gender=random');
    h.log();
    h.log(name);
}

const dataGen = steps();
dataGen.next(); // kick it off
