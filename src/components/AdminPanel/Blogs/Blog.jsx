import { toast } from "react-toastify";

const Blog = ({ data, refetch }) => {
    const handleDelete = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/delete-blog/${data?._id}`, {
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
            <img src={`data:image/jpeg;base64,${data?.img}`} className="a-event-img" alt="blog image" />
            <p> <span style={{ fontWeight: 'bold', color: 'black' }}>Name:</span> {data?.name}</p>
            <p> <span style={{ fontWeight: 'bold', color: 'black' }}>Description:</span> {data?.description}</p>
            <button className="btn-default btn-regular btn-send-db" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Blog;