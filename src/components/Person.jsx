import { useEffect, useState } from "react";
import tour1 from "../images/People/HarifBackround.webp";
import tour2 from "../images/People/sandeepBackround.webp";
import tour3 from "../images/People/harisBackround.webp";
import tour4 from "../images/People/meeraBackround.webp";
import tour5 from "../images/People/ShareefBackround.webp";
import tour6 from "../images/People/anasBackround.webp";
import tour7 from "../images/People/sethuBackround.webp";
import tour8 from "../images/People/sarbasisBackround.webp";
import tour9 from "../images/People/densinBackround.webp";
import tour10 from "../images/People/naveenBackround.webp";
import tour11 from "../images/People/unspecifiedpersonBackround.jpg";
import tour12 from "../images/People/vivekBackround.webp";
import tour13 from "../images/People/kpBackround.webp";
import tour14 from "../images/People/arunBackround.webp";
import tour15 from "../images/People/anoopvBackround.webp";
import tour16 from "../images/People/afraBackround.webp";
import tour17 from "../images/People/rifanaBackround.webp";
import tourxx from "../images/People/unspecifiedpersonBackround.jpg";

import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import img1 from "../images/People/Harif.webp"
import img2 from "../images/People/sandeep.webp"
import img3 from "../images/People/haris.webp"
import img4 from "../images/People/meera.webp"
import img5 from "../images/People/sharief.webp"
import img6 from "../images/People/anas.webp"
import img7 from "../images/People/sethu.webp"
import img8 from "../images/People/sarbasis.webp"
import img9 from "../images/People/densin.webp"
import img10 from "../images/People/naveen.webp"
import img11 from "../images/People/unspecifiedperson.png"
import img12 from "../images/People/vivek.webp"
import img13 from "../images/People/kp.webp"
import img14 from "../images/People/arun.webp"
import img15 from "../images/People/anoopv.webp"
import img16 from "../images/People/afra.webp"
import img17 from "../images/People/rifana.webp"
import imgxx from "../images/People/unspecifiedperson.png"


