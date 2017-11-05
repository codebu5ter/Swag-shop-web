import React, {Component} from 'react';
import './wishlist.css';
import DataService from '../services/data-service';
import NotificationService from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {

  constructor(props) {
    super(props);

    this.state = {wishList:[
      {
        title
      }
    ]}
    //Bind functions
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishList.map((product) =>
      <ProductCondensed product={product} key={product._id} />
    );

    return (list);
  }

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default WishList;
