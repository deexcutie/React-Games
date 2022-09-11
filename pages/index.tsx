import { PlayIcon } from "@heroicons/react/24/solid";
import type { NextPage } from "next";
import Display from "../components/display";
import { games } from "./data/games.json";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Display>
        <ul
          role="list"
          className="ml-8 grid gap-y-4 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center"
        >
          {games.map((game) => (
            <li key={game.id} className="relative">
              <div className="group block ml-3 mr-4 md:w-96 lg:w-96 xl:w-80 2xl:w-96 h-auto bg-gray-800 rounded-lg">
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

                <p className="block ml-5 text-gray-400">{game.description}</p>
                <button
                  onClick={() => router.push("/play/" + game.id)}
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
