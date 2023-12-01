import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            email:e.target.email.value,
            password:e.target.password.value
        }
        const res = await fetch(`${"https://ctbc-backend-rodj.onrender.com"}/loginA`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            // Ignore SSL certificate errors (for testing only)
          
        });
        

        const result = await res.json();
        if (result.admin === true) {
            localStorage.setItem('jwtToken', result.token);
            navigate('/admin');
        }

    }

    return (
        <section className="a-login-form-container">
            <form className="a-login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"><span style={{ fontWeight: 'bold', color: 'black' }}>Email:</span>
                    <input type="email" className="ml-4 input-regular" id="email" name="email" />
                </label>
                <label htmlFor="password"><span style={{ fontWeight: 'bold', color: 'black' }}>Password:</span>
                    <input type="password" className="ml-4 input-regular mt-20" id="password" name="password" />
                </label>
                <button type="submit" className="btn-default btn-regular btn-send-db mt-20">Login</button>
            </form>
        </section>
    );
};

export default AdminLogin;