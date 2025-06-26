import React from 'react';
import ReactDOM from 'react-dom/client';


//Create Element way
const heading = React.createElement('h1', {id:"heading"}, 'Its my practice');

//JSX way JSX -> React CreateEkement ->React Element Object -> html / React Element
const jsxHeading = (<h1 id="heading">Its my JSX practice</h1>);

//React functional component
const FunHeading = () => (
    <div id='container'>
        {jsxHeading}
        <h1>Its My Functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'))?.render(<FunHeading />);