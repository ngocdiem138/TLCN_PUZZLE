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

const DashboardJobs = () => {
  const gContext = useContext(GlobalContext);
  const [jobs, setJobs] = useState([]);
  const [showError, setShowError] = useState(false);
  const [limitJob, setLimitJob] = useState(0);
  useEffect(() => {
    JobPostServiceIml.getJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError(true);
      } else {
        setJobs(response.data.data.content);
      }
    });
    JobPostServiceIml.getLimitJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
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
      style={job.jobPost.isActive == true ? { background: "#1bd675" } : { background: "#e2954d" }}>
      {/* {error ? <div className="alert alert-danger col-12" role="alert">{error}</div> : null} */}
      <th
        scope="row"
        className="pl-6 border-0 py-7 min-width-px-235"
      >
        <div className="">
          <Link
            to={"/groups/job-details/" + job.jobPost.id}
            className="font-size-4 mb-0 font-weight-semibold text-black-2"
          >
            {job.jobPost.title}
          </Link>
        </div>
      </th>
      <td className="table-y-middle py-7 min-width-px-135">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {job.jobPost.employmentType}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-125">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {job.jobPost.city}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-155">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {job.jobPost.createdAt}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-205">
        <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
          {job.applicationAmount}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-80">
        <Link to={"/dashboard-jobPost?id=" + job.jobPost.id} className="font-size-3 font-weight-bold text-green text-uppercase"> Edit </Link>
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
                remove(job.jobPost.id);
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
        <div className="dashboard-main-container mt-lg-31">
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
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Posted Jobs ({jobs.length})</h3>
                </div>
                <div className="col-lg-6">
                  {/* <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Job Type
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Created on
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Total Applicants
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {listJob}
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
export default DashboardJobs;
