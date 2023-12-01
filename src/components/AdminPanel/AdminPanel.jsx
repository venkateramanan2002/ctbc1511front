import EventsManager from "./EventsManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectsManager from "./Projects/ProjectsManager";
import BlogsManager from "./Blogs/BlogsManager";

const AdminPanel = () => {
    return (
        <section className="a-panel-container">
            <ProjectsManager></ProjectsManager>
            <EventsManager></EventsManager>
            <BlogsManager></BlogsManager>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default AdminPanel;