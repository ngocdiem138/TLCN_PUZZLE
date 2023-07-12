import CommentBtn from "./CommentBtn";
import AvatarImg from '../assets/image/header-profile.png';
import { backgroundImage } from "styled-system";
const CommentHeader = ({ commentData, setReplying, setDeleting, setDeleteModalState, setEditing, time }) => {
  return (
    <div className="comment--header">
      <div className={`profile-pic`} style={{background: `url(${commentData.avatar ? commentData.avatar : AvatarImg})`}}></div>
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
