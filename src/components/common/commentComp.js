import React, { useContext, useState } from "react";
import "./commentComp.scss";
import axios from "axios";
import { BLOG_COMMENT_URL } from "../utils/urls";
import { store } from "../stateManagement/store";
import { CommentTriggerAction } from "../stateManagement/actions";

const CommentComp = (props) => {
  const [commentData, setCommentData] = useState({ blog_id: props.id });
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(store);

  const onChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(BLOG_COMMENT_URL, commentData).then(
      (res) => {
        setLoading(false);
        setCommentData({ blog_id: props.id });
        dispatch({ type: CommentTriggerAction, payload: true });
      },
      (err) => {
        console.log(err.response.data);
        setLoading(false);
      }
    );
  };
  return (
    <div className="comment-comp">
      <h3>Write a comment!</h3>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter your name"
          name="name"
          value={commentData.name || ""}
          onChange={onChange}
        />
        <textarea
          placeholder="Enter tour comment"
          rows={6}
          name="comment"
          value={commentData.comment || ""}
          onChange={onChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CommentComp;
