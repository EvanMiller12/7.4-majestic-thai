var React = require('react');
var Backbone = require('backbone');

var models = require('../models/menu.js');
var menuItems = require('../components/menu.json');

var CartComponent = require('./cart.jsx').CartComponent;

var MenuContainer = React.createClass({
  getInitialState: function(){
    console.log("menucontainer getInitial state menuItems", menuItems)
    return {
      menuItems: this.props.router.menuItems,
      order: []
    }
  },
  componentWillMount: function(){
    menuItems = this.props.router.menuItems;
  },
  addToCart: function(item){
    this.state.order.push(item);
    this.setState({order: this.state.order});
  },
  render: function(){

    var categories = menuItems.groupBy(function(data){
      return data.get('category');
    });

    var sushi = categories.sushi;
    var entree = categories.entree;

    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <img src="https://unsplash.it/1000/200/?random" />
          </div>
        </div>
        <div className="row">
          <nav className="navbar navbar-light bg-faded">
            <a className="navbar-brand" href="#">
              <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/424079_10151481270771328_69503874_n.jpg?oh=33b48ad0cccee24677c790bde7215ef9&oe=593B58B4" width="30" height="30" alt="" />
            </a>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="search menu" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </nav>
        </div>

          <div className="row">
            <SushiListComponent sushiList= {sushi} addToCart={this.addToCart} />
            <EntreeListComponent entreeList= {entree} addToCart={this.addToCart} />
            <CartComponent cartList={this.state.order} />
          </div>
        </div>
    )
  }
});

var SushiListComponent = React.createClass({
  handleClick: function(item){
    this.props.addToCart(item);
  },
  render: function(){
    var self = this;

    var sushiRolls = this.props.sushiList.map(function(data){

      return (
          <div key={data.id} className="thumbnail">
            <h3>{data.get('item')}</h3>
            <img src={data.get('image')} alt="..." />
              <div className="caption">
                <p className="description">{data.get('description')}</p>
                <p className="price">{data.get('price').toFixed(2)}</p>
                <a onClick={function(){self.handleClick(data)}} href="#" className="btn btn-primary add-item-btn" role="button">
                  Add to Cart
                </a>
              </div>
          </div>
      )
    });
    return (
        <div className="col-sm-6 col-md-4">
          <h2>Sushi Rolls</h2>
          {sushiRolls}
        </div>
    )
  }
});

var EntreeListComponent = React.createClass({
  handleClick: function(item){
    this.props.addToCart(item);
  },
  render: function(){
    var self = this;

    var entrees = this.props.entreeList.map(function(data){

    return (
        <div key={data.cid} className="thumbnail">
          <h3>{data.get('item')}</h3>
          <img src={data.get('image')} alt="..." />
          <div className="caption">
            <p className="description">{data.get('description')}</p>
            <p className="price">{data.get('price').toFixed(2)}</p>
            <a onClick={function(){self.handleClick(data)}} href="#" className="btn btn-primary add-item-btn" role="button">
              Add to Cart
            </a>
          </div>
        </div>
    )
  });
    return (
      <div className="col-sm-6 col-md-4">
        <h2>Entree</h2>
        {entrees}
      </div>
    )
  }
});

module.exports = {
  MenuContainer: MenuContainer
}
