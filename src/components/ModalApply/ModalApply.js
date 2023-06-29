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
import { BlogServiceIml, JobPostServiceIml } from '../../actions/user-actions';
import { useToasts } from 'react-toast-notifications';

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 0;
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

const Apply = (props) => {
  const { addToast } = useToasts();
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
    setFileName("");
    setCvFile(event.target.files[0]);
    setFileName(event.target.files[0].name);

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
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [showPass, setShowPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    gContext.toggleApplyModalClose();
  };


  const onClickApply = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('coverLetter', coverLetter);
    formData.append('cvFile', cvFile);

    JobPostServiceIml.applyJob(props.jobPostId, formData).then(response => {
      if (response.data.errCode == "" || response.data.errCode == null) {
        gContext.toggleApplyModalClose();
        addToast("You apply succes", {
          appearance: 'success',
          autoDismiss: true,
        })
      } else {
        gContext.toggleApplyModalClose();
        addToast("some error occurred. Please try again", {
          appearance: 'info',
          autoDismiss: true,
        })
      }
    });
  };

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
                <h4 class="modal-title bold">Ứng tuyển <span class="text-highlight">{gContext.jobPostName}</span></h4>
              </div>
              <div class="modal-body">
                <div id="new-apply">
                  <div id="frm-select-cv-online">
                    <div class="wrap-button-select-cv" >
                    </div>
                  </div>
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
                              <span class="default-text text-gray fs-12">{fileName ? fileName : "Chưa có file nào được chọn"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-title">Họ và tên<span class="danger">&nbsp;*</span></label>
                      <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Họ tên hiển thị với Nhà tuyển dụng" name="fullname" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                      <p class="text-small text-danger italic" id="fullnameErrorMessage" style={{ "margin-top": "5px", "display": "none" }}></p>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label class="form-title">Email<span class="danger">&nbsp;*</span></label>
                          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email hiển thị với Nhà tuyển dụng" name="email" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label class="form-title">Số điện thoại<span class="danger">&nbsp;*</span></label>
                          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Số điện thoại hiển thị với Nhà tuyển dụng" name="phone" class="form-control input-sm" style={{ "font-size": "12px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                  <label class="form-title letter">Thư giới thiệu:</label>
                  <textarea name="coverLetter" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} class="form-control" style={{ "font-size": "12px" }} rows="3" placeholder="Viết giới thiệu ngắn gọn về bản thân"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default btn-theme close-modal" data-dismiss="modal" onClick={handleClose}>Hủy</button>
                <button type="submit" class="btn btn-topcv-primary btn-theme" id="btn-apply" onClick={onClickApply}>Nộp CV</button>
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
                        thiệu để được Nhà tuyển dụng xem CV sớm hơn.
                      </span>
                    </p>
                    <p class="note-content__list">
                      <span>
                        Để có trải nghiệm tốt nhất, bạn nên sử dụng các trình duyệt phổ biến như Google Chrome
                        hoặc Firefox.
                      </span>
                    </p>
                    <p class="note-content__list">
                      <span>
                        TopCV khuyên tất cả các bạn hãy luôn cẩn trọng trong quá trình tìm việc và chủ động nghiên cứu về thông
                        tin công ty, vị trí việc làm trước khi ứng tuyển. <br></br>Ứng viên cần có trách nhiệm với hành vi ứng tuyển của
                        mình. Nếu bạn gặp phải tin tuyển dụng hoặc nhận được liên lạc đáng ngờ của nhà tuyển dụng, hãy báo cáo ngay cho Puzzle qua email
                        <a class="color-green" target="_top" href="mailto:hotro@puzzleut.vn">{" "}hotro@puzzleut.vn{" "}</a> để được hỗ trợ kịp thời.
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
      </Modal.Body>
    </ModalStyled>
  );
};


export default Apply;