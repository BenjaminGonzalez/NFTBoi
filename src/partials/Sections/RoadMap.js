import React from "react";

function RMEntry(title, things) {
  return (
    <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
      <div class="left">
        <svg height="100" width="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#cd00c9"
            stroke-width="3"
            fill="#cd00c9"
          />
        </svg>
      </div>
      <div class="pl-7 right text-left">
        <strong>
          <a class="text-2xl">{title}</a>
        </strong>
        <br />
        {things}
        <br />
        <br />
      </div>
    </div>
  );
}

function RoadMap() {
  return (
    <div
      id="roadmap"
      class="w-full min-h-screen flex flex-col justify-center items-center py-12"
    >
      <div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
        <h2 class="font-bold tracking-wider text-gray-800 text-4xl mb-4">
          Road Map
        </h2>

        {RMEntry("Launch", "Release FACE's to the world")}
        {RMEntry("Minting", "Allow people to mint FACE's")}
        {RMEntry("Expand", "Collab with other Crypto project's to allow progressive minting (Evolution)")}
        {RMEntry("Grow", "Sell Sell Sell")}
        {RMEntry("Dominate", "Own the World")}
      </div>
    </div>
  );
}
export default RoadMap;
