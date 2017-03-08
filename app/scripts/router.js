var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var menuModel = require('./models/menu.js');
var orderModel = require('./models/order.js');
var menuItem = require('./components/menu.json');

var MenuContainer = require('./components/menu.jsx').MenuContainer;

var AppRouter  = Backbone.Router.extend({
  routes: {
    '': 'menu'
  },
  initialize: function(){
    this.menuItems = new menuModel.MenuCollection(menuItem);
    console.log("router initialize", this.menuItems)
    
  },
  menu: function(){
    ReactDOM.render(
      React.createElement(MenuContainer, {router: this}),
      document.getElementById('app')
    )
  }
});

var appRouter = new AppRouter();

module.exports = appRouter
