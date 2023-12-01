/* eslint-disable react/prop-types */
import { animated, useInView } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ImpactCard = ({ data }) => {

    const [ref, inView] = useInView(()=>({
        from: { val: 0 },
        to: { val: data.amount },
        config: { duration: 1000 },
    }));
    
    return (
        <div className="impact-card" ref={ref}>
            <FontAwesomeIcon className="impact-icon" icon={data.icon} />
            <div>
                <div className="impact-amount">
                    {inView && (
                        <animated.div>
                            {inView.val.to((val) => Math.floor(val))}
                        </animated.div>
                    )}
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <span className="impact-name">{data.impact}</span>
            </div>
        </div>
    );
};

export default ImpactCard;