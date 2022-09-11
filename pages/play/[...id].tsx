import type { NextPage } from "next";
import { useRouter } from "next/router";
import Display from "../../components/display";

const Home: NextPage = () => {
  const router = useRouter();
  const game = (router.query.id as string[]) || [];

  return (
    <>
      <Display>
        <h1>Game: {game.join("/")}</h1>
      </Display>
    </>
  );
};

export default Home;
