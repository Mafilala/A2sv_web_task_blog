import { useState } from "react";
import "./comment.styles.css";

const commentData = [
  { author: "Helina", comment: "Nice one!" },

  {
    author: "Moonira",
    comment: "interesting",
  },
];

const Comment = ({ author, comment }) => {
  return (
    <div className="single-comment">
      <h4>{author}</h4>
      <p>{comment}</p>
    </div>
  );
};

const Comments = ({ setIsCommenting }) => {
  const [newComment, setNewComment] = useState("");
  const comments = commentData.map((cmnt) => (
    <Comment author={cmnt.author} comment={cmnt.comment} />
  ));
  return (
    <div className="comment-section">
      {comments}
      <textarea
        onChange={(e) => setNewComment(e.target.value)}
        cols={30}
        rows={3}
      ></textarea>
      <button
        onClick={() => {
          if (newComment.trim()) {
            commentData.push({
              author: "guest",
              comment: newComment,
            });
            console.log(commentData);
            setIsCommenting(false);
          }
        }}
      >
        comment
      </button>
    </div>
  );
};

export default Comments;
