// components/Feed/Post.js
export default function Post({ post }) {
    return (
      <div className="post">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="post" />}
      </div>
    );
  }
  