import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import BreakfastSpecials from './components/BreakfastSpecials';
import Experience from './components/Experience';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <SignatureDishes />
        <BreakfastSpecials />
        <Experience />
        <Menu />
        <Location />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export default App;
