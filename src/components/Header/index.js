import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-logo"
    />
    <div className="nav-and-btn-container">
      <ul className="navigation-buttons">
        <li className="list-item">
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/products" className="link-item">
            Products
          </Link>
        </li>
        <li className="list-item">
          <Link to="/cart" className="link-item">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
