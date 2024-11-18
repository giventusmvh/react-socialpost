import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ bodyChange, authorChange }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChange} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChange} />
      </p>
    </form>
  );
}

export default NewPost;
