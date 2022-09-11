import { PlayIcon } from "@heroicons/react/24/solid";
import type { NextPage } from "next";
import Display from "../components/display";
import { games } from "./data/games.json";
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter();
  return (
    <>
      <Display>
        {games.map((game) => (
          <div className="ml-3 mr-4 w-96 h-auto bg-gray-800 rounded-lg">
            <img src={game.image} alt={game.id} className="h-32 w-full"></img>

            <div className="flex">
              <h1 className="mt-3 ml-5 text-white text-3xl font-bold">
                {game.title}
              </h1>
              <p className="mt-7 ml-2 bg-orange-500 text-orange-100 w-auto h-4 text-center text-xs rounded-lg shadow">
                {game.author}
              </p>
            </div>

            <p className="ml-5 text-gray-400">{game.description}</p>
            <button onClick={() => router.push('/play/' + game.id)} className="ml-5 mt-2 w-32 h-8 text-bold text-white flex text-sm bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg shadow">
              <PlayIcon className="ml-5 mt-1 w-6 h-5" />
              <p className="mt-[7px]">Play Now</p>
            </button>
            <br />
          </div>
        ))}
      </Display>
    </>
  );
};

export default Home;
