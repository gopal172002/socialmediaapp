// components/Feed/PostForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../reducers/postSlice';

export default function PostForm() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    dispatch(createPost({ content, image }));
    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleCreatePost}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Post</button>
    </form>
  );
}
