import _ from 'lodash';
// import Print from './print';

function component() {
    var element = document.createElement('div');
    // element.onclick = Print.bind(null, 'Hello webpack!');
    return element;
}

document.body.appendChild(component());
