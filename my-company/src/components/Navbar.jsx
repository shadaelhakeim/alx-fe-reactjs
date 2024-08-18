// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#f8f9fa', // Example color
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
