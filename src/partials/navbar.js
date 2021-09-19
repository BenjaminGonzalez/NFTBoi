import React from "react";

function NavBar() {

  return (
    <nav class="z-0 flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none border-t-4 border-pink">
      <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
        <a href="{{ .Site.BaseURL }}" class="no-underline">
          <img src="/img/FACE.svg" alt="FACE.PNG Logo" class="h-12 py-1" /> 
        </a>
        
      </div>
 
        <div
          id="menu"
          class={`w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden`}
        >
          <a
            class="text-gray-800 font-bold hover:text-pink text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"
            href="#home"
          >
            About
          </a>
          <a
            class="text-gray-800 font-bold hover:text-pink text-lg text-center w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:px-5"
            href="#roadmap"
          >
            RoadMap
          </a>
          <a
            class="hidden sm:inline-block text-gray-800 font-bold hover:text-pink text-lg sm:w-auto sm:px-4 sm:py-1 cursor-pointer"
            href="#explore"
          >
            NFT Explorer
            </a>
            <a
            class="hidden sm:inline-block text-gray-800 font-bold hover:text-pink text-lg sm:w-auto sm:px-4 sm:py-1 cursor-pointer"
            href="#team"
          >
            Team
            </a>
        </div>
      
    </nav>
  );
}

export default NavBar;
