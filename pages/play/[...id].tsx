import type { NextPage } from "next";
import { useRouter } from "next/router";
import Iframe from "react-iframe";
import BarLoader from "react-spinners/BarLoader";
import Display from "../../components/display";
import useFetch from "../api/useFetch";

const Home: NextPage = () => {
  const router = useRouter();
  const gameID = (router.query.id as string[]) || [];
  const {
    data: game,
    error,
    isPending,
  } = useFetch("https://my-json-server.typicode.com/adreaisbad/React-Games/db" + gameID);

  return (
    <>
      <Display>
        {error && <div className="flex justify-center text-white font-bold text-xl">{error}</div>}
        {isPending && (
          <div className="flex justify-center">
            <BarLoader
              className=""
              color={"#123abc"}
              loading={isPending}
              speedMultiplier={1.5}
            />
          </div>
        )}
        {game && (
          <div className="flex justify-center">
            <Iframe
              url={game.iframe}
              width="1000px"
              height="600px"
              id={game.id}
              display="block"
            />
          </div>
        )}
      </Display>
    </>
  );
};

export default Home;
