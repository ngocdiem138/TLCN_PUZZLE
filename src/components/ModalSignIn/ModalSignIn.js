import React from 'react';
import { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth-actions";
import { activateAccount } from "../../actions/auth-actions";
import { formReset } from "../../actions/auth-actions";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from '../../context/GlobalContext';
import axios from "axios";
import { API_BASE_URL } from '../../utils/constants/url';
import { GoogleLogin } from '@react-oauth/google';

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

class Login extends Component {
  static contextType = GlobalContext
  handleClose = () => {
    const gContext = this.context;
    gContext.toggleSignInModalClose();
  };
  togglePassword = () => {
    this.setState({
      showPass: !this.state.showPass
    });
  };
  state = {
    email: "",
    password: "",
    showPass: "",
  };



  onClickSignIn = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const data = { email, password };

    this.props.login(data, this.props.history);
    const { error, success } = this.props;
    if (success) {
      this.handleClose()
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  setRole(roles) {
    if (roles.find(role => role === 'ADMIN'))
      return 'ADMIN';
    else if (roles.find(role => role === 'EMPLOYER'))
      return 'EMPLOYER';
    else if (roles.find(role => role === 'CANDIDATE'))
      return 'CANDIDATE';
    else
      return 'USER';
  };

  errorMessage = (error) => {
    console.log(error);
  };


  responseMessage = (response) => {
    console.log(response);
    var res = response.profileObj;
    console.log(res);
    this.signup(response);
  }
  sendEmail = () => {
    axios.get(API_BASE_URL + '/auth/resend-mail/verify-account?email=' + this.state.email);
  }
  signup(res) {
    const googleresponse = {
      token: res.credential,
      ProviderId: 'Google',
    };
    axios.post(API_BASE_URL + "/auth/login-google", googleresponse)
      .then((response) => {
        console.log(googleresponse);
        if (!response.errorCode && !response.data.errorCode) {
          localStorage.setItem("token", response.data.data.jwt);
          localStorage.setItem("userRole", this.setRole(response.data.data.roles));
          localStorage.setItem("isLoggedIn", true);
          window.location.href = '/'
        }
      });
  };



  render() {
    const { email, password, showPass } = this.state;
    const { error, success } = this.props;
    const gContext = this.context;


    if (success) {
      this.handleClose()
    }

    return (
      <ModalStyled
        size="lg"
        centered
        show={gContext.signInModalVisible}
        onHide={gContext.toggleSignInModal}
      >
        <Modal.Body className="p-0">
          <button
            type="button"
            className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
            onClick={this.handleClose}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="login-modal-main bg-white rounded-8 overflow-hidden">
            <div className="row no-gutters">
              <div className="col-lg-5 col-md-6">
                <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                  <div className="pb-9">
                    <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                      Welcome Back
                    </h3>
                    <p className="mb-0 font-size-4 text-white">
                      Log in to continue your account and explore new jobs.
                    </p>
                  </div>
                  <div className="border-top border-default-color-2 mt-auto">
                    <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                      <div className="pt-5 px-9">
                        <h3 className="font-size-7 text-white">295</h3>
                        <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                          New jobs posted today
                        </p>
                      </div>
                      <div className="pt-5 px-9">
                        <h3 className="font-size-7 text-white">14</h3>
                        <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                          New companies registered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                  <div className="row">
                    <div className="col-4 col-xs-12">
                      <a
                        href="/#"
                        className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                      >
                        <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                        <span className="d-none d-xs-block">
                          Log in with LinkedIn
                        </span>
                      </a>
                    </div>
                    {/* <div className="col-4 col-xs-12">
                      <GoogleLogin
                        className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        clientId="84382277177-tk0ct3n22t6pcshpjjadnbohq97rv2hv.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div> */}
                    <div className="col-4 col-xs-12 font-size-4 font-weight-semibold position-relative text-white h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4" style={{ width: "100%" }}>
                      <GoogleLogin width="319px" locale='en'
                        onSuccess={this.responseMessage} onError={this.errorMessage} />
                    </div>
                    <div className="col-4 col-xs-12">
                      <a
                        href="/#"
                        className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                      >
                        <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                        <span className="d-none d-xs-block">
                          Log in with Facebook
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="or-devider">
                    <span className="font-size-3 line-height-reset ">Or</span>
                  </div>
                  <form onSubmit={this.onClickSignIn}>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        className="form-control"
                        placeholder="example@gmail.com"
                        onChange={this.handleInputChange}
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={this.state.showPass ? "password" : "text"}
                          className="form-control"
                          id="password"
                          name="password"
                          value={password}
                          onChange={this.handleInputChange}
                          placeholder="Enter password"
                        />
                        <a
                          href="/#"
                          className="show-password pos-abs-cr fas mr-6 text-black-2"
                          onClick={(e) => {
                            e.preventDefault();
                            this.togglePassword();
                          }}
                        >
                          <span className="d-none">none</span>
                        </a>
                      </div>
                    </div>
                    <div className="form-group d-flex flex-wrap justify-content-between">
                      <label
                        htmlFor="terms-check"
                        className="gr-check-input d-flex  mr-3"
                      >
                        <input
                          className="d-none"
                          type="checkbox"
                          id="terms-check"
                        />
                        <span className="checkbox mr-5"></span>
                        <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                          Remember password
                        </span>
                      </label>
                      <a
                        href="/forgot-password"
                        className="font-size-3 text-dodger line-height-reset"
                      >
                        Forget Password
                      </a>
                    </div>
                    <div className="form-group mb-8">
                    </div>
                    {error ? error == "Account inactive, check mail please" ? <div className="alert alert-danger col-12" role="alert">{error}  . If you don't received email or verify fail. Plese fill your email and click <a href="#" style={{ fontWeight: 800 }}
                      onClick={(e) => {
                        e.preventDefault();
                        this.sendEmail();
                      }}>
                      here
                    </a> we will send you another email!</div> :
                      <div className="alert alert-danger col-12" role="alert">{error}</div> : null}
                    {success ? <div className="alert alert-success col-12" role="alert">{success}</div> : null}
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                      Log in{" "}
                    </button>
                    <p className="font-size-4 text-center heading-default-color">
                      Don’t have an account?{" "}
                      <a href="/#" className="text-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          gContext.toggleSignUpModal();
                          gContext.toggleSignInModal();
                        }}>
                        Create a free account
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </ModalStyled>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  formReset: PropTypes.func.isRequired,
  activateAccount: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  success: state.auth.success
});

export default connect(mapStateToProps, { login, formReset, activateAccount })(Login);
