import tour1 from "./images/Mission.webp";
import tour2 from "./images/Work.webp";
import tour3 from "./images/history.webp";
import tour4 from "./images/tour-4.jpeg";
import Person from "./components/Person";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "research" },
  { id: 5, href: "#tours", text: "News&Events" },
  { id: 6, href: "#tours", text: "resources" },
  { id: 7, href: "#", text: "peoples" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/CTBCindia", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com/CTBC_India", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.linkedin.com/company/centre-for-tropical-biodiversity-conservation-ctbc/", icon: "fab fa-linkedin" },
  { id: 4, href: "https://www.instagram.com/ctbcindia/", icon: "fab fa-instagram" },
  
  
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Diverse Expertise",
    text: `Our team's diversity is our strength. Bringing together experts from various fields, we create a rich tapestry of skills and perspectives. 
    This multidisciplinary approach enables us to develop innovative, well-rounded solutions that tackle complex conservation challenges effectively and comprehensively.`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Education and Awareness",
    text: `We prioritize education and awareness as powerful tools for positive change. 
    Through dynamic programs, we empower communities with knowledge, fostering a deeper understanding of conservation's importance. 
    Our aim is to ignite a passion for environmental stewardship that resonates far beyond our initiatives.`,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Transparency and Accountability",
    text: `Transparency is the cornerstone of our operations. We remain accountable for our actions and outcomes, holding ourselves to the highest ethical standards.`,
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    title: "Our Mission",
    // date: "March 07, 2017",
    info: "To promote the preservation and sustainable management of tropical biodiversity through research, conservation initiatives, and community engagement, ensuring the long-term health and vitality of ecosystems and the well-being of present and future generations.",
    // location: "India",
    duration: 6
  },
  {
    id: 2,
    image: tour2,
    title: "How We Work",
    // date: "March 07, 2017",
    info: " We work through research, conservation actions, and community engagement to preserve tropical biodiversity sustainably. Our focus is on nurturing ecosystems for current and future generation's well-being.",
    // location: "Coimbatore",
    duration: 11
  },
  {
    id: 3,
    image: tour3,
    title: "Our History",
    date: "March 07, 2017",
    info: "Established in 2017, we're a dynamic, multidisciplinary team with diverse expertise. Spanning various areas and states, our journey aims to safeguard biodiversity through holistic approaches and collaborative efforts.",
    // location: "Kochi kerala",
    duration: 8
  },
  
];
