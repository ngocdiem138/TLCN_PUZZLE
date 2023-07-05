import React, { useContext } from "react";
import { Link } from "gatsby";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import { JobPostServiceIml } from "../actions/user-actions";
import { EmployerServiceIml } from "../actions/employer-action";
import { useState } from "react";
import { useEffect } from "react";
import { logout } from "../actions/auth-actions";
import ReactJsAlert from "reactjs-alert";

import imgP1 from "../assets/image/table-one-profile-image-1.png";

import Paginate from "../helpers/Paginate";


const defaultJobs = [
  { value: "pd", label: "Product Designer" },
  { value: "gd", label: "Graphics Designer" },
  { value: "fd", label: "Frontend Developer" },
  { value: "bd", label: "Backend Developer" },
  { value: "cw", label: "Content Writer" },
];

const DashboardMain = () => {
  const gContext = useContext(GlobalContext);
  const [jobs, setJobs] = useState([]);
  const [postedJobs, setPostedJobs] = useState(0);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [totalJobsInactive, setTotalJobsInactive] = useState(0);
  const [appliedRate, setAppliedRate] = useState(0);

  const [jobPostId, setJobPostId] = useState(0);
  var updated = []
  // const [jobs, setJobs] = useState([]);
  const [listJob, setListJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);
  const [results, setResults] = useState([]);
  const [id, setId] = useState(0);
  const [showError, setShowError] = useState(false)
  const redirect = () => {
    logout();
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = applicants.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    console.log("pageNumber", pageNumber)
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(applicants.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  // useEffect(() => {
  //   JobPostServiceIml.getJobPostCreateByEmployer().then((response) => {
  //     setJobs(response.data.data);
  //     setIsLoading(false);
  //   });
  // }, []);


  useEffect(() => {
    if (id == 0) {
      JobPostServiceIml.getAllCandidateApply().then((response) => {
        if (response.data.errCode == "403") {
          setShowError(true);
        } else {
          let applicant = []
          response.data.data.forEach(element => {
            applicant = [...applicant, { candidate: element.candidate, result: element.application.result, jobPostId: element.application.jobPostId }]
          });
          setApplicants(applicant);
        }
      })
    }
    else {
      JobPostServiceIml.getAllCandidateApplyJobPosts(id).then((response) => {
        if (response.data.errCode == "403") {
          setShowError(true);
        } else {
          let applicant = []
          response.data.content.forEach(element => {
            applicant = [...applicant, { candidate: element.candidate, result: element.application.result, jobPostId: element.application.jobPostId }]
          });
          setApplicants(applicant);
        }
      });
    }
  }, []);

  let jobUpdate = { value: 0, label: 0 };

  function updateJobList(jobs) {
    if (jobs) {
      jobs.forEach((item) => {
        let myfruit = {}
        myfruit["value"] = item.jobPost.id;
        myfruit["label"] = item.jobPost.title; // you modify it's properties
        updated = [...updated, myfruit];
      });
    }
    jobUpdate = updated[0];
    console.log(jobUpdate);
    return updated;

  }

  const handleChange = (event) => {
    setId(event.value);
    if (event.value != 0) {
      JobPostServiceIml.getAllCandidateApplyJobPosts(event.value).then((response) => {
        gContext.setToggleJobPostId(event.value);
        let applicant = []
        response.data.content.forEach(element => {
          applicant = [...applicant, { candidate: element.candidate, result: element.application.result, jobPostId: element.application.jobPostId }]
        });
        setApplicants(applicant);
        setJobPostId(event.value);
      });
    }
  };

  useEffect(() => {
    JobPostServiceIml.getJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        setJobs(response.data.data.content);
        setPostedJobs(response.data.data.length);
      }
    });
  }, []);

  useEffect(() => {
    EmployerServiceIml.getRateApplicationApplied().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        setAppliedRate(response.data.data);
      }
    });
  }, []);


  useEffect(() => {
    EmployerServiceIml.getAllAmountApplicationApplied().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        setTotalApplicants(response.data.data);
      }
    });
  }, []);

  useEffect(() => {
    EmployerServiceIml.getAllJobPostInactive().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        if (response.data.data) {
          setTotalJobsInactive(response.data.data.length);
        }
        console.log(totalJobsInactive)
      }
    });
  }, []);




  const listJobPost = jobs.map((job) => {
    return <tr className="border border-color-2"
    style={job.jobPost.active == true ? { background: "#1bd675" } : { background: "#e2954d" }}>
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
          {job.jobPost.createTime}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-205">
        <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
          {job.application_amount}
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

  const listApplication = currentPosts.map(applicant => {
    if (!applicant.candidate) return null;
    return <tr className="border border-color-2"
      style={applicant.result == "ACCEPT" ? { background: "#00FA9A" } : applicant.result == "REJECT" ? { background: "#F4A460" } : {}}>
      <th scope="row" className="pl-6 border-0 py-7 pr-0">
        <Link
          to={"/candidate-profile?candidateId=" + applicant.candidate.id + "&jobPostId=" + applicant.jobPostId}
          className="media min-width-px-235 align-items-center"
        >
          <div className="circle-36 mr-6">
            <img src={imgP1} alt="" className="w-100" />
          </div>
          <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
            {applicant.candidate.lastName} {applicant.candidate.firstName}
          </h4>
        </Link>
      </th>
      <td className="table-y-middle py-7 min-width-px-235 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {applicant.candidate.educationLevel}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          {applicant.candidate.workStatus}
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <div className="">
          <a
            href="/#"
            className="font-size-3 font-weight-bold text-black-2 text-uppercase"
            onClick={(e) => {
              e.preventDefault();
              gContext.setToggleApplicantId(applicant.candidate.id)
              gContext.toggleApplicationModal();
            }}
          >
            View Application
          </a>
        </div>
      </td>
      <td className="table-y-middle py-7 min-width-px-110 pr-0">
        <div className="">
          <Link
            to={"/candidate-profile?candidateId=" + applicant.candidate.id + "&jobPostId=" + applicant.jobPostId}
            className="font-size-3 font-weight-bold text-green text-uppercase"
          >
            Contact
          </Link>
        </div>
      </td>
      <td className="table-y-middle py-7 min-width-px-100 pr-0">
        <div className="">
          <Link
            to={"/candidate-profile?candidateId=" + applicant.candidate.id + "&jobPostId=" + applicant.jobPostId}
            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
          >
            Reject
          </Link>
        </div>
      </td>
    </tr>
  });

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
            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={2} end={postedJobs} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Posted Jobs
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={4} end={totalApplicants} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Total Applicants
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-eye"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp
                            duration={2}
                            end={Number(totalJobsInactive)}
                          />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Total Job Inactive
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-egg-blue bg-egg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp
                            duration={1}
                            decimal="."
                            decimals={1}
                            end={appliedRate}
                          />
                        </span>
                        %
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Applied Rate
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
            </div>
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Applicants List ({applicants ? applicants.length : 0})</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        onChange={handleChange}
                        options={updateJobList(jobs)}
                        defaultValue={jobUpdate}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                        maxMenuHeight={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Education Level
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {listApplication}
                    </tbody>
                  </table>
                </div>
                <Paginate
                  postsPerPage={postsPerPage}
                  totalPosts={applicants.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  selectedPage={currentPage}
                />
              </div>
            </div>
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Posted Jobs ({jobs.length})</h3>
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
                      {listJobPost}
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
export default DashboardMain;
