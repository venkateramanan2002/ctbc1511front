/* eslint-disable react/prop-types */
import Title from './Title';

const InstaGallery = ({ galleryData }) => {

    if (galleryData.length == 0) {
        return <></>;
    }

    return (
        <section className="section">

            <Title title={"our"} subTitle={"Gallery"} />

            <div className='insta-cards-container'>
                {galleryData?.map(post => <div key={post?.id} className='insta-card'>

                    <img src={post?.media_url} alt="instagram photo" className='insta-photo' />

                    <p className='insta-card-caption'>{post?.caption.slice(0, 200)}</p>
                </div>)}
            </div>
        </section>
    );
};

export default InstaGallery;