const data = [
  {
    id: 1,
    image: tour1,
    img:img1,
    title: "Board",
    name: "Harif Parengal",
    department: "Department of Conservation Biology",
    pposition: "Exicutive Director",
    expertise: "Environmental modelling, Wildlife techniques, Artificial intelligence",
    backinfo:"Harif Parengal is an ecologist driven by a deep passion for nature. With a strong academic background, he's committed to studying the intricate relationships between animals and their environments. His research spans various disciplines, including conservation biology, climate change, and machine learning, allowing him to address complex ecological challenges. Presently, he's actively involved in multiple projects, particularly focusing on grassland birds, aiming to safeguard vulnerable species facing significant threats.",
    emailinfo:"Consbio@ctbci.org",
  },
  {
    id: 2,
    image: tour2,
    img:img2,
    title: "Board",
    name: "Sandeep Prabhakaran",
    department: "Divisions of Plant Ecology and Conservation",
    pposition: "Director",
    expertise: "Plant ecology, Plant taxonomy, Community conservation",
    backinfo:"Sandeep Prabhakaran, a passionate botanist, possesses extensive research interests in the fields of landscape ecology, plant-animal interactions, angiosperm taxonomy, etc. He specifically focused on spatial studies on floristics, plant invasion ecology, and genetic improvement of trees. Currently, he is involved in a research initiative related to the Community Reserves in Meghalaya, India. His scholarly pursuits are affiliated with the Botanical Survey of India-SRC, Coimbatore, and he also has professional experience at the KFRI, Peechi, and SACON, Coimbatore.",  
    emailinfo:"Plant@ctbci.org",
  },
  {
    id: 3,
    image: tour3,
    img:img3,
    title: "Board",
    name: "Dr. Haris Parengal",
    department: "Department of Biotechnology and Genetics",
    pposition: "Founder and Chairperson",
    expertise: "Plant- microbe interactions,",
    backinfo:"Haris Parengal, an accomplished Indian biotechnologist, is known for diverse research roles at institutions like Kerala Agricultural University and Gandhigram Rural University. His contributions span national and international research organizations, including the United Nations Development Programme and the Central Institute of Fisheries Technology. Haris excels as an author, editor, and reviewer, with a Ph.D. in Microbial Genetics. His dedication to biodiversity conservation is underpinned by sustainable science and policy integration, emphasizing a holistic approach to scientific conservation in international organism depositories.",
    emailinfo:"info@ctbci.org",
  },
  {
    id: 4,
    image: tour4,
    img:img4,
    title: "Board",
    name: "Dr. Mirium M Abraham",
    department: "Divisions of Animal Ecology and Conservation",
    pposition: "Dean and Research Coordinator",
    expertise: " Conservation education and outreach, Habitat restoration, Sustainable forest management",
    backinfo:"Mirium M Abraham, a notable wildlife biologist and conservationist, is celebrated for her extensive research on Western Ghats hornbills in India. With a profound affection for wildlife cultivated from an early age, she has passionately pursued her academic journey. Having obtained a Ph.D. on Western Ghats hornbills, she has contributed significantly to understanding hornbill behaviors and their interaction with plant phenology and habitats in the Western Ghats. Mirium has served as a Conservation Officer at the Bombay Natural History Society, further deepening her expertise in the field of wildlife conservation.",
    emailinfo:"RC@ctbci.org",
  },
  {
    id: 5,
    image: tour5,
    img:img5,
    title: "Board",
    name: "Dr. Abdul Shareef",
    department: "Divisions of Social Science",
    pposition: "Director",
    expertise: "Social Work and Community Development, Tribal Well-being",
    backinfo:"Dr. Abdul Shareef Pattupara, with a Ph.D. from the Gandhigram Rural Institute, holds an M.A. in Sociology and an M.S.W. in Community Development from the University of Calicut, Kerala. He also completed an M.Phil. in Research and Development at GRI. Dr. Pattupara has a substantial background in social work, having coordinated projects for children from slum areas in New Delhi and worked with Kudumbashree in Kerala. His research, presented at numerous national and international events, focuses on tribal elder health and well-being.",    
    emailinfo:"Social@ctbci.org",
  },
  {
    id: 6,
    image: tour6,
    title: "Board",
    img:img6,
    name: "Anas M K",
    department: "Division of Social Ecology",
    pposition: "Director",
    expertise: "Health Social Work practices, Social Science Research, Public Health",
    backinfo:"Anas M K, an Assistant Professor of Social Work at Sree Sankaracharya University of Sanskrit Regional Campus, Tirur, Kerala, excels in health social work. He's a prolific researcher in reproductive health with publications in national and international journals. Engaging beyond academics, he collaborates with healthcare organizations and NGOs to drive community projects. His mentoring cultivates future social work professionals, emphasizing social justice and community welfare. Anas M K's influence extends across academia and the broader public health arena, addressing critical healthcare challenges.",
    emailinfo:"socialecology@ctbci.org",
  },
  {
    id: 7,
    image: tour7,
    img:img7,
    title: "HonoraryMembers",
    name: "Sethu Madhavan",
    department: "Department of Remote Sensing and Geographic Information System",
    pposition: "Deputy Director",
    expertise: "Expertise: Geospatial and Remote sensing, Photogrammetry, resources management",
    backinfo:"Sethu Madhav, a Ph.D. Scholar specializing in Remote Sensing, holds a Master's degree from the Kerala University of Fisheries and Ocean Studies in Remote Sensing & GIS. With over four years of experience, he's well-versed in UAV imaging, high-resolution satellite image analysis, and flood inundation modeling. Sethu has worked on diverse projects across India in various government agencies, including the North Eastern-Space Applications Centre (NE-SAC). His expertise extends to Remote Sensing applications in Marine, Hydro-Geology, and Wildlife.", 
    emailinfo:"GIS@ctbci.org",
  },
  {
    id: 8,
    image: tour8,
    img:img8,
    title: "Management",
    name: "Sarbasis Dutta",
    department: "Department of Outreach and Extension",
    pposition: "Deputy Director",
    expertise: "Ornithology, Urban Ecology, Human- nature interaction",
    backinfo:"Sarbasis Dutta, a dedicated zoology researcher, previously worked on a human-animal conflict project at the Wildlife Institute of India under the National Mission on Himalayan Studies. As a research biologist at the Salim Ali Centre for Ornithology & Natural History, he focused on endangered birds in Northeastern India. Now a Research Fellow at the Bombay Natural History Society, his research spans urban biodiversity, planning, ecosystems, and human health. He is currently involved in citizen science, nature education, outreach programs, and conservation initiatives, advocating for biodiverse urban green infrastructures.",    
    emailinfo:"outreach@ctbci.org",
  },
  {
    id: 9,
    image: tour9,
    img:img9,
    title: "Staff",
    name: "Dencin Rons Thampy",
    department: "Department of Freshwater Science",
    pposition: "Deputy Director",
    expertise: "Landscape and freshwater ecology, Taxonomy and evolution, Biogeography",
    backinfo:"Dencin Rons Thampy is a passionate Kerala-based wildlife biologist specializing in freshwater ecology, landscape ecology, land-water interfaces, fish biology, and taxonomy. With seven years of experience, he excels in site surveys, data collection, policy development, scientific reporting, and risk assessment. Dencin's expertise extends to molecular taxonomy, statistical tools, and the ecology and evolution of freshwater fishes in the Western Ghats. His background includes research contributions at renowned institutions including Mahseer Trust, United Kingdom and a focus on Peninsular India's river systems and topography evolution.",    
    emailinfo:"freshwater@ctbci.org",
  },
  {
    id: 10,
    image: tour10,
    img:img10,
    title: "Advisory",
    name: "Naveen V",
    department: "Department of Conservation Biology",
    pposition: "Deputy Director",
    expertise: "Behavioral ecology, Cognition, Human wildlife interactions",
    backinfo:"Naveen V is captivated by primates, especially their resemblance to humans and their complex social learning and play behaviors. His academic journey in primatology and evolutionary anthropology has developed his strong interests in Behavioral Ecology, Cognitive Psychology, Conservation Biology, and Human-animal Interactions. He's a motivated researcher, dedicated to advancing behavioral studies with innovative concepts.",
    emailinfo:"ethology@ctbci.org",
  },
  {
    id: 11,
    image: tourxx,
    img:imgxx,
    title: "Advisory",
    name: "Dr.Baiju PT",
    department: "Department of Marine Science",
    pposition: "Deputy Director",
    expertise: "Aquatic ecology, Marine taxonomy, Reef ecology",
    backinfo:"this is back side you can chnage in data",    
    emailinfo:"mvrhsr@gmail.com",
  },
  {
    id: 12,
    image: tour12,
    img:img12,
    title: "Advisory",
    name: "Dr.Vivek Philip Cyriac",
    department: "Department of Evolutionary Ecology",
    pposition: "Deputy Director",
    expertise: "Herpetology, Molecular phylogenetics, Macroevolution",
    backinfo:"Dr. Vivek Philip Cyriac is an evolutionary ecologist and herpetologist specializing in biodiversity mechanisms across ecological and evolutionary time scales. He investigates the impact of environmental factors and biotic interactions on speciation, extinction, and biogeographic patterns. His work delves into species' adaptation to changing environments, emphasizing behavioral and cognitive flexibility. An accomplished herpetologist, he's identified new frog, lizard, and snake species. As the lead coordinator for the Shieldtail Mapping Project, he's advancing our understanding of fossorial shieldtail snakes through citizen science",    
    emailinfo:"evolution@ctbci.org",
  },
  {
    id: 13,
    image: tour13,
    img:img13,
    title: "Advisory",
    name: "Krishnapriya J",
    department: "Department of Ecosystem Restoration",
    pposition: "Deputy Director",
    expertise: "Invasion biology, water management,Landscape ecology",
    backinfo:"Krishnapriya is an enthusiastic ecologist with a profound focus on invasion ecology in shola grasslands. Her research interests span grassland ecosystems and the impact of invasions on both the flora and fauna in these unique environments. Currently pursuing her Ph.D. at IFGTB, Coimbatore, Krishnapriya has gained valuable work experience at KFRI Peechi, further enriching her understanding of the field. Her dedication to preserving and understanding these ecosystems is truly commendable.",    
    emailinfo:"restoration@ctbci.org",
  },
  {
    id: 14,
    image: tour14,
    img:img14,
    title: "Advisory",
    name: "Arun C S",
    department: "",
    pposition: "Deputy Director",
    expertise: "Food safety, mycotoxicology, Probiotics",
    backinfo:"Arun CS, a dedicated research scholar, specializes in microbial food quality and the management of microbial toxins. He has actively contributed to multiple governmental projects within the realm of biological research. With a strong background in food quality analysis and control, he excels in biochemical instrumentation, molecular analysis, and micropropagation techniques for plants. His expertise lies in ensuring the safety and quality of our food supply.",    
    emailinfo:"mvrhsr@gmail.com",
  },
  {
    id: 15,
    image: tour15,
    img:img15,
    title: "Advisory",
    name: "Dr.Anoop V",
    department: "Department of Environmental Impact Assessment",
    pposition: "Deputy Director",
    expertise: "Environmental Impact Assessment, ",
    backinfo:"",
    emailinfo:"EIA@ctbci.org",
  },
  {
    id: 16,
    image: tour16,
    img:img16,
    title: "Staff",
    name: "Afra T T",
    department: "Department of Plant Science",
    pposition: "Herbarium curator",
    expertise: "",
    backinfo:"Afra TT, the first Curator of the Centre for Tropical Biodiversity Conservation in Kerala, holds a Master of Science in Botany from KAHM Unity Women's College and a B.Ed in Natural Science from the University of Calicut. Her research, carried out in collaboration with Gandhigram Rural University, focuses on the conservation and phylogenetic relationships of Vanda orchids in the Southern Western Ghats. She's also an Aspire Fellow awarded by the Higher Education Department, Government of Kerala, and a member of the Society of Herbarium Curators in South Dakota, USA.",    
    emailinfo:"EIA@ctbci.org",
  },
  {
    id: 17,
    image: tour17,
    img:img17,
    title: "Staff",
    name: "Jamal Rifana D",
    department: "Department of Outreach and Extension",
    pposition: "Extension officer",
    expertise: "",
    backinfo:"Jamal Rifana has excelled in her academic journey, earning a master's in physics. Her passion for education led her to pursue a Bachelor of Education degree, and she's currently working towards a Master of Education. Committed to providing high-quality education, Jamal actively volunteers to teach underprivileged students. Her dedication to enhancing the education of underserved communities is truly commendable.",    
    emailinfo:"EIA@ctbci.org",
  },

];


