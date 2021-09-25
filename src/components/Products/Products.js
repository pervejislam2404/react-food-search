import React from 'react';
import './Products.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSoppingCart } from '@fortawesome/free-solid-svg-icons'
// const element = <FontAwesomeIcon icon={faSoppingCart} />

const Products = (props) => {
    
    const {strCategory,strMeal,strMealThumb} = props.item;
    return (
        <div className="col-3">
          <div className="card my-2">
            <img src={strMealThumb} className="card-img-top img-responsive" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
             <p className="card-text">category: {strCategory}</p>
            <button onClick={()=> props.handleCart(props.item)} className="btn btn-primary"><i style={{margin: '0 5px',color: 'yellow'}} class="fas fa-shopping-cart"></i>see details</button>
         </div>
       </div>
        </div>
    );
};

export default Products;