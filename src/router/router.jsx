import { createBrowserRouter } from "react-router-dom";
import Person from "../components/Person";
import Services from "../components/Services";
import VerifyCertificate from "../components/VerifyCertificate";
import PersonHero from "../components/personHero";
import Opportunities from "../components/Opportunities";
import BlogHero from "../components/BlogHero";
import App from "../App";
import Carousel from "../components/Carousel";
import HomePopup from "../components/HomePopup";
import About from "../components/About";
import OurStrength from "../components/OurStrength";
import InstagramData from "../components/InstagramData";
import OurImpact from "../components/OurImpact";
import HelpUs from "../components/HelpUs";
import AdminLogin from "../components/AdminPanel/AdminLogin";
import AdminRoute from "../components/AdminPanel/AdminRoute";
import ProjectsV2 from "../components/ProjectsV2";
import { EventsV2 } from "../components/EventsV2";
import BlogsV2 from "../components/BlogsV2";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Carousel />
                        <HomePopup></HomePopup>
                        {/* <Hero />  */}
                        {/* Carousel is replacing Hero */}
                        <About />
                        <OurStrength />
                        <InstagramData></InstagramData>
                        {/* <CommunityCenters></CommunityCenters> */}
                        <OurImpact></OurImpact>
                        <HelpUs />
                    </>
                ),
            },
            {
                path: "/person",
                element: (
                    <>
                        <PersonHero />
                        <Person />
                    </>
                ),
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/verify-certificate',
                element: <VerifyCertificate />
            },
            {
                path: '/projects',
                element: <>
                    <ProjectsV2 />
                </>
            },
            {
                path: '/opportunities',
                element: <Opportunities />
            },
            {
                path: '/events',
                element: <>
                    <EventsV2 />
                </>
            },
            {
                path: '/blog',
                element: <><BlogHero /><BlogsV2/></>
            },
            {
                path: '/resources',
                element: <PersonHero />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoute />
    },
    {
        path: '/loginA',
        element: <AdminLogin />
    },
]);

export default router;