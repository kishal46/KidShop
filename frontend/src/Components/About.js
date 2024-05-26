import React from 'react';
import '../CSS/About.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About KidShop</h1>
            <p>Welcome to <span className="highlight">KidShop</span>, your one-stop destination for all things children's fashion, toys, and accessories!</p>
            <p>At <span className="highlight">KidShop</span>, we understand the joy and importance of providing children with quality products that spark their imagination, encourage creativity, and ensure their comfort and safety.</p>
            <p>Our mission is to offer a wide range of carefully curated products that cater to the diverse needs and preferences of children and their parents. From trendy apparel and stylish accessories to educational toys and games, we strive to bring you the best selection at affordable prices.</p>
            <p>Customer satisfaction is our top priority, and we are committed to providing exceptional service at every step of your shopping journey. Whether you're browsing our online store or seeking assistance from our knowledgeable team, we're here to make your experience <span className="emphasis">enjoyable</span> and <span className="emphasis">hassle-free</span>.</p>
            <p className="thank-you">Thank you for choosing <span className="highlight">KidShop</span> for all your children's shopping needs. We look forward to serving you and your family!</p>
        </div>
    );
};

export default AboutPage;
