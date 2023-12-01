import { useState } from "react";
import { toast } from "react-toastify";
import ImageUpload from "../ImageUpload";

const AddProject = ({ refetch, setShowModal }) => {
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = {
            description: form.description.value,
            name:form.name.value,
            tag: form.tag.value,
            img: img
        };

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/add-project`, {
                method: "POST",
                headers: { 'Authorization': localStorage.getItem('jwtToken'), "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const result=await res.json();
            if (result.message.includes('success')) {
                refetch();
                toast('Added project successfully');
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
            <h3>Add New Project</h3>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label style={{display:'block'}} htmlFor="tag">Tag : </label>

                    <input className='ml-4' type="radio" name="tag" value={'Ongoing'} required />
                    <label htmlFor="tag">Ongoing </label>
                    <input className='ml-4' type="radio" name="tag" value={'Completed'} required />
                    <label htmlFor="tag">Completed </label>
                    <input className='ml-4' type="radio" name="tag" value={'Impact'} required />
                    <label htmlFor="tag">Impact </label>
                </div>
                <div className='input-label-container mt-20'>
                    <label htmlFor="description">Name : </label>
                    <input className='input-regular' type="text" name="name" required />
                </div>
                <div className='input-label-container'>
                    <label htmlFor="description"> Discription: </label>
                    <input className='input-regular' type="text" name="description" required />
                </div>
                <ImageUpload property_name={'img-project'} setImg={setImg}></ImageUpload>
                <div style={{display:"flex",gap:"20px", alignItems:"center"}}>
                    <button className="btn-default btn-regular btn-send-db mt-20" type="submit">Add</button>
                    {loading ? <div className="three-quarter-spinner spinner-small"></div> : ''}
                </div>
            </form>
        </div>
    );
};

export default AddProject;