import React, { useContext } from "react";
import { Link } from "gatsby";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgL from "../../assets/image/logo-main.png";

const Sidebar = () => {
  const gContext = useContext(GlobalContext);

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
            <Link
              to="/dashboard-jobPost?id=new"
              className="btn btn-primary btn-xl w-100 text-uppercase"
            >
              <span className="mr-5 d-inline-block">+</span>Post a new job
            </Link>
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link
                to="/dashboard-settings"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-cog mr-7"></i>Settings
              </Link>
            </li>
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
