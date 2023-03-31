import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { JobPostServiceIml } from "../actions/user-actions";
import { useState } from "react";
import { useEffect } from "react";
import ReactJsAlert from "reactjs-alert";
import { logout } from "../actions/auth-actions";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";
const defaultJobs = [
  { value: "pd", label: "Product Designer" },
  { value: "gd", label: "Graphics Designer" },
  { value: "fd", label: "Frontend Developer" },
  { value: "bd", label: "Backend Developer" },
  { value: "cw", label: "Content Writer" },
];

const DashboardJobAlerts = () => {
  const gContext = useContext(GlobalContext);
  const [jobs, setJobs] = useState([]);
  const [showError, setShowError] = useState(false);
  const [limitJob, setLimitJob] = useState(0);
  // const [applicationAmount, setApplicationAmount] = useState(0);
  useEffect(() => {
    JobPostServiceIml.getJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        setJobs(response.data.data);
      }
    });
    JobPostServiceIml.getLimitJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        // console.log(response.data);
        setLimitJob(response.data.data);
      }
    });
  }, []);
  const redirect = () => {
    logout();
  }
  function remove(number) {
    console.log('delete', number);
    JobPostServiceIml.deleteJobPost(number)
      .then(() => JobPostServiceIml.getJobPostCreateByEmployer().then((response) => { setJobs(response.data.data) }))
  }
  const listJob = jobs.map((job) => {
    return <tr className="border border-color-2"
      style={job.job_post.active == true ? { background: "#1bd675" } : { background: "#e2954d" }}>
      {/* {error ? <div className="alert alert-danger col-12" role="alert">{error}</div> : null} */}
      <th
        scope="row"
        className="pl-6 border-0 py-7 min-width-px-235"
      >
        <div className="">
          <Link
            to={"/groups/job-details/" + job.job_post.id}
            className="font-size-4 mb-0 font-weight-semibold text-black-2"
          >
            {job.job_post.title}
          </Link>
        </div>
      </th>
      <td className="table-y-middle py-7 min-width-px-135">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {job.job_post.employmentType}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-125">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {job.job_post.city}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-155">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {job.job_post.createTime}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-205">
        <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
          {job.application_amount}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-80">
        <Link to={"/dashboard-jobPost?id=" + job.job_post.id} className="font-size-3 font-weight-bold text-green text-uppercase"> Edit </Link>
      </td>
      <td className="table-y-middle py-7 min-width-px-100">

        <button
          className="font-size-3 font-weight-bold text-red-2 text-uppercase"
          style={{ outline: "none", border: "none", background: "none" }}
          onClick={() => {
            if (typeof window !== "undefined") {
              const confirmBox = window.confirm(
                "Do you really want to delete this Job Post?"
              )
              if (confirmBox === true) {
                remove(job.job_post.id);
              }
            }
          }}>
          Delete
        </button >
      </td>
    </tr>
  })
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
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
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6">
                <Link
                to="/dashboard-jobalerts"
                className="btn text-uppercase"
              >
                <span className="mr-5 px-10 py-1 my-5 d-inline-block font-size-60 font-weight-bold"><i className="fas fa-wrench mr-7">&nbsp;Setting Job Alerts</i></span>
                    <br></br>
              </Link>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive">
                <h3 className="font-size-16 font-weight-bold text-black-2 mb-0">
                    JOB ALERTS
                </h3>
                <div className="float-right">
                    <span className="select-title font-weight-bold text-black-2">Sort by freshness</span>
                    <select className="custom-btn">
                        <option>Last 2 Months</option>
                        <option>Last Months</option>
                        <option>Last Weeks</option>
                        <option>Last 3 Days</option>
                    </select>
                </div>
                <br></br>
                <hr></hr>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Premium jobs
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Criterias
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardJobAlerts;
