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
import { EmployerServiceIml } from '../../actions/employer-action';

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

const CoverLetter = (props) => {
  const { addToast } = useToasts();

  const gContext = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cvLink, setCvLink] = useState('');

  const handleClose = () => {
    gContext.toggleCoverLetterModalClose();
  };

  useEffect(() => {
    if (props.jobPostId == -1 || props.candidateId == -1) {

    } else {
      EmployerServiceIml.viewApplication(props.jobPostId, props.candidateId).then((response) => {
        if (response.data.errCode) {
        } else {
          setFullname(response.data.data.fullName);
          setEmail(response.data.data.email);
          setPhone(response.data.data.phone)
          setCoverLetter(response.data.data.coverLetter);
          setCvLink(response.data.data.cv);
        }
      })
    }

  }, [props.candidateId, props.jobPostId])

  return (
    <ModalStyled
      size="lg"
      centered
      show={gContext.coverLetterModalVisible}
      onHide={gContext.toggleCoverLetterModal}
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
                <h4 class="modal-title bold">Xem đơn ứng tuyển <span class="text-highlight"></span></h4>
              </div>
              <div class="modal-body">
                <div id="new-apply">
                  <div id="frm-select-cv-online">
                    <div class="wrap-button-select-cv" >
                    </div>
                  </div>
                  <div id="frm-upload">
                    <div class="row form-group">
                    </div>
                    <div class="form-group">
                      <label class="form-title">Họ và tên<span class="danger"></span></label>
                      <input type="text" value={fullname} disabled={true} placeholder="Họ tên hiển thị với Nhà tuyển dụng" name="fullname" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                      <p class="text-small text-danger italic" id="fullnameErrorMessage" style={{ "margin-top": "5px", "display": "none" }}></p>
                    </div>
                    <div class="form-group">
                      <label class="form-title">Link CV {" (hoặc click vào"} <a href={cvLink} style={{ "color": "green", fontWeight: "800" }}>đây</a> {"để xem CV)"}<span class="danger"></span></label>
                      <input type="text" value={cvLink} disabled={true} placeholder="Link CV" name="fullname" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                      <p class="text-small text-danger italic" id="fullnameErrorMessage" style={{ "margin-top": "5px", "display": "none" }}></p>
                    </div>
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label class="form-title">Email<span class="danger"></span></label>
                          <input type="text" value={email} disabled={true} placeholder="Email hiển thị với Nhà tuyển dụng" name="email" class="form-control input-sm" tyle={{ "font-size": "12px" }} />
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label class="form-title">Số điện thoại<span class="danger"></span></label>
                          <input type="text" value={phone} disabled={true} placeholder="Số điện thoại hiển thị với Nhà tuyển dụng" name="phone" class="form-control input-sm" style={{ "font-size": "12px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                  <label class="form-title letter">Thư giới thiệu:</label>
                  <textarea name="coverLetter" value={coverLetter} disabled={true} class="form-control" style={{ "font-size": "12px" }} rows="3" placeholder="Viết giới thiệu ngắn gọn về bản thân"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default btn-theme close-modal" data-dismiss="modal" onClick={handleClose}>Hủy</button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};


export default CoverLetter;