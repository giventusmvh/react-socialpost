import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
    console.log(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      <NewPost
        bodyChange={changeBodyHandler}
        authorChange={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Given lagi" body="keren juga kamu bang" />
      </ul>
    </>
  );
}
