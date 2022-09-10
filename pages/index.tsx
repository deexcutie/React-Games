import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-gray-900 h-screen w-screen">
          <div className="container mx-auto">
            <h1 className="text-center text-6xl font-extrabold text-blue-800 ">
              Games
            </h1>
            <p className="text-center text-xl font-semibold text-gray-400">
              Here's a small collection of some flash and fun games you can play
              while in school.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 flex h-24 w-full items-center justify-center">
        <a
          className="flex items-center justify-center gap-2 text-white"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <b>dxqt.lol</b>
        </a>
      </footer>
    </>
  );
};

export default Home;
