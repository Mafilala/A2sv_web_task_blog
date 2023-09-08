import { useState } from "react";
import "./App.css";
import Post from "./components/post/post.component";
import { data } from "./assets/data";
import NavBar from "./components/nav-bar/nab-bar.component";

function App() {
  let posts = [];
  for (let post of data) {
    posts.push(
      <Post
        author={post.author}
        title={post.title}
        summary={post.summary}
        postImgUrl={post.postImgUrl}
      />
    );
    posts.push(<div className="line"></div>);
  }
  posts.pop();

  return (
    <div className="blog">
      <NavBar />
      <div className="middle">
        <h1>WebT Blog</h1>
        {posts}
      </div>
      <div className="right">
        <h2>Trending Topics</h2>
        <div className="button-group">
          <button>Blockchain</button>
          <button>Cryptocurrenccy</button>
          <button>Technology</button>
          <button>Fiction</button>

          <button>Sci-fi</button>
          <button>Mindfulness</button>
          <button>consistency</button>
        </div>
      </div>
    </div>
  );
}

export default App;
