import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import Projects from './pages/projects/Projects'
import Contacts from './pages/contacts/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'
import { NotFound } from './pages/NotFound';


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/gallery' element={<Gallery />} />
      <Route  path='/projects' element={<Projects />} />
      <Route  path='/contacts' element={<Contacts />} />
      <Route path="*" element={<NotFound />}  />
    </Routes>
    <Footer />
    </>
  )
}

export default App
