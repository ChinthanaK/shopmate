import {Link, NavLink} from "react-router-dom";
import "./Header.css"
import Logo from "../assets/logo.png"

export const Header = () => {   
  return (
  <header>
    <Link to="/" className="logo">
      <img src={Logo} alt="Shopmate Logo" />
      <span>Shopmate</span>
    </Link>
    <nav className="navigation">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/cart" className="link">Cart</NavLink>
    </nav>
    <Link to="/cart" className="items">
      <span>Cart: 2</span>
    </Link>
  </header>
      
  )
}


