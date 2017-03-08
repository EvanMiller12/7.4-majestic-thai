var Backbone = require('backbone');

// var OrderItem = Backbone.Model.extend({
//   defaults: {
//     items: []
//   }
// })
//
// var OrderItemCollection = Backbone.Collection.extend({
//   model: OrderItem
// });

var Order = Backbone.Model.extend({
  // defaults: function(){
  //   return {
  //     items: new OrderItemCollection()
  //   }
  // }
});

var OrderCollection = Backbone.Collection.extend({
  model: Order
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection
}
