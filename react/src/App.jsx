import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Hero from './components/Hero'
import Main from './components/Main'
import hero from './assets/images/hero.png';
import hero2 from './assets/images/hero2.png';
import Product from './components/Product'
import Review from './components/Review'
import About from './components/About'


function App() {

  return (
    <div>
    <Navbar/>
<Hero 
  image={hero} 
  title="Welcome to Our Store" 
  subtitle="Best products for you" 
/>
    <Main />
    <Hero image={hero2} title="Our Products" subtitle="Quality and value in every item" />
    <Product />
    {/* <Hero image={hero2} title="Our Products" subtitle="Quality and value in every item" /> */}
    <Review />
    <About />
   <Footer/>
    </div>
  )
}

export default App
