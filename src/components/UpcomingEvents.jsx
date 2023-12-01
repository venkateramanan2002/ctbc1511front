import getStringFromCaption from "../custom hooks/getStringFromCaption";

const UpcomingEvents = ({ upcomingData }) => {

    return (
        <div className="upcoming-cards-container">
            {upcomingData.map(post => <div key={post?.id} className='upcoming-card'>

                <h2> {getStringFromCaption(post?.caption, 'title')}</h2>
                <div>
                    <p>Speaker: {getStringFromCaption(post?.caption, 'speaker')} </p>
                    <p>Date: {getStringFromCaption(post?.caption, 'date')} </p>
                    <p>Time: {getStringFromCaption(post?.caption, 'time')} </p>

                    <img src={post?.media_url} alt="instagram photo" />
                </div>

            </div>)}
        </div>
    );
};

export default UpcomingEvents;