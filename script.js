const heading = React.createElement('div', {id:"parent"},
    [React.createElement('div', {id:"children"},
        [React.createElement('h1', {id:"heading", xy:"abc"}, "Hello JS from React!"), React.createElement('h2', {id:"heading2", xy:"abc"}, "Hello im H2 from React!")]
    ), React.createElement('div', {id:"children2"},
        [React.createElement('h1', {id:"heading1", xy:"abc"}, "Hello JS from React!"), React.createElement('h2', {id:"heading3", xy:"abc"}, "Hello im H2 from React!")]
    )]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'))?.render(heading);