import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";

function NewPost({ onAddPost }) {
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
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to={"/"} type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("https://postit-dummy-backend.vercel.app/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });

  return redirect("/");
}
