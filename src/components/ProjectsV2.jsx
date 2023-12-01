import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Title from "./Title";
import ProjectCard from "./ProjectCard"; // Create a ProjectCard component

const ProjectsV2 = () => {
    const [activeTab, setActiveTab] = useState('All');
    const { isLoading, error, data } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
            return await res.json();
        }
    });

    const projects = data?.filter(x => {
        if (activeTab === 'All') {
            return true;
        } else {
            return x.tag === activeTab;
        }
    }) || [];

    if (isLoading) {
        return <div className="fir-preloader-container"></div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <section className="section w-75">
            <Title title={'Featured'} subTitle={'Services'}></Title>

            <div className="projects-tab-container my-32-64">
                <button className={activeTab === 'All' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('All')}>All</button>
                <button className={activeTab === 'Ongoing' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('Ongoing')}>Ongoing</button>
                <button className={activeTab === 'Completed' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('Completed')}>Completed</button>
                <button className={activeTab === 'Impact' ? 'projects-active-tab projects-tab' : 'projects-tab'} onClick={() => setActiveTab('Impact')}>Impact</button>
            </div>

            {projects.length === 0 && <p>No projects of this category found, check back later.</p>}

            <div className="section-center featured-center">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsV2;
