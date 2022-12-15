import React from "react";
import PageWrapper from "../components/PageWrapper";
import { useLocation } from "@reach/router";
import { Select } from "../components/Core";
import { parse } from "query-string";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { EmployerServiceIml } from "../actions/admin-actions";
import { REDIRECT_BASE_URL } from "../utils/constants/url";

const resultTypes = [
  { value: true, label: "Accept" },
  { value: false, label: "Reject" },
];

const Contact = () => {
  const location = useLocation();
  const searchParams = parse(location.search);
  const [action, setAction] = useState(searchParams.action);
  const [candidateId, setCandidateId] = useState(searchParams.candidateId);
  const [jobPostId, setJobPostId] = useState(searchParams.jobPostId);
  console.log(action, candidateId, jobPostId);
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
  }).then((response)=>{
    if(response.data.status==200){
      window.location.assign(REDIRECT_BASE_URL + "/dashboard-applicants");
    } 
  })
    // 
  }

  return (
    <>
      <PageWrapper>
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <h2 className="font-size-9 text-center mb-11">Contact Us</h2>
                <div className="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
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
                      <div className="col-12 mb-7">
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
                  <div className="mt-8">
                    <h3 className="font-size-4">Contact Information</h3>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-map-marker-alt mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">
                        HR team <br />
                        SPKT TP.HCM, 1 Vo Van Ngan
                      </p>
                    </div>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-phone-alt mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">+093 9949 5353</p>
                    </div>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-envelope mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">19110335@student.hcmute.edu.vn</p>
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
export default Contact;
