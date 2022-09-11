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
  } = useFetch("http://localhost:8000/games/" + gameID);

  return (
    <>
      <Display>
        {error && <div>{error}</div>}
        {isPending && (
          <BarLoader
            className=""
            color={"#123abc"}
            loading={isPending}
            speedMultiplier={1.5}
          />
        )}
        {game && (
          <div className="flex items-center justify-center">
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
