var Backbone = require('backbone');

var Menu = Backbone.Model.extend({
  
});

var MenuCollection = Backbone.Collection.extend({
  model: Menu
});

module.exports = {
  Menu: Menu,
  MenuCollection: MenuCollection
}
