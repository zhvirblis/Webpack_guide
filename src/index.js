import _ from 'lodash';
let context = require.context('./test', false, /\.test.json$/);
var obj = {};
context.keys().forEach(function(key){
    obj[key] = context(key);
});
console.log(obj);

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
