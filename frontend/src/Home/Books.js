import React, { useState } from 'react';
import '../CSS/Product.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; 
import Authuse from '../Components/Auth';
import { useNavigate } from 'react-router-dom';

const toysData = [
  {
    "id": 1,
    "title": "Woody",
    "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
    "likes": 33,
    "price": 350
  },{
    "id": 2,
    "title": "Buzz Lightyear",
    "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
    "likes": 14,
    "price": 150
  },
  {
    "id": 3,
    "title": "Mr. Potato Head",
    "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
    "likes": 3,
    "price": 380
  },
  {
    "id": 4,
    "title": "Slinky Dog",
    "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
    "likes": 4,
    "price": 250
  },
  {
    "id": 5,
    "title": "Rex",
    "image": "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
    "likes": 1,
    "price": 120
  },
  {
    "id": 6,
    "title": "Bo Peep",
    "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
    "likes": 2,
    "price": 190
  },
  {
    "id": 7,
    "title": "Hamm",
    "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
    "likes": 0,
    "price": 180
  },
  {
    "id": 8,
    "title": "Little Green Men",
    "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
    "likes": -2,
    "price": 200
  },
  {
    "id": 9,
    "title": "Watch Men",
    "image": "https://www.kidshopy.com/uploads/products/product_283.png",
    "likes": 5,
    "price": 500
  },{
    "id": 10,
    "title": "Hollow man bla",
    "image": "https://www.kidshopy.com/uploads/products/small/product_1903.png",
    "likes": 5,
    "price": 60
  },{
    "id": 11,
    "title": "Shapes",
    "image": "https://www.kidshopy.com/uploads/products/small/product_1090.png",
    "likes": 5,
    "price": 100
  },{
    "id": 12,
    "title": "Revolving Music",
    "image": "https://www.kidshopy.com/uploads/products/small/product_1947.jpg",
    "likes": 5,
    "price": 50
  },
  {
    "id": 13,
    "title": "TIK TIK RATTLE",
    "image": "https://www.kidshopy.com/uploads/products/small/product_229.jpeg",
    "likes": 5,
    "price": 300
  },
  {
    "id": 14,
    "title": "ANAM CAR",
    "image": "https://www.kidshopy.com/uploads/products/small/product_486.jpg",
    "likes": 5,
    "price": 750
  },
  {
    "id": 15,
    "title": "front round tab",
    "image": "https://www.kidshopy.com/uploads/products/small/product_742.jpg",
    "likes": 4,
    "price": 230
  },
  {
    "id": 16,
    "title": "Rally jeep",
    "image": "https://www.kidshopy.com/uploads/products/small/product_720.jpg",
    "likes": 5,
    "price": 550
  }
];

const AsideComponents = () => {
    const auth = Authuse();
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    
    const addToCart = (toy) => {
        setCart([...cart, toy]);
    };

    const toggleCart = () => setShowCart(!showCart);
    const placeOrder = () => {
        setCart([]);
        setOrderPlaced(true);
    };
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    let handleAddToCart;
    if (auth.userName) {
        handleAddToCart = (toy) => {
            addToCart(toy);
        };
    } else {
        handleAddToCart = () => {
            navigate('/login');
        };
    }

    return (
        <Container>
            <Row>
                {toysData.map(toy => (
                    <Col key={toy.id} xs={12} sm={6} md={4} lg={3}>
                        <div className="toy-item">
                            <h3>{toy.title}</h3>
                            <Image src={toy.image} alt={toy.title} fluid className="toy-image"/>
                            <p>${toy.price}</p>
                            <Button onClick={() => handleAddToCart(toy)}>Add to Cart</Button>
                        </div>
                    </Col>
                ))}
            </Row>
            {auth.userName && (
                <>
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
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.title}</td>
                                                <td>${item.price}</td>
                                                <td className="cart-buttons">
                                                    <Button onClick={() => removeFromCart(index)} variant="danger">Remove</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p>Total Price: ${totalPrice}</p>
                                <Button onClick={placeOrder}>Place Order</Button>
                            </div>
                        </Col>
                    </Row>
                    {orderPlaced && (
                        <Row className="mt-3">
                            <Col>
                                <p>Thank you for your order!</p>
                            </Col>
                        </Row>
                    )}
                </>
            )}
            <Row className="mt-3">
                <Col>
                    <Button onClick={toggleCart}>{showCart ? 'Hide Cart' : 'Show Cart'}</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AsideComponents;

