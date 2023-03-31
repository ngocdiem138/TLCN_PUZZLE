import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { UserServiceIml } from "../actions/user-actions";
import { Alert } from 'react-bootstrap';
import { Button } from '@chakra-ui/react';
import { useLocation } from "@reach/router";
import { parse } from "query-string";

const ResetPassword = () => {
    const location = useLocation();
    const searchParams = parse(location.search);
    const token = searchParams.token;
    const [showError, setShowError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [message, setMessage] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const [showPasswordConfirm, setShowPasswordConfirm] = useState('')
    const togglePassword = () => {
        setShowPassword(!showPassword)
    };
    const togglePasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    };
    const submit = (password, passwordConfirm) => {
        if (password !== passwordConfirm) {
            setShowError(true);
            setMessage("Password and confirm password does not match");
        } else {
            UserServiceIml.getResetPass(token, password).then((response) => {
                if (response.data.errCode == "200" || response.data.errCode == null) {
                    setShowError(false);
                    setShowSuccess(true);
                    setMessage(response.data.errMsg)
                } else {
                    setShowError(true);
                    setShowSuccess(false);
                    setMessage(response.data.errMsg)
                }
            });
        }
    }
    return (
        <>
            <PageWrapper>
                <div className="header pt-11 pos-abs-tl w-100">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="404-page bg-default min-h-100vh flex-all-center pt-lg-15 pt-xxl-17 pt-27 pb-lg-0 pb-18">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 px-lg-9">
                                {showError || showSuccess ?
                                    <Alert
                                        variant={showError ? 'danger' : showSuccess ? 'success' : 'info'}>
                                        {message ? message : 'Send password success'}
                                        <div className="d-flex justify-content-end">
                                            <Button
                                                onClick={() => {
                                                    setShowError(false);
                                                    setShowSuccess(false)
                                                }}
                                                variant={showError ? 'outline-danger' : showSuccess ? 'outline-success' : 'outline-info'}>
                                                Close!
                                            </Button>
                                        </div>
                                    </Alert>
                                    : null
                                }
                                {/* <!-- card start --> */}
                                <div
                                    className="card-404 text-center"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                >
                                    {/* <!-- card image start --> */}
                                    {/* <img src={imgError} alt="" className="w-100 px-9" /> */}
                                    {/* <!-- card image end --> */}
                                    {/* <!-- card-icon start --> */}
                                    <div className="404-texts pt-10">
                                        <h3 className="card-title font-size-9 font-weight-bold">
                                            Reset Password!
                                        </h3>
                                        {/* <!-- card-texts start --> */}
                                        <p className="card-text font-size-4 " style={{ "display": "flex", margin: "5vh 0px 0vh" }}>
                                            <label style={{ "minWidth": "15vw", "textAlign": "left", "font-weight": "600", "font-size": "20px" }}>Password</label>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="position-relative form-control"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                id="password" />
                                            <a
                                                // href="/#"
                                                style={{ top: "38%" }}
                                                className="show-password pos-abs-cr fas mr-6 text-black-2"
                                                onClick={(e) => {
                                                    togglePassword();
                                                }}
                                            ></a>
                                        </p>

                                        <p className="card-text font-size-4" style={{ "display": "flex", margin: "5vh 0px 10vh" }}>
                                            <label style={{ "minWidth": "15vw", "textAlign": "left", "font-weight": "600", "font-size": "20px" }}>Confirm password</label>
                                            <input
                                                type={showPasswordConfirm ? "text" : "password"}
                                                name="passwordConfirm"
                                                value={passwordConfirm}
                                                className="form-control"
                                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                                id="passwordConfirm" />
                                            <a
                                                // href="/#"
                                                style={{ top: "60%" }}
                                                className="show-password pos-abs-cr fas mr-6 text-black-2"
                                                onClick={(e) => {
                                                    togglePasswordConfirm();
                                                }}
                                            ></a>
                                        </p>
                                        {/* <!-- card-texts end --> */}
                                        <button
                                            // to="/"
                                            onClick={() => submit(password, passwordConfirm)}
                                            className="btn btn-green btn-h-60 text-white rounded-5 w-180 m-auto text-uppercase"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- card end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default ResetPassword;
