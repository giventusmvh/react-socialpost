import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    console.log(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} method="post" onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to={"/"} type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
