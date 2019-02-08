import React, { Component } from 'react';
import { render } from 'react-dom';

class InjectApp extends Component {
  render() {
    return (
      <div>
        <button>Open TodoApp</button>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
