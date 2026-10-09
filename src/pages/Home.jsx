import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowRight, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

const categories = ['All pieces', 'Home', 'Accessories', 'Lifestyle'];
export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All pieces');
  const [sort, setSort] = useState('featured');
  const [notice, setNotice] = useState('');
  const [dataError] = useState(false);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter(p => (category === 'All pieces' || p.category === category) && (!normalized || `${p.name} ${p.category} ${p.description} ${p.color}`.toLowerCase().includes(normalized)));
    if (sort === 'price-low') result.sort((a,b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a,b) => b.price - a.price);
    if (sort === 'rating') result.sort((a,b) => b.rating - a.rating);
    return result;
  }, [query, category, sort]);
  return <main id="top">
    <section className="hero wrap"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"/> THE EVERYDAY EDIT · VOL. 01</div><h1>Good things.<br/><em>Every day.</em></h1><p>Thoughtful little things that make ordinary moments feel a little more special. Consider this your invitation to slow down.</p><div className="hero-actions"><a href="#collection" className="button button-dark">Find your everyday <ArrowRight size={16}/></a><a href="#story" className="text-link">A little about us <ArrowDownRight size={16}/></a></div><div className="hero-note"><span className="hero-note-stars">★★★★★</span><span>Loved by 2,000+ happy homes</span></div></div><div className="hero-visual"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1300&q=90" alt="Sunlit, warm minimalist home interior"/><div className="hero-image-label"><span className="label-sparkle">✳</span><span>Made for the<br/><strong>little moments.</strong></span></div><div className="hero-index">01 <span/> 04</div></div><div className="hero-side-note">A MORE CONSIDERED KIND OF EVERYDAY</div></section>
    <section className="trust-strip"><div className="wrap trust-inner"><span><Sparkles size={16}/> Thoughtfully selected</span><span>✳ &nbsp; Everyday essentials</span><span>↗ &nbsp; Small joys, big difference</span><span>♡ &nbsp; Made to be kept</span></div></section>
    <section className="collection-section wrap" id="collection"><div className="section-heading"><div><div className="eyebrow">A FEW GOOD THINGS</div><h2>Find your <em>favorites.</em></h2><p>Useful, lovely, and just a little bit special.</p></div><span className="collection-count">01 — {String(filtered.length).padStart(2,'0')} / OUR EDIT</span></div>
      <div className="filter-toolbar"><div className="category-tabs" role="group" aria-label="Filter by category">{categories.map(item => <button key={item} className={`category-tab ${category===item?'active':''}`} onClick={()=>setCategory(item)}>{item}</button>)}</div><div className="filter-controls"><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find something lovely..." aria-label="Search products"/><kbd>⌕</kbd></label><label className="sort-box"><SlidersHorizontal size={15}/><span className="sr-only">Sort products</span><select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option></select></label></div></div>
      {notice && <div className="toast" role="status">✓ &nbsp; {notice} added to your bag.</div>}
      {dataError ? <div className="empty-state"><h3>Something went wrong.</h3><p>We couldn't load the collection. Please refresh and try again.</p><button className="button button-dark" onClick={()=>window.location.reload()}>Try again</button></div> : filtered.length ? <div className="product-grid">{filtered.map(product=><ProductCard key={product.id} product={product} onAdded={name=>{setNotice(name); window.setTimeout(()=>setNotice(''),2200);}}/>)}</div> : <div className="empty-state"><span className="empty-icon">⌕</span><h3>No little treasures found.</h3><p>Try another search or explore all of our pieces.</p><button className="button button-dark" onClick={()=>{setQuery('');setCategory('All pieces');}}>Clear filters <ArrowRight size={15}/></button></div>}
      <div className="collection-foot"><span>Showing {filtered.length} of {products.length} thoughtfully chosen pieces</span><span>GOOD THINGS TAKE YOU PLACES ↗</span></div>
    </section>
    <section className="note-banner"><div className="wrap note-inner"><span className="note-mark">✳</span><div><div className="eyebrow">A NOTE FROM LUMA</div><h2>Less, but <em>lovelier.</em></h2><p>We believe the things around us should earn their place. So we look for considered design, everyday usefulness, and those small details that make you smile.</p></div><a href="#story" className="round-link" aria-label="Read our story"><ArrowRight/></a></div></section>
  </main>;
}
