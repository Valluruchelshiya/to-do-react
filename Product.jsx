import './Product.css';
   function Product({title,price}){
     let styles = {backgroundColor: price > 30000 ? "yellow" : ""};
      return(
        <div className="Product" style = {styles}>
        <h1>{title}</h1>
        <h5>Price:{price}</h5>
        </div>
          );
  }
  export default Product;