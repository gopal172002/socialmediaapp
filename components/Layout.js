// components/Layout.js
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>VibeZone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
