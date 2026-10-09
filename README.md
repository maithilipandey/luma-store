# Luma — Everyday Essentials

A responsive mini e-commerce storefront built with React, Vite, React Router, and plain CSS for a React Developer Intern take-home assessment.

## Features
- Product catalogue stored locally in `src/data/products.json` (no backend/API required)
- Live product search across name, category, description, and colour
- Category filters and sorting by featured order, price, or rating
- Dedicated product detail routes with related products
- Cart supports adding, removing, increasing/decreasing quantities, and clearing items
- Cart state persists in `localStorage` and survives page refreshes
- Dynamic item count, subtotal, delivery fee, and total
- Responsive layouts for desktop, tablet, and mobile
- Accessible labels, image alt text, feedback messages, empty states, and invalid-product fallback
- Reusable `Header`, `Footer`, and `ProductCard` components

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  components/   Shared Header, Footer, ProductCard
  context/      Cart context and localStorage persistence
  data/         Local product JSON
  pages/        Home, ProductDetail, Cart
  main.jsx      App routes and providers
  styles.css    Responsive design system and page styles
```

## Implementation notes
- `CartContext` centralizes cart actions and provides derived item count. Quantities are capped at 99 and the product detail quantity selector is capped at 10.
- The cart is stored under `luma-store-cart-v1`. Storage reads are guarded against malformed JSON and writes are guarded against storage errors.
- Search and category filters compose together; sorting is applied to the filtered result.
- Checkout is intentionally a demo interaction. No real payments or orders are processed.
- Product photography is loaded from Unsplash URLs, so an internet connection is needed to display the photos. Product details themselves are local JSON data.

## Assessment checklist
- [x] Local dummy JSON product data
- [x] Responsive product listing
- [x] Search and category filters
- [x] Empty state when filters return no products
- [x] Individual product details and routing
- [x] Add/remove cart items and change quantities
- [x] Total item count and price calculation
- [x] Cart persistence using localStorage
- [x] Reusable components and React Hooks
- [x] Responsive styling and error/fallback handling
- [x] README with setup and run instructions

## Before submission
Run `npm install` and `npm run build`, manually test the flows in the assessment checklist, then commit and push the project to your GitHub repository.
