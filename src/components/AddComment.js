import { useState } from "react";

import "./Styles/AddComment.scss";

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingToUser + comment,
      createdAt: new Date(),
      score: 0,
      username: "juliusomo",
      currentUser: true,
      replies: [],
    };

    addComments(newComment);
    setComment("");
  };

  return (
    <div className="add-comment" style={{ marginTop: "20px" }}>
      <div className="profile-pic"></div>
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
