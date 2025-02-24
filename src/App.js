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
import Department from "./pages/Department";
import VirtualTour from "./pages/VirtualTour";
import KeyBuildings from "./pages/KeyBuildings";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
    <MainNavBar/>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/newsevent' element={<NewsAndEventsPage/>}/>
        <Route path='/campusfacilities' element={<CampusFacilites />} />
        <Route path='/placements' element={<Placements/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/department" element={<Department/>}/>
        <Route path="/virtualtour" element={<VirtualTour/>}/>
        <Route path="/buildings" element={<KeyBuildings/>}/>  

      </Routes>
      <Chat/>
     
     <Footer/>

    </BrowserRouter>
  );
}

export default App;
