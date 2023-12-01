import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { toast } from "react-toastify";

const AddEvent = ({refetch,setShowModal}) => {
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = {
            description: form.description.value,
            amount: form.amount.value,
            img:img
        };
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/add-event`, {
                method: "POST",
                headers: { 'Authorization': localStorage.getItem('jwtToken'), "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            if (result.message.includes('success')) {
                refetch();
                toast('Added event successfully');
                setShowModal(false);
            }
            else {
                toast(result.message);
            }


        }
        catch (error) {
            console.log(error.message);
            toast(error.message)
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <div className="a-add-event-container">
            <h3>Add New Event</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-label-container'>
                    <label htmlFor="description">Description : </label>
                    <input className='input-regular' type="text" name="description" required />
                </div>
                <div className='input-label-container'>
                    <label htmlFor="amount">Amount : </label>
                    <input className='input-regular' type="number" name="amount" min={1} required />
                </div>
                <ImageUpload property_name={'img-event'} setImg={setImg}></ImageUpload>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <button className="btn-default btn-regular btn-send-db mt-20" type="submit">Add</button>
                    {loading ? <div className="three-quarter-spinner spinner-small"></div> : ''}
                </div>
            </form>
        </div>
    );
};

export default AddEvent;