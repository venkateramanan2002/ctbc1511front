import { faHouseChimneyWindow, faTree, faMagnifyingGlass, faScroll } from "@fortawesome/free-solid-svg-icons";
import ImpactCard from "./ImpactCard";



const datas = [
    { icon: faHouseChimneyWindow, impact: 'Awarness impacted', amount: 55000 },
    { icon: faMagnifyingGlass, impact: 'Number of towns we work', amount: 32 },
    { icon: faTree, impact: 'No of people work with us', amount: 200 },
    { icon: faScroll, impact: 'Species got attention', amount: 12 }
]

const OurImpact = () => {

    return (
        <section className="section our-impact-container">
            <div className="impact-title"><h5>Our <span className="title-green">Impact</span></h5></div>


            <div className='impacts-container'>
                {datas.map((data, i) => <ImpactCard key={i} data={ data} />)}

            </div>
        </section>
    );
};

export default OurImpact;