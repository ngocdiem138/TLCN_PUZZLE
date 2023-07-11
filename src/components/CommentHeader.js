import CommentBtn from "./CommentBtn";

const CommentHeader = ({ commentData, setReplying, setDeleting, setDeleteModalState, setEditing, time }) => {
  return (
    <div className="comment--header">
      <div className={`profile-pic ${commentData.email}`}></div>
      <div className="username" style={{ fontWeight: 600 }}>{commentData.email}</div>
      {commentData.canEdit ? <div className="you-tag">you</div> : ""}
      <div className="comment-posted-time">{`${time} ago`}</div>
      
        <CommentBtn
          commentData={commentData}
          setReplying={setReplying}
          setDeleting={setDeleting}
          setDeleteModalState={setDeleteModalState}
          setEditing={setEditing}
        />
    </div>
  );
};

export default CommentHeader;