const Person = () => {
  const location = useLocation();
  
  const btnValue = location?.state?.btnValue || "All";
  const [members, setMembers] = useState(btnValue);
  const [tours, setTours] = useState(data);
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

  const handleTours = (title) => {
    if (title !== "All") {
      const newTours = data.filter((tour) => {
        return tour.title === title;
      });
      setTours(newTours);
      setMembers(title);
      return;
    }
    setTours(data);
    setMembers(title);
  };

  useEffect(() => {
    handleTours(btnValue);
  }, [btnValue]);

  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>People</span>
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
              onClick={() => handleTours("Board")}
              style={members === "Board" ? btnStyle : defaultStyle}
            >
              {" "}
              board{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Management")}
              style={members === "Management" ? btnStyle : defaultStyle}
            >
              {" "}
              management{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Advisory")}
              style={members === "Advisory" ? btnStyle : defaultStyle}
            >
              {" "}
              advisory{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("HonoraryMembers")}
              style={members === "HonoraryMembers" ? btnStyle : defaultStyle}
            >
              {" "}
              honoraryMembers
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Staff")}
              style={members === "Staff" ? btnStyle : defaultStyle}
            >
              {" "}
              staff
            </button>
          </li>
        </ul>
      </div>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, title, backinfo, img, emailinfo, name, department, pposition, expertise } = tour;
          return (
            <article
              className="tour-card"
              key={id}
              style={{ position: "relative" }}
            >

              <div className="tour-card-side tour-card-front">
                <img
                  src={img}
                  alt="people-img"
                  style={{
                    position: "absolute",
                    borderRadius: "80%",
                    top: '45%',
                    left: '50%',
                    transform: "translate(-50%,-50%)",
                    width: "130px",
                    height: "130px",
                    zIndex: '2'
                  }}
                />
                <div className="tour-card-front">
                  <div className="tour-img-container">
                    <img src={image} className="people-card-img" alt={title} />
                  </div>
                  <div className="tour-info">
                    <div className="people-card-title">
                      <h4>{members !== title ? title : members}</h4>
                    </div>
                    <h5 className="personName">{name}</h5>
                    <div className="person-front-desc">
                      <p className="pposition">{pposition}</p>
                      <p>{department}</p>
                      <p>
                      <h8 className="expertise-heading">EXPERTISE:</h8>{expertise}
</p>

                    </div>
                    <button className="email-icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: '1.5rem', color: 'hsl(184, 91%, 17%)', cursor: 'pointer' }}
                      />
                    </button>
                  </div>
                </div>
                <div className="tour-card-back">
                  {/* Content for the back of the card */}
                </div>
              </div>

              <div className="tour-card-side tour-card-back">
  <div className="back-description">
    {/* Add your description content here */}
    <p>{backinfo}</p>
  </div>
  <p className="email-info">
    <a href={`mailto:${emailinfo}`}>{emailinfo}</a>
  </p>
</div>



            </article>
          );
        })}

      </div>
    </section>
  );
};

export default Person;
