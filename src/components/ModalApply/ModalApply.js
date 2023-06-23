import React, { useContext, useEffect, useRef, useState } from 'react';
import { Component } from 'react';
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth-actions";
import { activateAccount } from "../../actions/auth-actions";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from '../../context/GlobalContext';

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
  .modal-dialog {
    max-width: 1000px;
  }
  .modal-content {
    padding: 0% 0 0% 8%;
    width: 90%
  }
  .note-content__list {
    font-size: 12px;
  }
`;

const Apply = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  const gContext = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    formReset();
  }, []);

  const formReset = () => {

  }

  const handleClose = () => {
    gContext.toggleApplyModalClose();
  };

  const onClickApply = (event) => {
    event.preventDefault();

    const data = { email, password };

    login(data, history);

    if (success) {
      handleClose();
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (success) {
      handleClose();
    }
  }, [success]);

  return (
    <ModalStyled
      size="lg"
      centered
      show={gContext.applyModalVisible}
      onHide={gContext.toggleApplyModal}
    >
      <Modal.Body className="p-0">
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="choose-cv-overlay" style={{ "display": "none" }}>
            </div>
            <form method="post" action="" id="form-apply-cv" enctype="multipart/form-data">
              <input type="hidden" name="_token" value="Q7sE2hjeHDlSc7EFEL3yoRuu4QDkKEmngnFeKhBA" />
              <input type="hidden" name="ta_source" value="JobListInNormalCompany" />
              <input type="hidden" name="jr_i" value="" />
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-xmark"></i></button>
                <h4 class="modal-title bold">Ứng tuyển <span class="text-highlight">Kỹ Sư Dự Án (Cơ Điện)</span></h4>
              </div>
              <div class="modal-body">
                <div id="new-apply">
                  <div id="frm-select-cv-online">
                    <div class="wrap-button-select-cv" >
                    </div>
                    {/* <div class="row">
                      <div class="col-xs-6">
                        <p class="new-apply__tittle--cv-online">Chọn CV online: <span class="text-recommend">(Khuyên dùng)</span></p>
                        <ul class="cv-choosen">
                        </ul>
                      </div>
                      <div class="col-xs-6">
                      </div>
                    </div> */}
                  </div>
                  {/* <div id="frm-upload">
                    <div class="row form-group">
                      <div>
                        <input
                          style={{ display: 'none' }}
                          ref={inputRef}
                          type="file"
                          onChange={handleFileChange}
                        />

                        <button onClick={handleClick}>Open file upload box</button>
                      </div>
                    </div>
                    <div class="form-group">
                    </div>
                    <div class="form-group">
                    </div>
                  </div> */}
                  <div id="frm-upload">
                    <div class="row form-group">
                      <div class="col-sm-6 col-xs-12">
                        <strong class="default-text input-label">Tải lên CV từ máy tính</strong><br></br>
                        <span class="default-text text-gray fs-12">File doc, docx, pdf. Tối đa 5MB.</span>
                      </div>
                      <div class="col-sm-6 col-xs-12">
                        <div class="jFiler jFiler-theme-dragdropbox">
                          <input ref={inputRef} onChange={handleFileChange} type="file" name="cv_file" id="filer_input" style={{ "display": "none", "position": "absolute", "left": "-9999px", "top": "-9999px", "z-index": "-9999" }} accept="doc, docx, pdf" />
                          <div class="jFiler-input-dragDrop">
                            <div class="jFiler-input-inner">
                              <a class="btn btn-upload-file" onClick={handleClick}><i class="fa fa-upload"></i> Chọn file</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-title">Họ và tên<span class="danger">&nbsp;*</span></label>
                      <input type="text" value="" placeholder="Họ tên hiển thị với Nhà tuyển dụng" name="fullname" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                      <p class="text-small text-danger italic" id="fullnameErrorMessage" style={{ "margin-top": "5px", "display": "none" }}></p>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label class="form-title">Email<span class="danger">&nbsp;*</span></label>
                          <input type="text" value="" placeholder="Email hiển thị với Nhà tuyển dụng" name="email" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label class="form-title">Số điện thoại<span class="danger">&nbsp;*</span></label>
                          <input type="text" value="" placeholder="Số điện thoại hiển thị với Nhà tuyển dụng" name="phone" class="form-control input-sm" style={{ "font-size": "12px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                  <label class="form-title letter">Thư giới thiệu:</label>
                  <textarea name="letter" class="form-control" style={{ "font-size": "12px" }} rows="3" placeholder="Viết giới thiệu ngắn gọn về bản thân"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default btn-theme close-modal" data-dismiss="modal">Hủy</button>
                <button type="submit" class="btn btn-topcv-primary btn-theme" id="btn-apply">Nộp CV</button>
                <div class="border-gray"></div>
                {/* <link rel="stylesheet" href="https://static.topcv.vn/v4/components/desktop/partials/box-note-modal-apply.c5f4ed5cf69f7702.css"> */}
                <div class="text-left" id="box-note-modal-apply">
                  <h4 class="note-title">
                    <i class="fa-solid fa-triangle-exclamation"></i> Lưu ý:
                  </h4>
                  <div class="note-content">
                    <p class="note-content__list">
                      <span>
                        Ứng viên nên lựa chọn ứng tuyển bằng CV Online &amp; viết thêm mong muốn tại phần thư giới
                        thiệu
                        để
                        được
                        Nhà tuyển dụng xem CV sớm hơn.
                      </span>
                    </p>
                    <p class="note-content__list">
                      <span>
                        Để có trải nghiệm tốt nhất, bạn nên sử dụng các trình duyệt phổ biến như Google Chrome
                        hoặc
                        Firefox.
                      </span>
                    </p>
                    <p class="note-content__list">
                      <span>
                        TopCV khuyên tất cả các bạn hãy luôn cẩn trọng trong quá trình tìm việc và chủ động nghiên cứu về thông
                        tin
                        công ty, vị trí việc làm trước khi ứng tuyển. <br></br>Ứng viên cần có trách nhiệm với hành vi ứng tuyển của
                        mình. Nếu bạn gặp
                        phải tin tuyển dụng hoặc nhận được liên lạc đáng ngờ của nhà tuyển dụng, hãy báo cáo ngay cho TopCV qua
                        email
                        <a class="color-green" target="_top" href="mailto:hotro@topcv.vn">hotro@topcv.vn</a> để được hỗ trợ kịp thời.
                      </span>
                    </p>
                    <p class="note-content__list">
                      <span>
                        Tìm hiểu thêm kinh nghiệm phòng tránh lừa đảo <a href="https://blog.topcv.vn/huong-dan-tim-viec-an-toan-trong-ky-nguyen-so/" target="__blank" class="hight-light color-green">tại đây</a>.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="login-modal-main bg-white rounded-8 overflow-hidden">
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
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Log in with Google
                      </span>
                    </a>
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
                <form onSubmit={onClickApply}>
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
                      onChange={handleInputChange}
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
                        type={showPass ? 'password' : 'text'}
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Enter password"
                      />
                      <a
                        href="/#"
                        className="show-password pos-abs-cr fas mr-6 text-black-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPass(!showPass);
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
                      href="/#"
                      className="font-size-3 text-dodger line-height-reset"
                    >
                      Forget Password
                    </a>
                  </div>
                  <div className="form-group mb-8">
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                      Log in{' '}
                      {loading ? (
                        <span className="spinner-border spinner-border-sm ml-1" role="status" aria-hidden="true"></span>
                      ) : null}
                    </button>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                </form>
                <p className="text-center font-size-4 text-black-2 mb-0">
                  Don’t have an account?{' '}
                  <a
                    href="/#"
                    className="text-primary font-weight-semibold"
                  >
                    Create a free account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </Modal.Body>
    </ModalStyled>
  );
};


export default Apply;