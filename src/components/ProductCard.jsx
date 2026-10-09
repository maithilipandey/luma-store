import { ArrowUpRight, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onAdded }) {
  const { addToCart } = useCart();

  const add = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
    onAdded?.(product.name);
  };

  const handleImageLoad = () => {
    console.log('Image loaded:', product.name);
  };

  const handleImageError = (event) => {
    console.error('Image failed:', product.image);

    event.currentTarget.style.display = 'none';
    event.currentTarget.parentElement.classList.add('image-fallback');
  };

  return (
    <article className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-image-link"
        aria-label={`View ${product.name}`}
      >
        <div className="product-image">
          <img
            src={product.image}
            alt={product.alt || product.name}
            loading="eager"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />

          <span className="product-badge">{product.badge}</span>

          <span className="quick-view">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>

      <div className="product-meta">
        <span>{product.category}</span>
        <span className="rating">
          <Star size={12} fill="currentColor" />
          {product.rating}
        </span>
      </div>

      <div className="product-name-row">
        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <span className="product-price">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
      </div>

      <div className="product-bottom">
        <span className="product-color">
          Colour: {product.color}
        </span>

        <button
          className="add-mini"
          onClick={add}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={15} />
          <span>Add</span>
        </button>
      </div>
    </article>
  );
}
