const names = ["Given", "Marco"];

export default function Post({ author, body }) {
  return (
    <div className="post">
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}
