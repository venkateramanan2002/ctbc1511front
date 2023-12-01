import { useEffect, useState } from "react";

const useInstagramPosts = () => {
    const [instaData, setInstaData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadInstaPosts = async () => {
            try {
                const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&limit=30&access_token=${import.meta.env.VITE_Insta_User_Token}`);
                const result = await res.json();
                setInstaData(result.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadInstaPosts();
    }, []);

    return {
        instaData,
        loading,
        error,
    };
};

export default useInstagramPosts;