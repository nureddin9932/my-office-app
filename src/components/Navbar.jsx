import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="icon">⚖️</span>
          <span className="title">مكتب الخدمات القانونية</span>
        </div>

        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>خدماتنا</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>الأسعار</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>من نحن</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>اتصل بنا</Link>
        </nav>

        <button className="cta-button">احجز استشارة</button>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
}
