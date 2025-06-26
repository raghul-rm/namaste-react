import React from 'react';
import ReactDOM from 'react-dom/client';


//Create Element way
const heading = React.createElement('h1', {id:"heading"}, 'Its my practice');
console.log(heading);

//JSX way JSX -> React CreateEkement ->React Element Object -> html
const jsxHeading = <h1 id="heading">Its my JSX practice</h1>
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById('root'))?.render(jsxHeading);