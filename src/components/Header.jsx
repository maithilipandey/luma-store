import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { itemCount } = useCart();
  return <>
    <div className="announcement">A little something for your everyday <span>✳</span> Complimentary shipping over ₹1,999</div>
    <header className="site-header wrap">
      <Link to="/" className="wordmark" aria-label="Luma home">luma<span>.</span></Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Shop all</NavLink>
        <a href="/#collection">Our collection</a>
        <a href="/#story">Our story</a>
      </nav>
      <div className="header-actions"><Link to="/cart" className="cart-link" aria-label={`Shopping cart, ${itemCount} items`}><ShoppingBag size={19}/><span>Bag</span><span className="cart-count">{itemCount}</span></Link><a className="header-contact" href="mailto:hello@lumastore.example">Say hello <ArrowUpRight size={14}/></a></div>
    </header>
  </>;
}
