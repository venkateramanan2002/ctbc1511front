/* eslint-disable react/prop-types */

import Title from "./Title";

const Workshop = ({ workshopData }) => {

    if (workshopData.length === 0) {
        return <></>;
    }

    return (
        <section className="section">
            <Title title={"Our"} subTitle={"Workshop"} />

            <div className='insta-cards-container'>
                {workshopData?.map(post => <div key={post?.id} className='insta-card'>

                    <img src={post?.media_url} alt="instagram photo" className='upcoming-photo' />

                    <p className='insta-card-caption'>{post?.caption.slice(0, 300)}</p>
                </div>)}
            </div>
        </section>
    );
};

export default Workshop;