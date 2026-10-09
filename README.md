# Luma — Everyday Essentials

A thoughtfully designed mini e-commerce storefront built with **React, Vite, React Router, and CSS**.

Luma brings together a clean shopping experience and essential e-commerce functionality, allowing users to explore products, discover items through search and filters, view product details, and manage a persistent shopping cart.

> **Project:** React Developer Intern — Take-Home Assessment

## ✨ Features

### Shopping Experience
- **Product catalogue** — Browse products powered by local JSON data.
- **Live search** — Find products by name, category, description, or colour.
- **Category filtering** — Explore products by category.
- **Product sorting** — Sort by featured order, price, or rating.
- **Product details** — View individual products through dedicated routes.
- **Related products** — Discover other items from the catalogue.

### Shopping Cart
- Add products to the cart.
- Increase or decrease product quantities.
- Remove individual items or clear the cart.
- View the total item count, subtotal, delivery fee, and final total.
- Preserve cart contents across page refreshes using `localStorage`.

### User Interface & Code Quality
- Responsive layouts for desktop, tablet, and mobile.
- Reusable React components for consistent UI.
- React Context for centralized cart state management.
- Accessible labels and image alternative text.
- Empty states, invalid-product handling, and user feedback.
- Image fallback handling for failed product photos.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and build tooling |
| React Router | Client-side navigation |
| JavaScript | Application logic and interactions |
| CSS | Responsive styling and visual design |
| Local JSON | Product catalogue data |
| React Context & Hooks | State management |
| localStorage | Persistent cart data |
| Lucide React | Interface icons |

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/maithilipandey/luma-store.git
```

**2. Navigate to the project directory**

```bash
cd luma-store
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
luma-store/
├── public/                  # Static assets, if present
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Cart.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🧠 Implementation Highlights

- **Reusable components:** Shared UI components keep the application organized and maintainable.
- **Centralized cart state:** `CartContext` manages cart actions and derives the total item count.
- **Persistent state:** Cart data is saved under `luma-store-cart-v1` in browser storage, with safeguards for malformed stored data and storage errors.
- **Composable filtering:** Search and category filters work together, with sorting applied to the filtered results.
- **Input constraints:** Cart quantities are capped at 99, while the product detail quantity selector is capped at 10.
- **Graceful handling:** Empty search results, invalid product routes, and failed product images have fallback handling.

## 🧪 Assessment Coverage

- [x] Local product data using JSON
- [x] Responsive product catalogue
- [x] Search, category filters, and sorting
- [x] Product detail pages and navigation
- [x] Cart management and quantity controls
- [x] Item count and price calculations
- [x] Cart persistence with `localStorage`
- [x] Reusable components and React Hooks
- [x] Responsive styling and fallback states
- [x] Project documentation and setup instructions

## 📝 Notes

- Product information is stored locally; no backend or external product API is required.
- Product photographs are loaded from Unsplash URLs and require an internet connection.
- Checkout is a demonstration interaction. No real payments or orders are processed.

## 👩‍💻 Author

**Maithili Pandey**

- GitHub: [@maithilipandey](https://github.com/maithilipandey)

---

Built with React and a focus on clean UI, reusable components, and practical e-commerce functionality.

