import type { NextPage } from "next";
import Head from "next/head";
import BarLoader from "react-spinners/BarLoader";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const game = (router.query.id as string[]) || []

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-gray-900 h-screen w-screen">
          <div className="py-10 container mx-auto">
            <h1 className="text-center text-6xl font-bold text-blue-800 ">
              React-Games
            </h1>
            <p className="text-center text-xl font-medium text-gray-400">
              Here's a small collection of some flash and fun games you can play
              while at school.
            </p>
          </div>
          <div className="py-6 md:flex justify-center grids lg:grid-cols-4 place-items-center ">
            {loading ? (
              <BarLoader
                className=""
                color={"#123abc"}
                loading={loading}
                speedMultiplier={1.5}
              />
            ) : (
              <>
                <h1>Slug: {game.join('/')}</h1>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 flex h-24 w-full items-center justify-center">
        <a
          className="flex items-center justify-center gap-2 text-white"
          href="https://dxqt.lol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <b>dxqt.lol</b>
        </a>
      </footer>
    </>
  );
};

export default Home;
