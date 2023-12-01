import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Blog from "./components/Blog";
// import Resources from "./components/Resources";
// import OurStrength from "./components/OurStrength";
// import HomePopup from "./components/HomePopup";
// import InstagramData from "./components/InstagramData";
// import Carousel from "./components/Carousel";
import PreLoader from "./components/PreLoader";
import TopButton from "./components/TopButton";
// import Person from "./components/Person";
import {  Outlet } from "react-router-dom";
import Whatsapplication from "./components/Whatsapplication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import HelpUs from "./components/HelpUs";
// import About from "./components/About";
// import Services from "./components/Services";
// import VerifyCertificate from "./components/VerifyCertificate";
// import PersonHero from "./components/personHero";
// import Opportunities from "./components/Opportunities";
// import Projects from "./components/Projects";
// import Events from "./components/Events";
// import OurImpact from "./components/OurImpact";
// import BlogHero from "./components/BlogHero";


function App() {
  return (
    
    <>
      <PreLoader />
      <Navbar />
      <Outlet />
      <Whatsapplication />
      <TopButton />
      <Footer />
      <ToastContainer></ToastContainer>
    </>
      
    // <div>
    //   <PreLoader />
    //   <Navbar />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
      //         <>
      //           <Carousel />
      //           <HomePopup></HomePopup>
      //           {/* <Hero />  */}
    //           {/* Carousel is replacing Hero */}
    //           <About />
    //           <OurStrength />
    //           <InstagramData></InstagramData>
    //           {/* <CommunityCenters></CommunityCenters> */}
    //           <OurImpact></OurImpact>
    //           <HelpUs />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/person"
    //       element={
    //         <>
    //           <PersonHero />
    //           <Person />
    //         </>
    //       }
    //     />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/verify-certificates" element={<VerifyCertificate />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/opportunities" element={<Opportunities />} />
    //     <Route path="/events" element={<Events />} />
    //     <Route path="/blog" element={ <> <BlogHero /> <Blog /></>}  />
    //     <Route path="/resources" element={ <>
    //           <PersonHero /><Resources /> </> } />
    //   </Routes>
    //   <Whatsapplication />
    //   <TopButton />
    //   <Footer />
    // </div>
  );
}

export default App;
