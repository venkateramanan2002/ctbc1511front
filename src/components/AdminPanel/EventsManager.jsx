import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";
import AddEvent from "./AddEvent";
import Event from "./Event";


const EventsManager = () => {
    const [showModal, setShowModal] = useState(false);

    const { isLoading, error, data, refetch,isFetching } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('jwtToken'),
                    'Accept': 'application/json',
                },
            });
            return await res.json();
        }
    }
    );

    const events = (Array.isArray(data) && data) || [];

    if (isLoading)
        return 'loading events...'
    if (error)
        return error.message;

    return (
        <div className="mt-100" style={isFetching ? { backgroundColor: "rgba(0, 0, 0, 0.15)" } : {}}>
            <h2>Events</h2>
            <span>{isFetching ? 'Retrieving data please wait' : ''}</span>
            <div className="a-events-container mt-20">
                {events?.map(data => <Event key={data?._id} data={data} refetch={refetch} />)}

                <div className="a-add-event">
                    <button type="button" onClick={() => setShowModal(true)} aria-label="Add new event" title="Add new event">+</button>
                </div>

                <Modal showModal={showModal} setShowModal={setShowModal}><AddEvent setShowModal={setShowModal} refetch={refetch}></AddEvent></Modal>
            </div>


        </div>
    );
};

export default EventsManager;