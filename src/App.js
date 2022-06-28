import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "./api/config";
import ChatCard from "./components/ChatCard";
import { Processor } from "postcss";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => err.message);
  }, []);

  //confused

  const handleUpdate = (id) => {
    console.log(`this card has an id of ${id}`);

    const remainingPosts = posts.filter((post) => post.id !== id);
    setPosts(remainingPosts);
  };

  return (
    <div className="App">
      {posts.length === 0 ? (
        <div>loading...</div>
      ) : (
        posts.map((post) => {
          return (
            <ChatCard
              id={post.id}
              title={post.title}
              body={post.body}
              handleUpdate={handleUpdate}
            />
          );
        })
      )}
    </div>
  );
}

// {post.length > 0 &&
//   React.Children.toArray(
//     post.map((post) => (
//       <div>
//         {post.id}
//         <p>{post.title}</p>
//       </div>
//     ))
//   )}

export default App;
