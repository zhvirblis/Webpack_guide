import _ from 'lodash';
let a = require.context('../test', false, /hi.test.js$/);
console.log(a);

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
