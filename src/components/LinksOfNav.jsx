import { NavLink } from "react-router-dom";

const LinksOfNav = () => {

  return (
    <span className="link-of-nav">
      <div className="navbar-links">
        <NavLink to="/person" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>People </NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to={{ pathname: "/person" }} state={{ btnValue: "Board" }}>
              Board
            </NavLink>
            <NavLink
              to={{ pathname: "/person" }}
              state={{ btnValue: "Management" }}
            >
              Management
            </NavLink>
            <NavLink
              to={{ pathname: "/person" }}
              state={{ btnValue: "Advisory" }}
            >
              Advisory
            </NavLink>
            <NavLink
              to={{ pathname: "/person" }}
              state={{ btnValue: "HonoraryMembers" }}
            >
              Honorary Members
            </NavLink>
            <NavLink to={{ pathname: "/person" }} state={{ btnValue: "Staff" }}>
              Staff
            </NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Projects/Initiatives</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="#">Ongoing</NavLink>
            <NavLink to="#">Completed</NavLink>
            <div className="nested-content">
              <NavLink to="#">Impact</NavLink>
              <div className="nested-dropdown">
                <i className="fas fa-caret-down nested-icon"></i>
                <span className="nested-dropdown-content">
                  <NavLink to="#">Our work</NavLink>
                  <NavLink to="#">Project Completed</NavLink>
                  <NavLink to="#">People Involved</NavLink>
                  <NavLink to="#">Species Got Attention</NavLink>
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        {" "}
        <NavLink to="/opportunities" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Opportunities</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="#">Job</NavLink>
            <NavLink to="#">Volunteer/Internship</NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Blog/News</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/blog">News</NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/events" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Events</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/services" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Services</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Assessment" }}
            >
              Assessment
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Training" }}
            >
              Training
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Activities" }}
            >
              Activities
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Expertise and Support" }}
            >
              ExpertiseAndSupport
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Technical Support" }}
            >
              TechnicalSupport
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Talk series" }}
            >
              TalkSeries
            </NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/resources" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Resources</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="/resources">Reports</NavLink>
            <NavLink to="/resources">Articles</NavLink>
            <NavLink to="/resources">Publications</NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="#">Login</NavLink>
      </div>
    </span>
  );
};

export default LinksOfNav;
