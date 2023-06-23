import React, { useState, useEffect, useContext } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "gatsby";


import axios from "axios";
import { API_BASE_URL } from "../../utils/constants/url";

import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgF2 from "../../assets/image/l2/png/featured-job-logo-2.png";
import imgF3 from "../../assets/image/l2/png/featured-job-logo-3.png";
import imgF4 from "../../assets/image/l2/png/featured-job-logo-4.png";
import imgF5 from "../../assets/image/l2/png/featured-job-logo-5.png";

import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import iconC from "../../assets/image/svg/icon-clock.svg";
import iconL2 from "../../assets/image/svg/icon-location.svg";
import iconD from "../../assets/image/svg/icon-dolor.svg";
import iconB from "../../assets/image/svg/icon-briefcase.svg";
import { useTranslation } from 'react-i18next';
import GlobalContext from "../../context/GlobalContext";

const SearchTab = (props) => {
  const gContext = useContext(GlobalContext);
  const { t, i18n } = useTranslation()
  console.log(props.listJob);
  let activeIndexDefault = props.listJob[0] ? props.listJob[0].id : 0
  const [indexActive, setIndexActive]=useState(activeIndexDefault);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.listJob.slice(0, indexOfLastPost);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");
  console.log(indexActive);
  const saveForJob = (id) => {
    if (localStorage.getItem("userRole") != "CANDIDATE") {
      setError("You must is a CANDIDATE to save for jobs.")
    } else {
      axios
        .get(
          API_BASE_URL + "/candidate/save-job-post/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            job_id: id,
          }
        )
        .then((response) => {
          if (response.data.status == 200) {
            //show success message
            setSucces("Successfuly saved for job");
            setError("")
          } else if (response.data.errMsg) {
            setError(response.data.errMsg)
            setSucces("")
          } else {
            setSucces("");
            setError("Request Failed")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const applyForJob = (id) => {
    if (localStorage.getItem("userRole") != "CANDIDATE") {
      setError("You must is a CANDIDATE to apply for jobs.")
    } else {
      axios
        .get(
          API_BASE_URL + "/candidate/apply-job-post/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            job_id: id,
          }
        )
        .then((response) => {
          if (response.data.status == 200 && re) {
            setSucces("Successfuly applied for job")
            setError("")
          } else if (response.data.status != 200) {
            console.log(response.data.status)
            switch (response.data.status) {
              case 403:
                setError(response.data.message)
                // window.location.assign(REDIRECT_BASE_URL + "/registerOfUser");
                break;
              default:
                setSucces("");
                setError(response.data.errMsg)
            }
          } else {

            setSucces("Request Failed")
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }
  };
  const listNav = currentPosts.map(job => {
    return <Nav.Link className="mb-8 p-0 w-100" eventKey={job.id} onClick={() => { console.log(indexActive);setError(''); setSucces(''); setIndexActive(job.id) }}>
      {/* <!-- Single Featured Job --> */}
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 hover-border-green">
        {/* <!-- Single Featured Job --> */}
        <div className="row">
          <div className="col-md-6">
            <div className="media align-items-center">
              <div className="square-72 d-block mr-8">
                <img src={job.logo ? job.logo : imgF1} alt="" />
              </div>
              <div>
                <h3 className="mb-0">
                  <Link
                    to={"/groups/job-details/" + job.id}
                    className="font-size-6 heading-default-color"
                  >
                    {job.title}
                  </Link>
                </h3>
                <Link
                  to={"/groups/job-details/" + job.id}
                  className="font-size-3 text-default-color line-height-2"
                >
                  {job.workplaceType}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right pt-7 pt-md-5">
            <div className="media justify-content-md-end">
              <div className="image mr-5 mt-2">
                <img src={imgF} alt="" />
              </div>
              <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                <span className="text-black-2">{job.minBudget} - {job.maxBudget} $</span> USD
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-8">
          <div className="col-md-7">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap">
              {job.skills ? job.skills.split(',').map(skill => {
                return <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                  {skill}
                </li>
              })
                :
                <li>
                  <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">
                    No required
                  </span>
                </li>}
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex" style={{ width: "50%" }}>
                <span
                  className="mr-4"
                  css={`
                  margin-top: -2px;
                `}
                >
                  <img src={iconL} alt="" />
                </span>
                <span className="font-weight-semibold">
                  {job.address}
                </span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span
                  className="mr-4"
                  css={`
                  margin-top: -2px;
                `}
                >
                  <img src={iconS} alt="" />
                </span>
                <span className="font-weight-semibold">
                  {job.employmentType}
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- End Single Featured Job --> */}
      </div>
      {/* <!-- End Single Featured Job --> */}
    </Nav.Link>
  })
  const listContent = currentPosts.map(job => {
    return <Tab.Pane eventKey={job.id} active={indexActive ? indexActive == job.id ? true : false : activeIndexDefault == job.id ? true : false}>
      <div className=" bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 h-1413 overflow-y-scroll mt-9 mt-xl-0">
        {/* <!-- Single Featured Job --> */}
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row">
            {error ? <div className="alert alert-danger col-12" role="alert">{error}</div> : null}
            {success ? <div className="alert alert-success col-12" role="alert">{success}</div> : null}
            <div className="col-md-6">
              {/* <!-- media start --> */}
              <div className="media align-items-center">
                {/* <!-- media logo start --> */}
                <div className="square-72 d-block mr-8">
                  <img src={job.logo ? job.logo : imgF1} alt="" />
                </div>
                {/* <!-- media logo end --> */}
                {/* <!-- media texts start --> */}
                <div>
                  <h3 className="font-size-6 mb-0">
                    <Link
                      to={"/groups/job-details/" + job.id}
                      className="font-size-6 heading-default-color"
                    >
                      {job.title}
                    </Link>
                  </h3>
                </div>
                {/* <!-- media texts end --> */}
              </div>
              {/* <!-- media end --> */}
            </div>
            <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
              {/* <!-- media date start --> */}
              <div className="media justify-content-md-end">
                <p className="font-size-4 text-green mb-0">
                  {job.dueTime}
                </p>
              </div>
              {/* <!-- media date end --> */}
            </div>
          </div>
          <div className="row pt-9">
            <div className="col-12">
              {/* <!-- card-btn-group start --> */}
              <div className="card-btn-group">
                {(
                  <button
                    type="submit"
                    className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5"
                    // onClick={() => applyForJob(job.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleApplyModal();
                    }}
                  >
                    {t('apply.applyThisJob')}
                  </button>
                )}
                {(
                  <button
                    type="submit"
                    className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5"
                    onClick={() => saveForJob(job.id)}
                  >
                    <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                    {t('apply.saveJob')}
                  </button>
                )}
              </div>
              {/* <!-- card-btn-group end --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Single Featured Job --> */}
        <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row mb-7">
            <div className="col-md-4 mb-md-0 mb-6">
              <div className="media justify-content-md-start">
                <div className="image mr-5">
                  <img src={iconD} alt="" />
                </div>
                <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                  {job.minBudget} - {job.maxBudget} $
                </p>
              </div>
            </div>
            <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
              <div className="media justify-content-md-start">
                <div className="image mr-5">
                  <img src={iconB} alt="" />
                </div>
                <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                  {job.employmentType}
                </p>
              </div>
            </div>
            <div className="col-md-4 pl-lg-0">
              <div className="media justify-content-md-start">
                <div className="image mr-5">
                  <img src={iconL} alt="" />
                </div>
                <p className="font-size-5 text-gray mb-0">
                  {job.address},{" "}
                  <br className="d-md-none d-lg-block d-block" />
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-lg-0 mb-10">
              <div className="">
                <span className="font-size-4 d-block mb-4 text-gray">
                  Education Level
                </span>
                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                  {job.educationLevel}
                </h6>
              </div>
              <div className="tags">
                <p className="font-size-4 text-gray mb-0">
                  Soft Skill
                </p>
                <ul className="list-unstyled mr-n3 mb-0">
                  <li className="d-block font-size-4 text-black-2 mt-2">
                    <span className="d-inline-block mr-2">•</span>
                    Slack
                  </li>
                  <li className="d-block font-size-4 text-black-2 mt-2">
                    <span className="d-inline-block mr-2">•</span>
                    Basic English
                  </li>
                  <li className="d-block font-size-4 text-black-2 mt-2">
                    <span className="d-inline-block mr-2">•</span>Well
                    Organized
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
              <div className="">
                <span className="font-size-4 d-block mb-4 text-gray">
                  Quantity
                </span>
                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                  {job.quantity} employees
                </h6>
              </div>
              <div className="tags">
                <p className="font-size-4 text-gray mb-3">
                  Technical Skill
                </p>
                <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                  {job.skills ? job.skills.split(',').map(skill => {
                    return <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                      {skill}
                    </li>
                  })
                    :
                    <li>
                      <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">
                        No required
                      </span>
                    </li>}
                </ul>
              </div>
            </div>
            <div className="col-md-4 pl-lg-0">
              <div className="">
                <span className="font-size-4 d-block mb-4 text-gray">
                  Workplace Type
                </span>
                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">
                  {job.workplaceType ? job.workplaceType : "___"}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts">
          <div className="row">
            <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
              <div className="">
                <p className="mb-4 font-size-4 text-gray">
                  Job Description
                </p>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Pane>
  })
  return (
    <>
      <div className="row justify-content-center position-static" style={{ "min-height": "80vh" }}>
        <Tab.Container defaultActiveKey="first">
          <div className="col-12 col-xxl-8 col-xl-7 col-lg-10">
            {/* <!-- Left Section --> */}
            <div className="Left">
              <Nav
                className="justify-content-center search-nav-tab nav nav-tabs border-bottom-0"
                id="search-nav-tab"
              >
                {listNav}
              </Nav>
              <div className="text-center pt-5 pt-lg-13">
                <button style={{ "margin-left": "auto", "margin-right": "auto", "border": "none", "minHeight": "1vh" }}
                  // to="/#"
                  onClick={() => { setCurrentPage(currentPage + 1) }}
                  className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center"
                >
                  {t('search.loadMore')}{" "}
                  <i className="fas fa-sort-down ml-3 mt-n2 font-size-4"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Right Section --> */}
          <div className="col-12 col-xxl-4 col-xl-5 col-lg-10 position-static">
            <Tab.Content>
              {listContent}
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </>
  );
};
export default SearchTab;
