import { getCookie, setCookie } from "cookies-next";
import type { NextPage } from "next";
import Display from "../components/display";

const Settings: NextPage = () => {
  return (
    <>
      <Display>
        <div className="flex justify-center">
          <p className="text-white px-3 mt-2">Change Page Title</p>
          <input
            type="text"
            id="title"
            placeholder={getCookie("title") as string}
            onChange={(e) => setCookie("title", e.target.value)}
            className="mb-7 focus:outline-none rounded-lg bg-gray-800 text-white py-2 px-3 w-72"
          />
        </div>
      </Display>
    </>
  );
};

export default Settings;
