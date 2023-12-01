import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../../Modal";
import Project from "./Project";
import AddProject from "./AddProject";


const ProjectsManager = () => {
    const [showModal, setShowModal] = useState(false);

    const { isLoading, error, data, refetch,isFetching } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('jwtToken'),
                    'Accept': 'application/json',
                }
            });
            return await res.json();
        }
    }
    );

    const projects = (Array.isArray(data) && data) || [];

    if (isLoading)
        return 'loading projects ...'
    if (error)
        return error.message;

    return (
        <div style={isFetching ? { backgroundColor: "rgba(0, 0, 0, 0.15)" } : {}} >
            <h2>Projects</h2>
            <span>{isFetching?'Retrieving data please wait':'' }</span>
            <div className="a-events-container mt-20">
                {projects?.map(data => <Project key={data?._id} data={data} refetch={refetch} />)}

                <div className="a-add-event">
                    <button type="button" onClick={() => setShowModal(true)} aria-label="Add new project" title="Add new project">+</button>
                </div>

                <Modal showModal={showModal} setShowModal={setShowModal}><AddProject setShowModal={setShowModal} refetch={refetch}></AddProject></Modal>
            </div>


        </div>
    );
};

export default ProjectsManager;