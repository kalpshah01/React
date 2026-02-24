import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Hero from './components/Hero'
import Main from './components/Main'
import banner from './assets/images/banner.png';
import banner1 from './assets/images/banner1.png';
import Product from './components/Product'
import Review from './components/Review'
import About from './components/About'
import Contact from './components/Contact'

function App() {
    return (
        <div>
            <Navbar />
            <Hero image={banner} title="Welcome to Our Store" desc="Best products for you" />
            <Main />
            <Hero image={banner1} title="Our Products" desc="Quality and value in every item" />
            <Product />
            {/* <Hero image={hero2} title="Our Products" subtitle="Quality and value in every item" /> */}
            <Review />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
