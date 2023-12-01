import { useQuery } from "@tanstack/react-query";

const BlogsV2 = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
            return await res.json();
        }
    }
    );

    if (isLoading)
        return <div className="fir-preloader"></div>
    if (error)
        return error.message;

    return (
        <section className="blog-section">
         {data?.length==0?'No blogs found, check back later.':''}
                {data?.map(blog => <div className="blog-container" key={blog?._id}>
                    <div className="">
                        <h3>{blog?.name}</h3>
                        <p style={{textOverflow:"ellipsis"}}>{blog?.description}
                        </p>
                    </div>

                    <img src={`data:image/jpeg;base64,${blog?.img}`} alt="image" className="img-blog" />

                </div>)}

        </section>
    );
};

export default BlogsV2;