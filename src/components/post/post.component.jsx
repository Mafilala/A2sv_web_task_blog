import "./post.styles.css";
import Author from "../author/author.component";
import Title from "../title/title.component";
import Summary from "../summary/summary.compoent";

const Post = ({ author, title, summary, postImgUrl }) => {
  return (
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
  );
};

export default Post;