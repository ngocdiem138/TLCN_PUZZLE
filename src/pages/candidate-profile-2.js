import React, { useContext } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import ProfileSidebar from "../components/ProfileSidebar";

import img1 from "../assets/image/l3/png/fimize.png";
import img2 from "../assets/image/svg/icon-shark-2.svg";
import img3 from "../assets/image/svg/icon-thunder.svg";
import img4 from "../assets/image/l3/png/asios.png";
import img5 from "../assets/image/svg/icon-thunder.svg";
import img6 from "../assets/image/l3/png/asios.png";
import { useEffect } from "react";
import { useState } from "react";
import { JobPostServiceIml } from "../actions/user-actions";
import ReactJsAlert from "reactjs-alert";
import { logout } from "../actions/auth-actions";
import GlobalContext from "../context/GlobalContext";
import { CandidateServiceIml } from "../actions/candidate-action";

const CandidateProfile = () => {
  const gContext = useContext(GlobalContext);
  const [jobSaves, setJobSaves] = useState([]);
  const [joApplied, setJobApplied] = useState([]);
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    JobPostServiceIml.getJobPostAppliedByCandidate().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError(true);
      } else {
        setJobApplied(response.data.data)
      }
    });
  }, [])

  useEffect(() => {
    JobPostServiceIml.getJobPostSavedByCandidate().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError(true);
      } else {
        setJobSaves(response.data.data)
      }
    });
  }, [])

  const redirect = () => {
    logout();
  }

  const listSaveJobs = jobSaves.map(job => {
    return <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
      {/* <!-- Single Featured Job --> */}
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
        <div className="media align-items-center">
          <div className="square-52 bg-indigo mr-8 rounded">
            <Link to={"/groups/job-details/" + job.id}>
              <img src={job.company.image ? job.company.image : img1} alt="" />
            </Link>
          </div>
          <div>
            <Link
              to={"/groups/job-details/" + job.id}
              className="font-size-3 text-default-color line-height-2"
            >
              {job.minBudget}-{job.maxBudget} $
            </Link>
            <h3 className="font-size-6 mb-0">
              <Link
                to={"/groups/job-details/" + job.id}
                className="heading-default-color font-weight-semibold"
              >
                {job.title}
              </Link>
            </h3>
          </div>
        </div>
        <div className="d-flex pt-17">
          <ul className="list-unstyled mb-1 d-flex flex-wrap">
            <li>
              <Link
                to={"/groups/job-details/" + job.id}
                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
              >
                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                {job.city}
              </Link>
            </li>
            <li>
              <Link
                to={"/groups/job-details/" + job.id}
                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
              >
                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                {job.employmentType}
              </Link>
            </li>
          </ul>
          <button
            style={{ outline: "none", border: "none", background: "none" }}
            onClick={() => {
              if (typeof window !== "undefined") {
                const confirmBox = window.confirm(
                  "Do you really want to remove it from saved jobs list"
                )
                if (confirmBox === true) {
                  unSave(job.id);
                }
              };
            }}
            className="toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color"> <i class="icon fa fa-window-close"></i>
          </button>
        </div>
      </div>
      {/* <!-- End Single Featured Job --> */}
    </div>
  });

  const listApplyJobs = joApplied.map(job => {
    return <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
      {/* <!-- Single Featured Job --> */}
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
        <div className="media align-items-center">
          <div className="square-52 bg-indigo mr-8 rounded">
            <Link to={"/groups/job-details/" + job.id}>
              <img src={job.company.image ? job.company.image : img1} alt="" />
            </Link>
          </div>
          <div>
            <Link
              to={"/groups/job-details/" + job.id}
              className="font-size-3 text-default-color line-height-2"
            >
              {job.minBudget}-{job.maxBudget} $
            </Link>
            <h3 className="font-size-6 mb-0">
              <Link
                to={"/groups/job-details/" + job.id}
                className="heading-default-color font-weight-semibold"
              >
                {job.title}
              </Link>
            </h3>
          </div>
          <button
            style={{ outline: "none", border: "none", background: "none" }}
            onClick={(e) => {
              e.preventDefault();
              gContext.setToggleJobPostId(job.id)
              gContext.toggleCandidateCoverLetterModal();
            }}
            className="toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color"> <i class="icon fa fa-address-card"></i>
          </button>
        </div>
        <div className="d-flex pt-17">
          <ul className="list-unstyled mb-1 d-flex flex-wrap">
            <li>
              <Link
                to={"/groups/job-details/" + job.id}
                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
              >
                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                {job.city}
              </Link>
            </li>
            <li>
              <Link
                to={"/groups/job-details/" + job.id}
                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
              >
                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                {job.employmentType}
              </Link>
            </li>
          </ul>
          <button
            style={{ outline: "none", border: "none", background: "none" }}
            onClick={() => {
              if (typeof window !== "undefined") {
                const confirmBox = window.confirm(
                  "Do you really want to remove it from apply jobs list"
                )
                if (confirmBox === true) {
                  unApply(job.id);
                }
              };
            }}
            className="toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color"> <i class="icon fa fa-times"></i>
          </button>
        </div>
      </div>
      {/* <!-- End Single Featured Job --> */}
    </div>
  });

  function unApply(number) {
    JobPostServiceIml.cancelAppliedJob(number).then(() => JobPostServiceIml.getJobPostAppliedByCandidate().then((response) => { setJobApplied(response.data.data) }));
  }

  function unSave(number) {
    JobPostServiceIml.cancelSavedJob(number).then(() => JobPostServiceIml.getJobPostSavedByCandidate().then((response) => { setJobSaves(response.data.data) }));
  }
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-19 pt-lg-22 pb-7 pb-lg-23">
          <div className="container">
            <ReactJsAlert
              type="info"   // success, warning, error, info
              title="Session has expired"   // title you want to display
              status={showError}  // true or false
              button="OK"
              color="#1d36ad"
              quotes={true}
              quote="Unfortunately your session has expired and you have been logged out. Please log in again"
              Close={redirect}   // callback method for hide
            />
            {/* <!-- back Button --> */}
            <div className="row">
              <div className="col-12 mt-13 dark-mode-texts">
                <div className="mb-9">
                  <Link to="/dashboard-applicants" className="d-flex align-items-center ml-4">
                    {" "}
                    <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                      Back
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row">
              <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-xs-10 mb-11 mb-lg-0">
                <ProfileSidebar className="mr-0 mr-xl-17" />
              </div>
              <div className="col-12 col-xl-8 col-lg-8">
                {/* <!-- Top Start --> */}
                <div className="mb-5">
                  <h4 className="font-size-7 mb-9">Applied Jobs</h4>
                  <div className="row justify-content-center">
                    {listApplyJobs} {joApplied.length % 2 ? <div className="col-lg-6 col-md-6 col-sm-11 mb-9"></div> : null}
                  </div>
                </div>
                {/* <!-- Top End --> */}
                {/* <!-- Bottom Start --> */}
                <div className="">
                  <h4 className="font-size-7 mb-9">Saved Jobs</h4>
                  <div className="row justify-content-center">
                    {listSaveJobs} {jobSaves.length % 2 ? <div className="col-lg-6 col-md-6 col-sm-11 mb-9"></div> : null}
                  </div>
                </div>
                {/* <!-- Bottom End --> */}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
