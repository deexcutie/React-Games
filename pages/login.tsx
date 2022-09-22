import Router from "next/router";
import React from "react";

function login() {
  return (
      <div className="w-full h-screen flex items-center justify-center bg-slate-900">
        <form className="w-full md:w-1/3 rounded-lg">
          <div className="flex font-bold justify-center mt-6">
            <img
              className="h-20 w-20 mb-3"
              src="https://dummyimage.com/64x64"
            />
          </div>
          <h2 className="text-2xl text-center text-gray-200 mb-8">Sign In</h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    bg-slate-800
                    text-gray-400
                    focus:outline-none
                  "
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    bg-slate-800
                    text-gray-400
                    focus:outline-none
                  "
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={() => Router.push("/astroid")}
              className="
                w-full
                py-2
                mt-8
                rounded-full
                bg-blue-800
                text-gray-100
                focus:outline-none
              "
            >
              Login
            </button>
          </div>
        </form>
      </div>
  );
}

export default login;
