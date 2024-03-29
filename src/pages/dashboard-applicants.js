import React, { useContext } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";

import imgP1 from "../assets/image/table-one-profile-image-1.png";
import { useState } from "react";
import { useEffect } from "react";
import { JobPostServiceIml, UserServiceIml } from "../actions/user-actions";
import ReactJsAlert from "reactjs-alert";
import { logout } from "../actions/auth-actions";
import Paginate from "../helpers/Paginate";
import Reject from "../assets/image/reject.png";
import Approved from "../assets/image/approved.png";


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
  const [coins, setCoins] = useState(0);
  const [listJob, setListJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);
  const [showError, setShowError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [existedIQ, setExitedIQ] = useState(false);
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
    UserServiceIml.getUserProfile().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError(true);
      } else {
        setCoins(response.data.data.balance);
      }
    })
    JobPostServiceIml.getJobPostCreateByEmployer().then((response) => {
      if (response.data.errCode == "UNAUTHORIZED_ERROR") {
        setShowError(true);
      } else {
        setJobs(response.data.data.content);
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (id == 0) {
      JobPostServiceIml.getAllCandidateApply().then((response) => {
        if (response.data.errCode == "UNAUTHORIZED_ERROR") {
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
        if (response.data.errCode == "UNAUTHORIZED_ERROR") {
          setShowError(true);
        } else {
          let applicant = []
          response.data.data.content.forEach(element => {
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
        myfruit["value"] = item.jobPost.id;
        myfruit["label"] = item.jobPost.title; // you modify it's properties
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
        response.data.data.content.forEach(element => {
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
      style={applicant.result == "ACCEPT" ? { 'background-image': 'url(' + Approved + ')', 'background-repeat': 'no-repeat', 'background-position': '70% center', 'background-size': 'contain' } : applicant.result == "REJECT" ? { 'background-image': 'url(' + Reject + ')', 'background-repeat': 'no-repeat', 'background-position': '70% center', 'background-size': 'contain' } : {}}
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
          <div className="">
            <a
              href="/#"
              className="font-size-4 font-weight-normal text-black-2 mb-0"
              onClick={(e) => {
                let existed = false;
                e.preventDefault();
                JobPostServiceIml.checkExistedQuestionSuggest(applicant.candidate.id, applicant.jobPostId).then((response) => {
                  if (response.data.data) {
                    setExitedIQ(response.data.data);
                    existed = response.data.data;
                  }

                  JobPostServiceIml.checkExistedScore(applicant.candidate.id, applicant.jobPostId).then((response) => {
                    if (response.data.data || existed) {
                      gContext.setToggleCandidateId(applicant.candidate.id)
                      gContext.setToggleJobPostId(applicant.jobPostId)
                      gContext.setToggleIsLoad()
                      gContext.toggleAdvancedModal();
                      UserServiceIml.getUserProfile().then((response) => {
                        if (response.data.errCode == "UNAUTHORIZED_ERROR") {
                          setShowError(true);
                        } else {
                          setCoins(response.data.data.balance);
                        }
                      })
                    } else {
                      if (typeof window !== "undefined") {
                        const confirmBox = window.confirm(
                          "Do you really want to use the scoring feature and suggest questions? This feature will use your coins (5 coins)?"
                        )
                        if (confirmBox === true) {
                          gContext.setToggleCandidateId(applicant.candidate.id)
                          gContext.setToggleJobPostId(applicant.jobPostId)
                          gContext.setToggleIsLoad()
                          gContext.toggleAdvancedModal();
                        }
                        UserServiceIml.getUserProfile().then((response) => {
                          if (response.data.errCode == "UNAUTHORIZED_ERROR") {
                            setShowError(true);
                          } else {
                            setCoins(response.data.data.balance);
                          }
                        })
                      };
                    }
                  })
                })
              }}
            >
              Score and IQ suggest
            </a>
          </div>
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
          <div className="">
            <a
              href="/#"
              className="font-size-4 font-weight-normal text-black-2 mb-0"
              onClick={(e) => {
                e.preventDefault();
                gContext.setToggleCandidateId(applicant.candidate.id)
                gContext.setToggleJobPostId(applicant.jobPostId)
                gContext.toggleCoverLetterModal();
              }}
            >
              View CV
            </a>
          </div>
        </h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <div className="">

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
    </tr >
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
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Applicants List ({applicants ? applicants.length : 0}) ---- Coins ({coins})</h3>
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
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardApplicants;
