import { useState, useEffect } from "react";
import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";
import DataUpcomingEvents from "./DataUpcomingEvents";
import { useLocation } from "react-router-dom";

const data = [
  {
    id: 1,
    image: tour1,
    title: "Ongoing",
    isPaid: false,

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 9,
    image: tour5,
    title: "Ongoing",
    isPaid: true,

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 7,
    image: tour3,
    title: "Ongoing",
    isPaid: true,
    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 2,
    image: tour2,
    title: "Completed",
    isPaid: false,
    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 12,
    image: tour4,
    title: "Completed",
    isPaid: true,
    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 3,
    image: tour6,
    title: "Impact",
    isPaid: true,
    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  }
];

const Projects = () => {
  const location = useLocation();
  const btnValue = location?.state?.btnValue || "All";
  const [members, setMembers] = useState(btnValue);
  const [course, setCourse] = useState("");
  const [tours, setTours] = useState(data);
  const [subject, setSubject] = useState(tours);
  console.log(btnValue);

  const btnStyle = {
    background: "transparent",
    border: "solid 2px gray",
    padding: "0.5rem",
    borderRadius: "15%",
  };
  const defaultStyle = {
    padding: "0.5rem",
    background: "transparent",
    borderRadius: "15%",
    border: "none",
  };
  //  useEffect(()=>{
  //   async fetchData(url){

  //     const newPeople =  await axios.get(url);
  //     setPeople(newPeople);
  //   }
  //   fetchData(url);
  //  },[])
  const handleTours = (title) => {
    if (title !== "All") {
      const newTours = data.filter((tour) => {
        return tour.title === title;
      });
      setTours(newTours);
      setCourse("");
      setSubject(newTours);
      setMembers(title);
      return;
    }
    setCourse("");
    setTours(data);
    setSubject(data);
    setMembers(title);
  };

  const handleAmount = (title) => {
    let newSubject;
    if (title === "paid") {
      newSubject = tours.filter((tour) => tour.isPaid === true);
      setCourse("paid");
    } else {
      newSubject = tours.filter((tour) => tour.isPaid === false);
      setCourse("free");
    }
    setSubject(newSubject);
  };

  useEffect(() => {
    handleTours(btnValue);
  }, [btnValue]);

  return (
    <section className="section" id="tours">
      <div className="section-title featured-services">
        <h2>
          featured <span>Services</span>
        </h2>
      </div>

      <div className="nav-center">
        <ul
          id="nav-links"
          style={{
            margin: "2rem auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("All")}
              style={members === "All" ? btnStyle : defaultStyle}
            >
              {" "}
              All{" "}
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Ongoing")}
              style={members === "Ongoing" ? btnStyle : defaultStyle}
            >
              {" "}
              Ongoing{" "}
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Completed")}
              style={members === "Completed" ? btnStyle : defaultStyle}
            >
              {" "}
              Completed{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Impact")}
              style={members === "Impact" ? btnStyle : defaultStyle}
            >
              {" "}
              Impact{" "}
            </button>
          </li>

       
         
        </ul>
      </div>

      <div className="nav-center">
        <ul
          id="nav-links"
          style={{
            margin: "2rem auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        
        </ul>
      </div>

      <div className="section-center featured-center">
        {subject.map((tour) => {
          const { id, image, title, info } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  {members !== title && <h4> {title} </h4>}
                </div>
                <p>{info}</p>
              </div>
            </article>
          );
        })}

        {/* <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-2.jpeg" className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-3.jpeg" className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-4.jpeg" className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2019</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article> */}
      </div>
      
    </section>
  );
};
export default Projects;