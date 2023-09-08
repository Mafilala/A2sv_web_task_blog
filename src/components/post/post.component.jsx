import "./post.styles.css";
import Author from "../author/author.component";
import Title from "../title/title.component";
import Summary from "../summary/summary.compoent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

const Post = ({ author, title, summary, postImgUrl }) => {
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
        <div className="comment">
          <FontAwesomeIcon icon={faComment} />
          <p>2M comments</p>
        </div>
        <button>Read More</button>
      </footer>
    </div>
  );
};

export default Post;
