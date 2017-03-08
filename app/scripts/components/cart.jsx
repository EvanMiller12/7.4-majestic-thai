var React = require('react');
var Backbone = require('backbone');

var menuItems = require('../components/menu.json');

var OrderCollection = require('../models/order.js').OrderCollection;
var MenuContainer = require('./menu.jsx').MenuContainer;

var CartComponent = React.createClass({
  getInitialState: function(){
    return{
      orderCollection: new OrderCollection(),
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.state.orderCollection.create(this.props.cartList);
  },

  render: function(){
    var cartTotal = 0
    var cartItems = this.props.cartList.map(function(data){
       cartTotal += Number(data.get('price'))

      return (
        <li>
          <span className="cart-item">{data.get('item')}</span>
          <span className="cart-price">{data.get('price').toFixed(2)}</span>
        </li>
      )
    });

    return(
      <div className="col-sm-hidden col-md-4 thumbnail">
        <div className="cart-title">
          <h3>Your Order</h3>
        </div>
        <ul className="selected-items">
          {cartItems}
        </ul>
          <div className="cart-total">
            <span>Subtotal:</span> <span>{cartTotal.toFixed(2)}</span>
          </div>
          <a onClick={this.handleSubmit} href="#" className="btn btn-primary checkout-btn" role="button">
            Checkout
          </a>
      </div>
    )
  }
})

module.exports = {
  CartComponent: CartComponent
}
