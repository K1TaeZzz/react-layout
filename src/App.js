import './App.css';
import Hero from './components/Hero';
import ProductFeatures from './components/Product-features';
import ProductStats from './components/Product-stats';
import ProductPromo from './components/Product-promo';
import ProductHighlights from './components/Product-highlights';
import Benefits from './components/Benefits';
// import Training from './components/Training';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProductFeatures />
      <ProductStats />
      <ProductPromo />
      <ProductHighlights />
      <Benefits />
      {/* <Training /> */}
    </div>
  );
}

export default App;
