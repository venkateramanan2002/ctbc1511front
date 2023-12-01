import { toast } from "react-toastify";

const Event = ({data,refetch}) => {
    const handleDelete = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/delete-event/${data?._id}`, {
            method: "DELETE",
            headers: { 'Authorization': localStorage.getItem('jwtToken'), "Content-Type": "application/json" }
        });
        const result = await res.json();
        if (result?.id) {
            refetch();
            toast('Deleted successfully');
        }
    }
    return (
        <div className="a-event" key={data?._id}>
            <img src={`data:image/jpeg;base64,${data?.img}`} className="a-event-img" alt="event image" />
            <p> <span style={{ fontWeight: 'bold', color: 'black' }}>Description:</span> {data?.description}</p>
            <p> <span style={{ fontWeight: 'bold', color: 'black' }}>Amount:</span> {data?.amount}</p>
            <button className="btn-default btn-regular btn-send-db" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Event;