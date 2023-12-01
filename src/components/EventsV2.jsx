import { useQuery } from "@tanstack/react-query";
import Title from "./Title";
import Modal from "./Modal";
import { useState } from "react";
import PayRequest from "./PayRequest";

const EventsV2 = () => {
  const [showModal, setShowModal] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/events`);
        if (!res.ok) {
          throw new Error('Failed to fetch events');
        }
        return await res.json();
      } catch (error) {
        throw new Error('An error occurred while fetching events');
      }
    }
  });

  if (isLoading) {
    return (
      <div className="fir-preloader-container">
        Loading events...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error loading events: {error.message}</p>
      </div>
    );
  }

  return (
    <section className="section">
      <Title title={'Events'} subTitle={''}></Title>

      <div className='workshops-container'>
        {data?.map(event => (
          <div key={event?._id} className='insta-card'>
            <img src={`data:image/jpeg;base64,${event?.img}`} alt={`Event photo for ${event?.description}`} className='workshop-photo' />
            <p className='workshop-text'>{event?.description}</p>
            <button className="btn-default btn-regular btn-register-event" onClick={() => setShowModal(true)}>Register</button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
              <PayRequest amount={event?.amount} setShowModal={setShowModal} _id={event?._id}></PayRequest>
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
};

export { EventsV2 };
