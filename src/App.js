import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
import ContactUsPage from "./pages/ContactUsPage";
import Graduate from "./pages/Graduate";
import PostGraduate from "./pages/Postgraduate";
import AddOnCourses from "./pages/Addon";
import FAQPage from "./pages/FAQPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import AcademicPage from "./pages/AcademicPage";
import StudentCorner from "./pages/StudentCorner";
import Gallery from "./pages/Gallery";
import ResearchDevelopment from "./pages/ResearchDevelopment";

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
        <Route path="/contactus" element={<ContactUsPage/>}/>  
        <Route path="/undergraduate" element={<Graduate/>}/>  
        <Route path="/postgraduate" element={<PostGraduate/>}/>  
        <Route path="/addon" element={<AddOnCourses/>}/>  
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/admission" element={<AdmissionsPage/>}/>
        <Route path="/academic" element={<AcademicPage/>}/>
        <Route path="/student" element={<StudentCorner/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/r&d" element={<ResearchDevelopment/>}/>


      </Routes>
      <Chat/>
     
     <Footer/>

    </BrowserRouter>
  );
}

export default App;
