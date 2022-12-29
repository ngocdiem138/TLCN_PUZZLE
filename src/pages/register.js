import * as React from "react";
import { Link } from "gatsby";
import { API_BASE_URL } from "../utils/constants/url";
import PageWrapper from "../components/PageWrapper";
import { Container, Alert } from 'react-bootstrap';
import { Box, Button } from '@chakra-ui/react'

/** Presentation */
import ErrorMessage from "../components/ErrorMessage"
/** Custom Hooks */
import useErrorHandler from "../components/ErrorHandler";
/** Utils */
import {
  validateRegisterForm,
  printError,
  removeError,
} from "../utils/Helpers";
import SignupHeader from "../components/Header/SignupHeader";
import axios from "axios";
import './main.css'
const Register = (props) => {
  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const [userFirstName, setFirstName] = React.useState("");
  const [userLastName, setLastName] = React.useState("");
  const [recruitmentEmail, setRecruitmentEmail] = React.useState("");
  const [educationLevel, setEducationLevel] = React.useState("");
  const [introduction, setIntroduction] = React.useState("");
  const [recruitmentPhone, setRecruitmentPhone] = React.useState("");
  const [userEntity, setUserEntity] = React.useState("Candidate");
  const [loading, setLoading] = React.useState(false);
  const { error, showError } = useErrorHandler(null);
  const [success, showSuccess] = React.useState(false);
  const [isShowErrorMessage, setIsShowErrorMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const isUserEntityCandidate = userEntity === "Candidate" ? true : false;
  const url = userEntity === "Candidate" ? "register-candidate" : "register-employer";

  const updateIntroduction = (value) => {
    setEducationLevel({ introduction: value });
  };

  const registerHandler = async () => {
    setLoading(true);
    removeError();

    try {
      const options = {
        method: "POST",
        url: `${API_BASE_URL}/user/${url}`,
        data: {
          firstName: userFirstName,
          lastName: userLastName,
          firstname: userFirstName,
          lastname: userLastName,
          recruitmentEmail: recruitmentEmail,
          educationLevel: educationLevel,
          introduction: introduction,
          recruitmentPhone: recruitmentPhone,
          entity: userEntity,
        },
      };

      const data = await axios({
        method: "POST",
        url: `${API_BASE_URL}/user/${url}`,
        data: {
          firstname: userFirstName,
          lastname: userLastName,
          firstName: userFirstName,
          lastName: userLastName,
          recruitmentEmail: recruitmentEmail,
          educationLevel: educationLevel,
          introduction: introduction,
          recruitmentPhone: recruitmentPhone,
          entity: userEntity,
        },
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.errCode == "200" || response.data.errCode == null) {
            setErrorMessage(response.data.errMsg);
            showSuccess(true);
            setLoading(false);
            if (isUserEntityCandidate) {
              localStorage.setItem("userRole", "CANDIDATE");
            } else {
              localStorage.setItem("userRole", "EMPLOYER");
            }
            // window.location.href = '/'
          } else {
            setIsShowErrorMessage(true);
            showError(response.data.errMsg);
            setFirstName("");
            setLastName("");
            setRecruitmentEmail("");
            setEducationLevel("");
            setIntroduction("");
            setRecruitmentPhone("");
            setErrorMessage('')
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err.response) {
            const { data, status } = err.response;

            if (status === 422) {
              alert("Please correct highlighted erros");
              printError(data);
            }
          }
        });
    } catch (err) {
      console.log(err);
    }


  };

  return (<PageWrapper
    headerConfig={{
      button: "profile",
      isFluid: true,
      bgClass: "bg-default",
      reveal: false,
    }}
  >
    <div className="pt-md pt-17">
      {/* <!-- pricing area function start --> */}
      {/* <!-- pricing section --> */}
      <div className="pricing-area">
        <div className="container pt-12 pt-lg-24 pb-13 pb-lg-25">
          <div className="login-container">
            {/* {isShowErrorMessage || success ?
              <Alert
                variant={isShowErrorMessage ? 'danger' : success ? 'success' : 'info'}>
                {errorMessage}
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => {
                      setIsShowErrorMessage(false);
                      showSuccess(false)
                    }}
                    variant={isShowErrorMessage ? 'outline-danger' : success ? 'outline-success' : 'outline-info'}>
                    Close!
                  </Button>
                </div>
              </Alert>
              : null
            } */}
            <div className="content-wrapper border mt-5">
              {error && <ErrorMessage errorMessage={error} />}
              <SignupHeader
                action="Register"
                isUserEntityCandidate={isUserEntityCandidate}
                setUserEntity={setUserEntity}
              />

              <div className="login-form">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (isUserEntityCandidate) {
                      if (
                        validateRegisterForm(
                          userFirstName,
                          userLastName,
                          "candidate",
                          "candidate",
                          showError
                        )
                      ) {
                        registerHandler();
                      }
                    } else {
                      if (
                        validateRegisterForm(
                          userFirstName,
                          userLastName,
                          recruitmentEmail,
                          recruitmentPhone,
                          showError
                        )
                      ) {
                        registerHandler();
                      }
                    }
                  }}
                >
                  <div className="row my-10" style={{ "padding": "0" }}>
                    <div className="col-lg-6" style={{ "paddingLeft": "0px" }}>
                      <div className="form-group mb-lg-0 mb-2 " style={{ "padding": "10px 0px 10px 10px" }}>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control p-4"
                          name="first_name"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={userFirstName}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 " style={{ "paddingRight": "0px" }}>
                      <div className="form-group m-0" style={{ "padding": "10px 10px 10px 0px" }}>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control  p-4"
                          name="last_name"
                          onChange={(e) => setLastName(e.target.value)}
                          value={userLastName}
                        />
                      </div>
                    </div>
                  </div>
                  {isUserEntityCandidate ?
                    (
                      <>
                        <div className="form-group my-10">
                          <input
                            type="text"
                            name="educationLevel"
                            placeholder="Education Level"
                            className="form-control p-4"
                            onChange={(e) => setEducationLevel(e.target.value)}
                            value={educationLevel}
                          />
                        </div>

                        <div className="form-group my-10">
                          <ReactQuill
                            style={{ width: "100%", margin: "0px", maxWidth: "100%" }}
                            theme="snow"
                            onChange={(e) => setIntroduction(e)}
                            value={introduction}
                            modules={modules}
                            formats={formats}
                            placeholder="Write about yourself ....."
                          />
                        </div>
                      </>

                    ) : (
                      <>
                        <div className="form-group my-10">
                          <input
                            type="text"
                            name="recruitmentEmail"
                            placeholder="Recruitment Email"
                            className="form-control p-4"
                            onChange={(e) => setRecruitmentEmail(e.target.value)}
                            value={recruitmentEmail}
                          />
                        </div>
                        <div className="form-group my-10">
                          <input
                            type="text"
                            placeholder="Recruitment Phone"
                            className="form-control  p-4"
                            name="recruitmentPhone"
                            onChange={(e) => setRecruitmentPhone(e.target.value)}
                            value={recruitmentPhone}
                          />
                        </div>
                      </>
                    )}
                  <div className="form-submit text-center mt-20 mb-3">
                    <button className="primary submit" disabled={loading}>
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </div>

                  <div className="here text-center">
                    Already have an account? Login{" "}
                    <Link to="/login">
                      <u>here</u>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
  );
};

export default Register;
