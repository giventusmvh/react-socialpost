import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "../routes/NewPost";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {}
  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Given lagi" body="keren juga kamu bang" /> */}
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
