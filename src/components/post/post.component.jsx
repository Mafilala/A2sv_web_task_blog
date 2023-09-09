import { useState } from "react";
import "./post.styles.css";
import Author from "../author/author.component";
import Title from "../title/title.component";
import Summary from "../summary/summary.compoent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import Comments from "../comment/comment.component";
const Post = ({ author, title, summary, postImgUrl }) => {
  const [likes, setLikes] = useState(0);
  const [isCommenting, setIsCommenting] = useState(false);
  return (
    <div className="post_and_footer">
      <div className="post">
        <div className="post-info">
          <Author
            imgUrl={author.imgUrl}
            firstName={author.firstName}
            lastName={author.lastName}
          />
          <Title title={title} />
          {summary && <Summary summary={summary} />}
        </div>
        <div className="post-image-container">
          <img src={postImgUrl} />
        </div>
      </div>
      <br />
      <footer>
        <div
          className={likes === 0 ? "likes" : "likes active"}
          onClick={() =>
            setLikes((prev) => {
              const l = prev === 0 ? 1 : 0;
              return l;
            })
          }
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>{likes} likes </p>
        </div>
        <div className="comment-section">
          <FontAwesomeIcon
            onClick={() => setIsCommenting((prev) => !prev)}
            icon={faComment}
          />
          {isCommenting && <Comments setIsCommenting={setIsCommenting} />}
        </div>
      </footer>
    </div>
  );
};

export default Post;
