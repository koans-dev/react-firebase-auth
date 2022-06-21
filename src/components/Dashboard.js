import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-100 ">
          <div className="flex items-center">
            <img
              className="h-12 rounded-full"
              src="https://img.icons8.com/color/48/000000/user-male.png"
            />{" "}
            Hi ! John
          </div>

          <div class="w-64 h-full bg-white absolute">
            <ul class="relative">
              <li class="relative">
                <a
                  class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Application 1
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Application 2
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Application 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 flex-grow">
          <h2 className="font-bold text-2xl">Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
