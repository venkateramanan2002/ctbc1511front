import { useState } from "react";
import { toast } from "react-toastify";

const PayRequest = ({ amount, setShowModal,_id }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = {
            "name": form.name.value,
            "amount": amount,
            "date": Date.now(),
            "phone": form.phone.value,
            "_id":_id
        };
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/pay`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            // location.href = result?.data?.instrumentResponse?.redirectInfo?.url;
            if (result.success == true) {
                window.open(result?.data?.instrumentResponse?.redirectInfo?.url, '_blank');
                setShowModal(false);
            }
            else toast(result.message);
        }
        catch (error) {
            toast(error.message);
        }
        finally {
            setLoading(false);
        }

    }

    return (
        <div className="a-add-event-container">
            <h3>Enter the details</h3>
            <form onSubmit={handleSubmit}>

                <div className='input-label-container'>
                    <label htmlFor="name">Name : </label>
                    <input className='input-regular' type="text" name="name" required />
                </div>

                <div className='input-label-container'>
                    <label htmlFor="amount">Amount : (in ruppees)</label>
                    <input className='input-regular' type="number" name="amount" required defaultValue={amount} disabled />
                </div>

                <div className='input-label-container'>
                    <label htmlFor="phone">Phone : </label>
                    <input className='input-regular' type="text" name="phone" required />
                </div>

                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <button className="btn-default btn-regular btn-register-event mt-20" type="submit">Register</button>
                    {loading ? <div className="three-quarter-spinner spinner-small"></div> : ''}
                </div>
            </form>

        </div>
    );
};

export default PayRequest;