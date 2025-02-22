import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampusFacilites from './pages/CampusFacilites';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import NewsAndEventsPage from './pages/NewsAndEventsPage';
import { Navbar } from 'react-bootstrap';
import MainNavBar from './components/MainNavBar';
import Footer from './components/Footer';
import Placements from "./pages/Placements";

function App() {
  return (
    <BrowserRouter>
    <MainNavBar/>
      <Routes>
        <Route path='/newsevent' element={<NewsAndEventsPage/>}/>
        <Route path='/campusfacilities' element={<CampusFacilites />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/placements' element={<Placements/>} />
       <Route path='/aboutus' element={<AboutUs />} />


      </Routes>
     
     <Footer/>

    </BrowserRouter>
  );
}

export default App;
