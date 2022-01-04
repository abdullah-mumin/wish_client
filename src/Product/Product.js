import React from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';
import * as BsIcons from 'react-icons/bs';

import './Product.css'
const Product = ({product}) => {
    const { title, img, price, desc} = product;
    // const {_id} = product.data;
    return (
        
        <div>
          <div className="col">
                  <div className="card  border-0">
                      <img className='car-img' src={img} alt='...'></img>
                    <div className="card-body">
                      <h3 className="card-title"><b>{title}</b></h3>
                      <h5>$ {price}</h5>
                      <p>{desc.slice(0, 80)}...</p>
                    </div>
                    <button className="button-green d-flex">Buy Now  <BsIcons.BsCartPlus className='m-1 ico'/></button>
                    {/* <div class="m-3">
                        <button onClick={() => handleBooking(service._id)} class="button-orange">Buy Now <i class="fa-solid fa-cart-plus ico"></i></button>
                    </div> */}
                  </div>
                </div>
        </div>
    );
};

export default Product;