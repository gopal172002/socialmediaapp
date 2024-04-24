import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import PostForm from '../components/Feed/PostForm';
import Post from '../components/Feed/post';
import Layout from '../components/Layout';
import { fetchPosts } from '../reducers/postSlice';
import styles from '../styles/Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Layout>
      <Head>
        <title>mini social media</title>
        <meta name="description" content="Mini Social Media/Collaboration App" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>VibeZone</h1>
        <PostForm />
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// // pages/index.js
// import Head from 'next/head';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Mini Socila Media</title>
//       </Head>
//       <h1>Hello</h1>
//     </div>
//   );
// }

