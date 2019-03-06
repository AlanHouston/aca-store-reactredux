import React from "react";
import ProductDetail from "./ProductDetail";
import { connect } from 'react-redux';

function ProductList(props){

    let productDetails = null;
    if(props.products && props.products.length > 0){
        productDetails = props.products.map((p,i)=>{
            return  <ProductDetail 
            showAddButton = {true}
            addToCart={props.addItemToCart}
            key={i} 
            product={p} />
        });
    }else{
        productDetails = "No products available";
    }
    return (
      <div>
          {productDetails}
      </div>
    )
}

//must put this in every component that will use connect
//products is the name of the prop that we neeed to keep synchronized
const mapStateToProps = (state ) => {
   return {
     products: state.products
   }
 }
  export default connect(mapStateToProps)(ProductList)