import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landingPage/Home/HomePage'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import SignUp from './landingPage/signUp/SignUp'
import AboutPage from './landingPage/about/AboutPage'
import PricingPage from './landingPage/pricing/PricingPage'
import SupportPage from './landingPage/support/SupportPage'
import ProductPage from './landingPage/products/ProductPage'
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'
import NotFound from './landingPage/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/product' element={<ProductPage />}/>
      <Route path='/pricing' element={<PricingPage />}/>
      <Route path='/support' element={<SupportPage />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
      
  </StrictMode>,
)
