import React from "react";
import AllRoutes from "./routes/AllRoutes";
import Header from "./components/shared/Header/Header";
import Home from "./components/features/Home/Home";
import About from "./components/features/About/About";
import FactStart from "./components/shared/FactStart/FactStart";
import FactStartModalVideo from "./components/shared/FactStartModalVideo/FactStartModalVideo";
import Services from './components/shared/Services/Services' 
import Events from "./components/shared/Events/Events";
import BookUs from "./components/shared/BookUs/BookUs";
import Team from "./components/shared/Team/Team";
import Testimonial from "./components/shared/Testimonial/Testimonial";
import Blogs from "./components/shared/Blogs/Blogs";
import Footer from "./components/shared/Footer/Footer";
import Copyright from "./components/shared/Copyright/Copyright";
import BackToTop from "./components/shared/BackToTop/BackToTop";

function App() {
  return (
    <>
    <Header/>
    <AllRoutes/>
    <Home/>
    <About/>
    <FactStart/>
    <FactStartModalVideo/>
    <Services/>
    <Events/>
    <BookUs/>
    <Team/>
    <Testimonial/>
    <Blogs/>
    <Footer/>
    <Copyright/>
    <BackToTop/>      
    </>
  );
}

export default App;
