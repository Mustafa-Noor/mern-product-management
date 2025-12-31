import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Stax Product Management</h1>
        <p>Manage your products efficiently with our modern application</p>
        <div className="hero-actions">
          <a href="/products" className="btn-primary">View Products</a>
          <a href="/login" className="btn-secondary">Login</a>
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Product Management</h3>
            <p>Create, read, update, and delete products with ease</p>
          </div>
          <div className="feature-card">
            <h3>Category Organization</h3>
            <p>Organize products into categories for better management</p>
          </div>
          <div className="feature-card">
            <h3>Secure Authentication</h3>
            <p>JWT-based authentication for secure user access</p>
          </div>
          <div className="feature-card">
            <h3>Inventory Tracking</h3>
            <p>Keep track of product stock levels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
