import { useEffect, useState } from "react";

import "./Styles/AddComment.scss";
import { UserServiceIml } from "../actions/user-actions";
import imgP from "../assets/image/header-profile.png";

const AddComment = ({ buttonValue, addComments, replyingTo, replyingFor, closeCommnet }) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comment, setComment] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    UserServiceIml.getUserProfile().then((response) => {
      if (response.data.data) {
        setUserAvatar(response.data.data.avatar);
      }
    })
  })

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
      content: replyingToUser + comment,
    };

    addComments(newComment, buttonValue, replyingFor, closeCommnet);
    closeCommnet();
    setComment("");
  };

  return (
    <div className="add-comment" style={{ marginTop: "20px" }}>
      <div className="profile-pic" style={{ 'background': `url(${userAvatar ? userAvatar : imgP})` }}></div>
      <textarea
        className="comment-input"
        placeholder="Add a comment"
        value={replyingToUser + comment}
        onChange={(e) => {
          setComment(
            e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
          );
        }}
      />
      <div className="send-btn-container">
        <div className="profile-pic"></div>
        <button className="add-btn comment-respond-bottom" onClick={clickHandler}>
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default AddComment;
