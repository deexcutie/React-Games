import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { getCookie } from "cookies-next";

export default function Display(props: any) {
  const [loading, setLoading] = useState(true);
  const title = getCookie("title") as string;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-slate-800 flex justify-around">
        <div className="py-5">
          <h1 className="lg:ml-6 text-white font-bold text-2xl">Astroid</h1>
        </div>

        <div className="hidden md:flex space-x-5 py-6 ">
          <Link href="/">
            <a className="text-white hover:text-blue-600 transition duration-300">
              Home
            </a>
          </Link>

          <Link href="/flash">
            <a className="text-white hover:text-blue-600 transition duration-300">
              Flash
            </a>
          </Link>

          <Link href="/emulators">
            <a className="text-white hover:text-blue-600 transition duration-300">
              Emulators
            </a>
          </Link>

          <a
            href="#"
            className="text-white hover:text-blue-600 transition duration-300"
          >
            Music Player
          </a>
          <Link href="/settings">
            <a className="text-white hover:text-blue-600 transition duration-300">
              Settings
            </a>
          </Link>

          <a
            href="#"
            className="text-white hover:text-blue-600 transition duration-300"
          >
            Discord
          </a>

          <Link href="/legal">
            <a className="text-white hover:text-blue-600 transition duration-300">
              Legal
            </a>
          </Link>
        </div>
      </nav>
      <main className="bg-gray-900">
        <div className="h-full w-full">
          <div className="container mx-auto">
            {/* <h1 className="text-center text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-900 ">
              React-Games
            </h1> */}
            {/* <p className="text-center text-xl font-medium text-gray-400">
              Search your games
            </p> */}
          </div>
          <div className="py-6">
            {loading ? (
              <div className="mt-64 flex justify-center">
                <BarLoader
                  className=""
                  color={"#123abc"}
                  loading={loading}
                  speedMultiplier={1.5}
                />
              </div>
            ) : (
              <>{props.children}</>
            )}
          </div>
        </div>
      </main>

      {/* <footer className="bg-gray-900 flex bottom-0 w-full items-center justify-center">
        <a
          className="flex items-center justify-center gap-2 text-white"
          href="https://dxqt.lol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <b>dxqt.lol</b>
        </a>
      </footer> */}
    </>
  );
}
