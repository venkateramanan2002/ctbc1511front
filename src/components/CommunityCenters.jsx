import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import Title from './Title'

const images = [{ imgSrc: img1, location: 'Agasthyamalai', info: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' },
{ imgSrc: img2, location: 'Biligiri Rangaswamy Temple Tiger Reserve', info: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' },
{ imgSrc: img3, location: 'Darjeeling', info: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' },
{ imgSrc: img4, location: 'Vembanad', info: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' }
];

const CommunityCenters = () => {
    return (
        <section className="section">
            <Title title={'Our Community'} subTitle={'Conservation Centres'} ></Title>

            <div className="community-centre-card-container">
                {images.map((data, i) => <div className="community-centre-card" key={i}>

                    <img src={data.imgSrc} alt="community centre location photo" />
                    <span>{data.location} <div></div></span>
                    <div className="centre-info">
                        <h5>{ data.location}</h5>
                        <p>{data.info}</p>
                    </div>
                </div>)}
            </div>

        </section>
    );
};

export default CommunityCenters;