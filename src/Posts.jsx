import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  // function showModalHandler() {
  //   setModalIsVisible(true);
  // }
  return (
    <>
      <Outlet />
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <main>
        <PostsList
        // isPosting={modalIsVisible}
        // onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;
