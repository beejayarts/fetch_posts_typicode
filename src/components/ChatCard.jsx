import React from "react";
import "./chatcard.css";

const ChatCard = ({ id, body, title, handleUpdate }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-img">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/21/08/34/black-woman-5505581_960_720.jpg"
            alt="profile pic"
            className="img"
          />
        </div>
        <span className="card-title">Mary Johnson {id}</span>
        <span className="time">a week ago</span>
      </div>
      <div className="card-body">{body}</div>
      <footer>
        <button className="reply-btn">reply</button>
        <button className="delete-btn" onClick={() => handleUpdate(id)}>
          Delete
        </button>
      </footer>
    </div>
  );
};

export default ChatCard;
