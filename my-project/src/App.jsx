import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import('tailwindcss').Config

function App() {
  return (
    <>
      <Navbar />

      <AboutMe />

      <ContactMe />
    </>
  )
}

export default App