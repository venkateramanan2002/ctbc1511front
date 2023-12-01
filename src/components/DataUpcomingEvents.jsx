import UpcomingEvents from "./UpcomingEvents";
import useInstagramPosts from "../custom hooks/useInstagramPosts";


const DataUpcomingEvents = () => {
    const { upcomingData, loading, error } = useInstagramPosts();

    if (loading || error) {
        return <></>;
    }

    return (
        <section className="upcoming-events">
            <h1>Upcoming Events</h1>
            {upcomingData && <UpcomingEvents upcomingData={upcomingData}></UpcomingEvents>}

        </section>
    );
};

export default DataUpcomingEvents;