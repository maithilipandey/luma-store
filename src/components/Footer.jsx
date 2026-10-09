import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function InstagramIcon({ size = 19 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="story">
      <div className="wrap footer-top">
        <div>
          <Link to="/" className="wordmark footer-logo">
            luma<span>.</span>
          </Link>
          <p>
            Thoughtful things for the everyday.
            <br />
            Made to be lived with, loved, and kept.
          </p>
        </div>

        <div className="footer-right">
          <div>
            <span className="eyebrow">COME SAY HI</span>
            <a href="mailto:hello@lumastore.example">
              hello@lumastore.example <ArrowUpRight size={14} />
            </a>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon size={19} />
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Luma Studio</span>
        <span>Made for the little moments.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}