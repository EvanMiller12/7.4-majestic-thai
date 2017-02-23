var React = require('react');
var ReactDOM = require('react-dom');

var MenuContainer = require('./components/main.jsx').MenuContainer;

ReactDOM.render(
  React.createElement(MenuContainer),
  document.getElementById('app')
);
