import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/service.css';

const Services = () => {
  return (
    <section className="services" style={{ backgroundImage: `url('../Images/Background.jpg'')` }}>
      <Container>
        <h2 className="section-title">Our Services</h2>
        <Row>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">📦 Free Shipping</h3>
              <p className="service-description">Enjoy free shipping on all orders above $50!</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🎁 Personalized Gifts</h3>
              <p className="service-description">Add a personal touch to your gifts with our custom engraving service.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🛒 Easy Ordering</h3>
              <p className="service-description">Streamlined ordering process for a hassle-free shopping experience.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">💳 Flexible Payment Options</h3>
              <p className="service-description">Choose from a variety of payment methods including credit card, PayPal, and more.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🛠️ Product Customization</h3>
              <p className="service-description">Personalize your products with custom colors, sizes, and designs.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">📦 Express Delivery</h3>
              <p className="service-description">Need your order urgently? Opt for express delivery at checkout!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">📱 Mobile-Friendly Website</h3>
              <p className="service-description">Shop conveniently on the go with our mobile-friendly website.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🎨 Creative Packaging</h3>
              <p className="service-description">Our unique packaging will make your order stand out!</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🎁 Gift Cards</h3>
              <p className="service-description">Give the gift of choice with our customizable gift cards.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🔔 Order Notifications</h3>
              <p className="service-description">Stay updated on your order status with real-time notifications.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">💻 User-Friendly Interface</h3>
              <p className="service-description">Our website features an intuitive interface for seamless navigation.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🛍️ Wishlist</h3>
              <p className="service-description">Create your wishlist and save your favorite items for later!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">📦 Order Tracking</h3>
              <p className="service-description">Track your order every step of the way with our order tracking feature.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🎉 Seasonal Discounts</h3>
              <p className="service-description">Enjoy special discounts and promotions during holidays and seasons!</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service">
              <h3 className="service-title">🌟 VIP Membership</h3>
              <p className="service-description">Become a VIP member for exclusive perks and benefits.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
