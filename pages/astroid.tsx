import { PlayIcon } from "@heroicons/react/24/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Display from "../components/display";
import { games } from "./data/games.json";
const Home: NextPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <>
      <Display>
        <form action="/" method="get">
          <div className="flex justify-center">
            <input
              type="text"
              id="header-search"
              placeholder="Search..."
              name="s"
              onChange={(e) => setQuery(e.target.value)}
              className="mb-7 focus:outline-none rounded-lg bg-slate-800 text-white py-2 px-3 w-72"
            />
          </div>
        </form>
        <ul
          role="list"
          className="ml-8 grid gap-y-4 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-items-center"
        >
          {games
            .filter((game) => {
              if (query === "") {
                return game;
              } else if (
                game.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return game;
              }
            })
            .map((game, index) => (
              <li key={index} className="relative">
                <div className="group block ml-3 mr-4 md:w-96 lg:w-96 xl:w-80 2xl:w-96 h-auto bg-slate-800 rounded-lg">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-32 w-full hover:opacity-60"
                  ></img>
                  <h1 className="mt-3 ml-5 text-white text-3xl font-bold">
                    {game.title}
                  </h1>
                  {/* <p className="mt-7 ml-2 bg-blue-500 text-orange-100 w-auto h-4 text-center text-xs rounded-sm shadow">
                      {game.author}
                    </p> */}

                  <p className="block ml-5 text-slate-400">{game.description}</p>
                  <button
                    onClick={() => router.push("/normal/play/" + game.id)}
                    className="ml-5 mt-2 w-32 h-8 text-bold text-white flex text-sm bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg shadow"
                  >
                    <PlayIcon className="ml-5 mt-1 w-6 h-5" />
                    <p className="mt-[6px]">Play Now</p>
                  </button>
                  <br />
                </div>
              </li>
            ))}
        </ul>
      </Display>
    </>
  );
};

export default Home;
