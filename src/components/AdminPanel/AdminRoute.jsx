import { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";
import { Navigate, useNavigate } from "react-router-dom";

const AdminRoute = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('jwtToken');

            if (!token) {
                navigate('/loginA');
            } else {
                try {
                    const response = await fetch(`${"https://ctbc-backend-rodj.onrender.com"}/validateToken`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json',"Authorization":token },
                        body: JSON.stringify({ token }),
                    });

                    const data = await response.json();

                    if (data.valid !== true) {
                        navigate('/loginA');
                    }
                    else setIsAdmin(true);
                } catch (error) {
                    console.error('Error validating token:', error);
                    navigate('/loginA');
                }
                finally {
                    setLoading(false)
                }
            }
        };

        checkToken();
    }, [navigate]);

    if (loading) {
        return 'loading....';
    }

    if (isAdmin) {
        return <AdminPanel />
    }
    else return <Navigate to='/login' />
};

export default AdminRoute;