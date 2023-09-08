import "./author.styles.css";
const Author = ({ imgUrl, firstName, lastName }) => {
  return (
    <div className="author">
      <div className="author-image-container">
        <img className="author-image" src={imgUrl} />
      </div>

      <h6 className="author-name">{`${firstName} ${lastName}`}</h6>
    </div>
  );
};

export default Author;
