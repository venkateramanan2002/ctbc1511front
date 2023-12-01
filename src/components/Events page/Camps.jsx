import Title from "../Title";

const Camps = ({ data }) => {

    if (data?.length == 0 || !data) {
        return <></>;
    }

    return (
        <section className="section">

            <Title title={"our"} subTitle={"Camps"} />

            <div className='workshops-container'>
                {data?.map(post => <div key={post?.id} className='insta-card'>

                    <img src={post?.media_url} alt="workshop photo" className='workshop-photo' />

                    <p className='workshop-text'>{post?.caption}</p>

                </div>)}
            </div>
        </section>
    );
};

export default Camps;