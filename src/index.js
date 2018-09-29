import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App';


if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  };
  render(AppComponent);
}

export default AppComponent;
