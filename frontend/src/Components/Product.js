import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Authuse from './Auth';
const Product = () => {
    const auth = Authuse();
    const [showCart, setShowCart] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const removeFromCart = (itemId) => {
        const updatedCart = auth.price.filter(item => item.id !== itemId);
        auth.setprice(updatedCart);
    };
    const totalPrice = auth.price.reduce((acc, item) => acc + item.price, 0);
    const placeOrder = () => {
        setOrderPlaced(true);
        auth.setprice([]);
    };

    return (
        <div>
            {showCart && (
                <Row className="mt-5">
                    <Col>
                        <div className="shopping-cart">
                            <h2>Shopping Cart</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {auth.price.map((item)=>{
                                    return(
                                      <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td className="cart-buttons">
                                                <Button onClick={() => removeFromCart(item.id)} variant="danger">Remove</Button>
                                            </td>
                                        </tr>
                                    )
                                  })}
                                    {/* {auth.price.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td className="cart-buttons">
                                                <Button onClick={() => removeFromCart(item.id)} variant="danger">Remove</Button>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                            <p>Total Price: ${totalPrice}</p>
                            <Button onClick={placeOrder}>Place Order</Button>
                        </div>
                    </Col>
                </Row>
            )}
            {orderPlaced && (
                <Row className="mt-3">
                    <Col>
                        <p>Thank you for your order!</p>
                    </Col>
                </Row>
            )}
            {auth.price.map(item => <p key={item.id}>{item.title}</p>)}
        </div>
    );
}

export default Product;
