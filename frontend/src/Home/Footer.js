import React from 'react';
import '../CSS/Footer.css'
function KidShopFooter() {
  return (
    <footer className="kidshop-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="footer-heading">About KidShop</h4>
            <p className="footer-text">Welcome to KidShop, your one-stop destination for all things fun and educational for kids! We offer a wide range of toys, games, books, and more to spark creativity and imagination in children of all ages.</p>
          </div>
          <div className="col-md-6">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">Email: info@kidshop.com</p>
            <p className="footer-text">Phone: 123-456-7890</p>
            <p className="footer-text">Address: 123 KidStreet, FunCity</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center footer-text">© {new Date().getFullYear()} KidShop. All rights reserved.</p>
          <p className="text-center footer-text">Kishal</p>
        </div>
      </div>
    </footer>
  );
}

export default KidShopFooter;
