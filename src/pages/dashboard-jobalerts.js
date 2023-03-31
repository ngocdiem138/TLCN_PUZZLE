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
                    to="/dashboard-notifications"
                    className="btn text-uppercase"
                  >
                    <span className="mr-5 px-10 py-1 my-5 d-inline-block font-size-60 font-weight-bold"><i className="fas fa-bell mr-7">&nbsp;Back to Job Alerts</i></span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive">
                  <div class="content-block">
                    <div class="section-full browse-job bg-white content-inner-2">
                      <div class="container">
                        <div class="job-bx">
                          <div class="row">
                            <div class="col-lg-8">
                              <form class="job-alert-bx">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <label>Keywords</label>
                                      <input class="form-control" placeholder="Skills, Designations, Roles, Companies" type="text" />
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <label>Location</label>
                                      <input class="form-control" placeholder="Enter the cities you want to work in" type="text" />
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="form-group">
                                      <label>Work Experience</label>
                                      <div class="dropdown bootstrap-select">
                                        <select class="btn dropdown-toggle btn-light">
                                          <option>0 years</option>
                                          <option>1 years</option>
                                          <option>2 years</option>
                                          <option>5 years</option>
                                          <option>4 years</option>
                                          <option>5 years</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="form-group">
                                      <label>Expected Salary</label>
                                      <div class="dropdown bootstrap-select">
                                        <select class="btn dropdown-toggle btn-light">
                                          <option>0 lakh</option>
                                          <option>1 lakh</option>
                                          <option>2 lakh</option>
                                          <option>5 lakh</option>
                                          <option>4 lakh</option>
                                          <option>5 lakh</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <label>Industry</label>
                                      <input class="form-control" placeholder="Type or Select the desired industry" type="text" />
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <label>Job Category</label>
                                      <input class="form-control" placeholder="Type or Select the desired category" type="text" />
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <label>Role</label>
                                      <input class="form-control" placeholder="Type or Select the desired role" type="text" />
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <label>Name your Job Alert</label>
                                      <input class="form-control" placeholder="Enter a name that will help you recognize this Job Alert" type="text" />
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="job-alert-check" name="job-alert-check" />
                                        <label class="form-check-label" for="job-alert-check">Also send me jobs closely related to my search terms </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-12 text-center">
                                    <button class="site-button btn btn-primary">Create Job Alert</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="col-lg-4 pt-10" style={{ "backgroundColor": "#eef1ff" }}>
                              <div class="p-a25">
                                <h6>Why should you create a job alert</h6>
                                <ul class="list-check px-10 pt-5 pb-6">
                                  <li>Get relevant jobs directly in your inbox</li>
                                  <li>Stay updated with latest opportunities</li>
                                  <li>Be the first one to apply</li>
                                  <li>Create up to 5 personalized job alerts</li>
                                </ul>
                                <hr></hr>
                                <div class="dez-divider bg-gray-dark"></div>
                                <h6 class="font-14">Why info@example.com</h6>
                                <p class="m-b10"><strong class="text-black m-r10">800,000+ </strong> Jobs</p>
                                <p class="m-b10"><strong class="text-black m-r10">100,000+</strong> CV searches daily</p>
                                <hr></hr>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
