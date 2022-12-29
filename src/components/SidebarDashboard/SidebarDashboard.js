import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgL from "../../assets/image/logo-main-black.png";
import { useEffect } from "react";

const Sidebar = () => {
  const gContext = useContext(GlobalContext);
  const [isEmployer, setIsEmployer] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("userRole") == "EMPLOYER") {
      setIsEmployer(true);
    }
    if (localStorage.getItem("userRole") == "CANDIDATE") {
      setIsCandidate(true);
    }
  })

  return (
    <>
      <Collapse in={gContext.showSidebarDashboard}>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
          <div className="brand-logo px-11">
            <Link to="/">
              <img src={imgL} alt="" />
            </Link>
          </div>
          <div className="my-15 px-11">
            {isEmployer ?
              <Link
                to="/dashboard-jobPost?id=new"
                className="btn btn-primary btn-xl w-100 text-uppercase"
              >
                <span className="mr-5 d-inline-block">+</span>Post a new job
              </Link>
              : null}
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">

            {isEmployer ? <>
              <li className="">
                <Link
                  activeClassName="active"
                  to="/dashboard-main"
                  className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
                >
                  <i className="icon icon-layout-11 mr-7"></i>Dashboard
                </Link>
              </li>

              <li className="">
                <Link
                  to="/dashboard-jobs"
                  activeClassName="active"
                  className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
                >
                  <i className="fas fa-briefcase mr-7"></i>Posted Jobs
                </Link>
              </li>
              <li className="">
                <Link
                  to="/dashboard-applicants"
                  activeClassName="active"
                  className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
                >
                  <i className="fas fa-user mr-7"></i>Applicants{" "}

                </Link>
              </li></>
              : null}

            <li className="">
              <Link
                to="/dashboard-settings"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-cog mr-7"></i>Settings
              </Link>
            </li>
            <li className="">
              <Link
                to="/dashboard-invoice"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-money-bill mr-7"></i>Invoices
              </Link>
            </li>
            {isCandidate ? <li className="">
              <Link
                activeClassName="active"
                to="/dashboard-experience"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="icon icon-layout-11 mr-7"></i>Experience
              </Link>
            </li> : null}
          </ul>
        </div>
      </Collapse>
      <a
        href="/#"
        className="sidebar-mobile-button"
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSidebarDashboard();
        }}
      >
        <i className="icon icon-sidebar-2"></i>
      </a>
    </>
  );
};

export default Sidebar;
