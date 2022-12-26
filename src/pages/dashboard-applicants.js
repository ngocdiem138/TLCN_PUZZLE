import React, { useContext } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";

import imgP1 from "../assets/image/table-one-profile-image-1.png";
import imgP2 from "../assets/image/table-one-profile-image-2.png";
import imgP3 from "../assets/image/table-one-profile-image-3.png";
import imgP4 from "../assets/image/table-one-profile-image-4.png";
import imgP5 from "../assets/image/table-one-profile-image-5.png";
import { useState } from "react";
import { useEffect } from "react";
import { EmployerServiceIml } from "../actions/admin-actions";
import { JobPostServiceIml } from "../actions/user-actions";
import CandidateProfile from "./candidate-profile-2";
import ModalApplication from "../components/ModalApplication";
import ReactJsAlert from "reactjs-alert";
import { logout } from "../actions/auth-actions";
import Paginate from "../helpers/Paginate";

const defaultJobs = [
  { value: 1, label: "Product Designer" },
  { value: 2, label: "Graphics Designer" },
  { value: 3, label: "Frontend Developer" },
  { value: 4, label: "Backend Developer" },
  { value: 5, label: "Content Writer" },
];
// const [listJob, setListJob] = useState([]);


const DashboardApplicants = () => {

  const [jobPostId, setJobPostId] = useState(0);
  var updated = []
  const [jobs, setJobs] = useState([]);
  const [listJob, setListJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);
  const [showError, setShowError] = useState(false);
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

  useEffect(() => {
    JobPostServiceIml.getJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "403") {
        setShowError(true);
      } else {
        setJobs(response.data.data);
        setIsLoading(false);
      }
    });
  }, []);

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
          response.data.data.forEach(element => {
            applicant = [...applicant, { candidate: element.candidate, result: element.application.result, jobPostId: element.application.jobPostId }]
          });
          setApplicants(applicant);
        }
      });
    }
  }, []);

  const redirect = () => {
    logout();
  }

  function updateJobList(jobs) {
    if (jobs) {
      jobs.forEach((item) => {
        let myfruit = {}
        myfruit["value"] = item.job_post.id;
        myfruit["label"] = item.job_post.title; // you modify it's properties
        updated = [...updated, myfruit];
      });
    }
    return updated;
  }

  const handleChange = (event) => {
    setId(event.value);
    if (event.value != 0) {
      JobPostServiceIml.getAllCandidateApplyJobPosts(event.value).then((response) => {
        gContext.setToggleJobPostId(event.value);
        let applicant = []
        response.data.data.forEach(element => {
          applicant = [...applicant, { candidate: element.candidate, result: element.application.result, jobPostId: element.application.jobPostId }]
        });
        setApplicants(applicant);
        setJobPostId(event.value);
      });
    }
  };

  const listApplication = currentPosts.map(applicant => {
    return <tr
      className="border border-color-2"
      style={applicant.result == "ACCEPT" ? { background: "#00FA9A" } : applicant.result == "REJECT" ? { background: "#F4A460" } : {}}
    >
      <th scope="row" className="pl-6 border-0 py-7 pr-0">
        <Link
          to={"/candidate-profile?candidateId=" + applicant.candidate.id + "&jobPostId=" + applicant.jobPostId}
          className="media min-width-px-235 align-items-center"
        >
          <div className="circle-36 mr-6">
            <img src={applicant.candidate.avatar ? applicant.candidate.avatar : imgP1} alt="" className="w-100" />
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
            to={"/contact?action=accept&candidateId=" + applicant.candidate.id + "&jobPostId=" + applicant.jobPostId}
            className="font-size-3 font-weight-bold text-green text-uppercase"
          >
            Contact
          </Link>
        </div>
      </td>
      <td className="table-y-middle py-7 min-width-px-100 pr-0">
        <div className="">
          <Link
            to={"/contact?action=reject&candidateId=" + applicant.candidate.id + "&jobPostId=" + applicant.jobPostId}
            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
          >
            Reject
          </Link>
        </div>
      </td>
    </tr>
  });



  const [id, setId] = useState(0);

  const gContext = useContext(GlobalContext);

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
                          Word status
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
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardApplicants;
