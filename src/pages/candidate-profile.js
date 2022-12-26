import React from "react";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import ProfileSidebarCandidate from "../components/ProfileSidebarCandidate";

import imgB1 from "../assets/image/l2/png/featured-job-logo-1.png";
import imgB2 from "../assets/image/l1/png/feature-brand-1.png";
import imgB3 from "../assets/image/svg/harvard.svg";
import imgB4 from "../assets/image/svg/mit.svg";

import imgT1 from "../assets/image/l3/png/team-member-1.png";
import imgT2 from "../assets/image/l3/png/team-member-2.png";
import imgT3 from "../assets/image/l3/png/team-member-3.png";
import imgT4 from "../assets/image/l3/png/team-member-4.png";
import imgT5 from "../assets/image/l3/png/team-member-5.png";

import imgL from "../assets/image/svg/icon-loaction-pin-black.svg";
import { CandidateServiceIml } from "../actions/candidate-action";
import { ExperienceServiceIml } from "../actions/user-actions";
import imgF2 from "../assets/image/l1/png/feature-brand-1.png";
import { EmployerServiceIml } from "../actions/employer-action";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "@reach/router";
import { Select } from "../components/Core";

import ReactJsAlert from "reactjs-alert";
import { logout } from "../actions/auth-actions";

import { parse } from "query-string";
const resultTypes = [
  { value: true, label: "Accept" },
  { value: false, label: "Reject" },
];

const CandidateProfile = () => {
  const location = useLocation();
  const searchParams = parse(location.search);
  const [candidateId, setCandidateId] = useState(searchParams.candidateId);
  const [jobPostId, setJobPostId] = useState(searchParams.jobPostId);


  const [showError, setShowError] = useState(false)
  const [experience, setExperience] = useState(["No data"]);

  const [skill, setSkill] = useState(["No data"]);
  const [profile, setProfile] = useState({});


  const [action, setAction] = useState("accept");
  let defaultResult = true;
  if (action == "reject") {
    defaultResult = false;
  }
  const [result, setResult] = useState(defaultResult);
  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const handleChange = (event) => {
    setResult(event.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    EmployerServiceIml.responseCandidateApplication({
      "candidateId": candidateId,
      "jobPostId": jobPostId,
      "email": email,
      "subject": subject,
      "result": result,
      "note": note,
    }).then((response) => {
      if (response.data.status == 200) {
        if (typeof window !== "undefined") { window.location.assign(REDIRECT_BASE_URL + "/dashboard-applicants"); }
      }
    })
    // 
  }
  const listSkill = skill.map(skill => {
    return <li className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
      {skill}
    </li>
  });


  useEffect(() => {
    ExperienceServiceIml.getExperienceByCandidateId(candidateId).then((response) => {
      setExperience(response.data.data);
      if (response.data.data.experience != null) {
        setExperience(response.data.data.experience.split('#'))
      }
    });
  }, [candidateId]);

  useEffect(() => {
    if (candidateId != 0) {
      CandidateServiceIml.getCandidateProfile(candidateId).then((response) => {
        setProfile(response.data.data);
        if (response.data.data.skills != null) {
          setSkill(response.data.data.skills.split('#'))
        }
      });
    }
  }, [candidateId]);

  const listExperience = experience.map(experience => {
    return <div className="w-100">
      <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
          <img src={imgF2} alt="" />
        </div>
        <div className="w-100 mt-n2">
          <h3 className="mb-0">
            <Link
              to="/#"
              className="font-size-6 text-black-2 font-weight-semibold"
            >
              {experience.title}
            </Link>
          </h3>
          <Link
            to="/#"
            className="font-size-4 text-default-color line-height-2"
          >
            {experience.company}
          </Link>
          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
            <Link
              to="/#"
              className="font-size-3 text-gray mr-5"
            >
              {experience.startDate} - {experience.endDate}
            </Link>
            <Link
              to="/#"
              className="font-size-3 text-gray"
            >
              <span
                className="mr-4"
                css={`
                margin-top: -2px;
              `}
              >
                <img src={imgL} alt="" />
              </span>
              {experience.description}
            </Link>
          </div>
        </div>
      </div>
    </div>
  })

  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 dark-mode-texts">
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
              {/* <!-- Left Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
                <ProfileSidebarCandidate candidateId={candidateId} />
              </div>
              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="bg-white rounded-4 shadow-9">
                    {/* <!-- Tab Section Start --> */}
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="one"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Overview
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="two"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Contact
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content>
                      <Tab.Pane eventKey="one">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            About
                          </h4>
                          <p className="font-size-4 mb-8">
                            <div dangerouslySetInnerHTML={{ __html: profile.introduction ? profile.introduction : "No introduction" }} />
                          </p>
                        </div>
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Skills
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            {listSkill}
                          </ul>
                        </div>
                        {/* <!-- Skills End --> */}
                        {/* <!-- Card Section Start --> */}
                        <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Work Exprerience
                          </h4>
                          {experience.length ? listExperience : "No Info"}
                          {/* <!-- Single Card End --> */}
                        </div>
                        {/* <!-- Card Section End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="two">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                          <form
                            onSubmit={handleSubmit}
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                          >
                            {/* You still need to add the hidden input with the form name to your JSX form */}
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="row">
                              <div className="col-6 mb-7">
                                <label
                                  htmlFor="name"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Your Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Jhon Doe"
                                  id="name"
                                  name="name"
                                  required
                                />
                              </div>
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="email"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  E-mail
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="example@gmail.com"
                                  id="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  name="email"
                                  required
                                />
                              </div>
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="subject"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Subject
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Special contract"
                                  id="subject"
                                  name="subject"
                                  value={subject}
                                  onChange={(e) => setSubject(e.target.value)}
                                  required
                                />
                              </div>
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="result"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Result
                                </label>
                                <Select
                                  options={resultTypes}
                                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                  border={false}
                                  onChange={handleChange}
                                  defaultValue={action == "accept" ? resultTypes[0] : resultTypes[1]}
                                />
                              </div>
                              <div className="col-lg-12 mb-7">
                                <label
                                  htmlFor="message"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Message
                                </label>
                                <textarea
                                  id="message"
                                  value={note}
                                  onChange={(e) => setNote(e.target.value)}
                                  placeholder="Type your message"
                                  className="form-control h-px-144"
                                  name="message"
                                  required
                                ></textarea>
                              </div>
                              <div className="col-lg-12 pt-4">
                                <button
                                  type="submit"
                                  className="btn btn-primary text-uppercase w-100 h-px-48"
                                >
                                  Send Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </div>
                </Tab.Container>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
                <div className="pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Other experts
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT1}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            David Herison
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            UX/UI Designer
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT2}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Mark Zanitos
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Lead Product Designer
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT3}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Anna Frankin
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Visual Designer
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT4}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Jhony Vino
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Creative Director
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT5}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Aniasta Hemberg
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Creative Director
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
