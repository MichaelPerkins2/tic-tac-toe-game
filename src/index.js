import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Game from './components/Game.js';


ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();


// history = [
//     // Before first move
//     {
//         squares: [
//             null, null, null,
//             null, null, null,
//             null, null, null,
//         ]
//     },
//     // After first move
//     {
//         squares: [
//             null, null, null,
//             null, 'X', null,
//             null, null, null,
//         ]
//     },
//     // After second move
//     {
//         squares: [
//             null, null, null,
//             null, 'X', null,
//             null, null, 'O',
//         ]
//     },
//     // ...
// ]
