import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home.css';
import BasicExample from './AsideComponents';

function Products() {
  const products = [
    { name: "Kids Board Book", price: "Rs.21", discountPrice: "Rs.15", image: "https://www.kidshopy.com/uploads/products/small/product_1190.jpg" },
    { name: "Computer Our Lifeline-2", price: "Rs.30", discountPrice: "Rs.25", image: "	https://www.kidshopy.com/uploads/products/small/product_1598.jpg" },
    { name: "LED Ballons", price: "Rs.25", discountPrice: "Rs.20", image: "	https://www.kidshopy.com/uploads/products/small/product_1880.jpg" },
    { name: "Fair Fair Fair Toles", price: "Rs.40", discountPrice: "Rs.35", image: "	https://www.kidshopy.com/uploads/products/small/product_1464.jpg" },
    { name: "World famous ad", price: "Rs.50", discountPrice: "Rs.45", image: "		https://www.kidshopy.com/uploads/products/small/product_1473.jpg" },
    { name:"Duck Railway", price: "Rs.20", discountPrice: "Rs.45",image:"	https://www.kidshopy.com/uploads/products/small/product_1999.jpg"}
  ];
  const addToCart = () => {
  };
  return (
    <div className="fluid-container spacial">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <h3 className="text-primary">Special Products</h3>
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={`Product ${index + 1}`} />
              <div>
                <h6>{product.name}</h6>
                <p className="original-price">Original Price: <del>{product.price}</del></p>
                <p className="discount-price">Discounted Price: {product.discountPrice}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-12 col-lg-8">
          <aside className="p-3">
            <BasicExample />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Products;
