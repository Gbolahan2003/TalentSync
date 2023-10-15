
import './App.css';

import HeroSection from './HeroSection/HeroSection';
import AboutSectionContainer from './AboutSection/AboutSectionContainer';
import ShopifySection from './ShopifySection/ShopifySection';
import Support from './Support/Support';
import Trail from './Trail/Trail';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
<HeroSection/>
<AboutSectionContainer/>
<ShopifySection/>
<Support/>
<Trail/>
<Footer/>
    </div>
  );
}

export default App;
