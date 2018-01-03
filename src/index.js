import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';



function component() {
	var element = document.createElement('div');
  element.id = 'root';
  return element;
}
document.body.appendChild(component());


ReactDOM.render(<App />, document.getElementById('root'));
