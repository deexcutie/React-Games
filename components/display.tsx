import Head from "next/head";
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

export default function Display(props: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
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
              <>{props.children}</>
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
}
