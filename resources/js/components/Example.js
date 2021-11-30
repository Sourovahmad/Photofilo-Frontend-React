import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
          <h1> hello</h1>
        </div>
    );
}

export default Example;

if (document.getElementById('indexPage')) {
    ReactDOM.render(<Example />, document.getElementById('indexPage'));
}
