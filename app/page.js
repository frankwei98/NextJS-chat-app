import Head from 'next/head';
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>实时聊天</title>
        <link rel="icon" href="https://static.ably.dev/motif-red.svg?nextjs-vercel" type="image/svg+xml" />
      </Head>

      <main>
        <h1 className="title">实时聊天 Live Chat</h1>
        <p className="description">实时聊天，不存储历史消息，先确认对方能不能收到消息再开始聊天</p>
        <Chat />
      </main>

      <footer>
        Powered by
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
        and
        <a href="https://ably.com" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ably-logo.svg" alt="Ably Logo" className="logo ably" />
        </a>
      </footer>
    </div>
  );
}
