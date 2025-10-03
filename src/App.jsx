import React, { useState, useEffect } from "react";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import FAQs from './pages/FAQs'
import About from './pages/About'
import RequestDemo from './pages/RequestDemo'
import NotFound from './pages/NotFound'
import ScrollTop from './components/ScrollTop'
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <ScrollTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/about' element={<About />} />
            <Route path='/request-demo' element={<RequestDemo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
