import { NavLink } from "react-router-dom";
import TitleLogo from "../images/TitleLogo.png";
import { useState } from "react";
import LinksOfNav from "./LinksOfNav";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-content">
          <NavLink className="image" to="/">
            <img src={TitleLogo} alt="ctbc logo" />
          </NavLink>
          <NavLink className="img-content" to="/">
            <p>Center For Tropical <br /> Biodiversity Conversation </p>
          </NavLink>
        </div>

        <div className={`links-container-small-screen ${toggle ? 'show' : ''}`}>
          <LinksOfNav />
        </div>
      </div>

      <div className='div-of-nav-links'>
        <div className="links-container-big-screen">
          <LinksOfNav />
        </div>
        <div>
          <button type="button" className="nav-toggle" id="nav-toggle" aria-label="small screen navbar toggler" onClick={() => setToggle(!toggle)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}


// import React from 'react';

// function Navbar() {
//   return (
//     <div className="App">
//       <header>
//         <div className="container">
//           <nav>
//             <div className="menu-icons">
//               <i className="fas fa-bars"></i>
//               <i className="fas fa-times"></i>
//             </div>
//             <a href="index.html" className="logo">CTBC</a>
//             <ul className="nav-list">

//               <li>
//                 <a href="/People">People <i className="fas fa-caret-down"></i></a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#">Board</a>
//                   </li>
//                   <li>
//                     <a href="#">Management</a>
//                   </li>
//                   <li>
//                     <a href="#">Advisory</a>
//                   </li>
//                   <li>
//                     <a href="#">Honorary Members</a>
//                   </li>
//                   <li>
//                     <a href="#">Staff</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">Projects/Initiatives <i className="fas fa-caret-down"></i></a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#">Ongoing</a>
//                   </li>
//                   <li>
//                     <a href="#">Completed</a>
//                   </li>
//                   <li>
//                     <a href="#">Impact </a>
//                     <ul className="sub-menu">
//                       <li>
//                       <a href="#">Our work</a>
//                     <a href="#">Projects Completed</a>
//                     <a href="#">People Involvement</a>
//                     <a href="#">Species got attention</a>
//                </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">Opportunities <i className="fas fa-caret-down"></i></a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#">Job</a>
//                   </li>
//                   <li>
//                     <a href="#">Volunteer/Internship</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">Blog/News <i className="fas fa-caret-down"></i></a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#">Blog</a>
//                   </li>
//                   <li>
//                     <a href="#">News</a>
//                   </li>
//                 </ul>
//               </li>
//                 <a href="#">Events</a>
//               <li>
//               </li>
//               <li>
//                 <a href="#">Services <i className="fas fa-caret-down"></i></a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#">Assessment</a>
//                   </li>
//                   <li>
//                     <a href="#">Training</a>
//                   </li>
//                   <li>
//                     <a href="#">Activities</a>
//                   </li>
//                   <li>
//                     <a href="#">Expertise and Technical support</a>
//                   </li>
//                   <li>
//                     <a href="#">Talk series</a>
//                   </li>
//                 </ul>
//               </li>

//               <li>
//                 <a href="#">Resources <i className="fas fa-caret-down"></i></a>
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#">Reports</a>
//                   </li>
//                   <li>
//                     <a href="#">Articles</a>
//                   </li>
//                   <li>
//                     <a href="#">Publications</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">Login</a>
//               </li>
//             </ul>

//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Navbar;
