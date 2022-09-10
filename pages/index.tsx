import type { NextPage } from "next";
import Head from "next/head";
import { games } from "./data/games.json";

const Home: NextPage = () => {
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
              Collection of Games
            </h1>
            <p className="text-center text-xl font-medium text-gray-400">
              Here's a small collection of some flash and fun games you can play
              while in school.
            </p>
          </div>
          <div className="py-6 md:flex justify-center grids lg:grid-cols-4">
            {games.map((game) => (
              <div className="ml-3 mr-4 w-96 h-64 bg-gray-800 rounded-lg">
                <img
                  src={game.image}
                  alt={game.id}
                  className="h-32 w-full"
                ></img>

                <div className="flex">
                  <h1 className="mt-3 ml-5 text-white text-3xl font-bold">
                    {game.title}
                  </h1>
                  <p className="mt-7 ml-2 bg-orange-500 text-orange-100 w-16 h-4 text-center text-xs rounded-lg shadow">
                    Fun
                  </p>
                </div>

                <p className="ml-5 text-gray-400">{game.description}</p>
                <button className="ml-5 mt-2 w-32 h-8 text-bold text-white text-sm bg-blue-600 rounded-lg shadow">
                  Play Now
                </button>
              </div>
            ))}
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
          Powered by <b>dxqt.lol</b>
        </a>
      </footer>
    </>
  );
};

export default Home;
