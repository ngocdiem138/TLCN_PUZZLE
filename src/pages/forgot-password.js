import React, { useState } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import imgLogo from "../assets/image/logo-main.png";
import imgError from "../assets/image/svg/heart.svg";
import { UserServiceIml } from "../actions/user-actions";
import { Container, Alert } from 'react-bootstrap';
import { Box, Button } from '@chakra-ui/react'

const ForgotPassword = () => {
    const [showError, setShowError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [message, setMessage] = useState(false)
    const [email, setEmail] = useState('')
    const sendEmail = (email) => {
        UserServiceIml.getForgotPass(email).then((response) => {
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
                                        {message ? message : 'Send email success'}
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
                                    <div className="404-texts pt-14">
                                        <h3 className="card-title font-size-9 font-weight-bold">
                                            Forgot Password!
                                        </h3>
                                        {/* <!-- card-texts start --> */}
                                        <p className="card-text font-size-4 px-xxl-28 px-xs-10 px-sm-13 px-lg-13 px-md-28 px-xl-22 px-0 mb-11">
                                            <input type="email"
                                                name="email"
                                                value={email}
                                                className="form-control"
                                                placeholder="example@gmail.com"
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email" />
                                        </p>
                                        {/* <!-- card-texts end --> */}
                                        <button
                                            // to="/"
                                            onClick={()=>sendEmail(email)}
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
export default ForgotPassword;
