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
    font-size: 14px;
  }
  h2 {
    font-size: 2.0rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const Advanced = (props) => {
  const { addToast } = useToasts();
  const inputRef = useRef(null);

  const gContext = useContext(GlobalContext);

  const [score, setScore] = useState('');
  const [summary, setSummary] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleClose = () => {
    gContext.toggleAdvancedModalClose();
  };

  const handleUpdate = () => {
    if (typeof window !== "undefined") {
      const confirmBox = window.confirm(
        "Do you really want to update the score and suggest questions? This feature will use your coins (5 coins)?"
      )
      if (confirmBox === true) {
        if (props.candidateId != -1 && props.jobPostId != -1) {
          JobPostServiceIml.countScore(props.candidateId, props.jobPostId).then((response) => {
            if (response.data.data) {
            }
          });
          JobPostServiceIml.clearQuestionSuggest(props.candidateId, props.jobPostId).then((response) => {
            if (response.data.data) {
            }
          });
          JobPostServiceIml.countScore(props.candidateId, props.jobPostId).then((response) => {
            if (response.data.data) {
              setScore(response.data.data.data.matcher_result.score);
            }
          });
          JobPostServiceIml.questionSuggest(props.candidateId, props.jobPostId).then((response) => {
            if (response.data.data) {
              setSummary(response.data.data.data.result.summary);
              setQuestions(response.data.data.data.result.questions);
            }
          });
        }
      }
    };
  };


  useEffect(() => {
    if (props.candidateId != -1 && props.jobPostId != -1) {
      JobPostServiceIml.countScore(props.candidateId, props.jobPostId).then((response) => {
        if (response.data.data) {
          setScore(response.data.data.data.matcher_result.score);
        }
      });
      JobPostServiceIml.questionSuggest(props.candidateId, props.jobPostId).then((response) => {
        if (response.data.data) {
          setSummary(response.data.data.data.result.summary);
          setQuestions(response.data.data.data.result.questions);
        }
      });
    }
  }, [props.candidateId, props.jobPostId]);

  const listQuestion = questions.map((question) => {
    return <p class="note-content__list">
      <span>
        * {question}
      </span>
    </p>
  })

  return (
    <ModalStyled
      size="lg"
      centered
      show={gContext.advancedModalVisible}
      onHide={gContext.toggleAdvancedModal}
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
                <h2 class="modal-title bold">Score: <span class="text-highlight">{score}</span></h2>
              </div>
              <div class="modal-body">
                <div id="summary">
                  <h3 class="form-title letter">Sumary:</h3>
                  <textarea name="summary" value={summary} class="form-control" style={{ "font-size": "14px", "minHeight": "200px" }} rows="3" placeholder="Viết giới thiệu ngắn gọn về bản thân"></textarea>
                </div>
                <div class="text-left" id="box-note-modal-apply" style={{ margin: "10px 0px" }}>
                  <h3 class="note-title form-title letter">
                    <i class="fa-solid fa-triangle-exclamation"></i> Suggest questions:
                  </h3>
                  <div class="note-content">
                    {listQuestion}
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="border-gray"></div>
                <button type="button" class="btn btn-topcv-primary btn-theme" data-dismiss="modal" onClick={handleUpdate}>Update</button>
                <button type="button" class="btn btn-default btn-theme close-modal" data-dismiss="modal" onClick={handleClose}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body >
    </ModalStyled >
  );
};


export default Advanced;