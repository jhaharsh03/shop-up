import React from "react";
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from "./components/Banner/Banner";





function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Category/>
      <Category2/>
      <Services />
      <Banner/>
    </div>
  )
}

export default App
 