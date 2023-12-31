import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <header className="header">
      <div className="container">
        <h2>Products</h2>
        <div className='nav-links'> 
          {currentPathname !== '/' && <Link to="./" className="go-back-btn">Go Back</Link>}
          <Link to="/product/add" className="add-product-btn">Add Product</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;