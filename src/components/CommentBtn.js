import { IconReply } from "../assets/images/icon-reply.js";
import { IconDelete } from "../assets/images/icon-delete.js";
import { IconEdit } from "../assets/images/icon-edit.js";

const CommentBtn = ({ commentData, setReplying, setDeleting, setDeleteModalState, setEditing }) => {
  // adding reply

  // console.log(setReplying, setDeleting, se)

  let counter = false;
  const showAddComment = () => {
    counter ? setReplying(false) : setReplying(true);
    counter = true;
  };

  // delete comment
  const showDeleteModal = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  // edit comment
  const showEditComment = () => {
    setEditing(true);
  };

  return (
    <div className="comment--btn">
      <button
        className={`reply-btn ${!commentData.currentUser ? "" : "display--none"
          }`}
        onClick={showAddComment}
      >
        <IconReply /> Reply
      </button>

      {commentData.canEdit ? <button
        className={`delete-btn ${commentData.currentUser ? "" : "display--none"
          }`}
        onClick={showDeleteModal}
      >
        <IconDelete /> Delete
      </button>
        : ""}
      {commentData.canEdit ? <button
        className={`edit-btn ${commentData.currentUser ? "" : "display--none"}`}
        onClick={showEditComment}
      >
        <IconEdit /> Edit
      </button>
        : ""}
    </div>
  );
};

export default CommentBtn;
