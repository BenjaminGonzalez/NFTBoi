function Team() {
  return (
    <div
      id="team"
      class="w-full min-h-screen flex flex-col justify-center items-center py-12"
    >
      <div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
        <h2 class="font-bold tracking-wider text-gray-800 text-4xl mb-4">
          Team
        </h2>
        <div class="font-light text-black text-xl">
          The FACE.PNG was founded by four imaginary versions of the same
          person, each individual plays a part in the collections birth.{" "}
        </div>

      </div>
      <div class="self-center text-center w-full px-20 pt-10">

        <div className="grid grid-cols-4 grid-flow-row gap-6 ">
          <div
            className={
              "col-span-1 row-span-1 bg-white shadow-lg rounded-sm border border-gray-200"
            }
          >
            <img src="/img/nft1.png" alt="nft1" />
          </div>
          <div
            className={
              "col-span-1 row-span-1 bg-white shadow-lg rounded-sm border border-gray-200"
            }
          >
            <img src="/img/nft1.png" alt="nft1" />
          </div>
          <div
            className={
              "col-span-1 row-span-1 bg-white shadow-lg rounded-sm border border-gray-200"
            }
          >
            <img src="/img/nft1.png" alt="nft1" />
          </div>
          <div
            className={
              "col-span-1 row-span-1 bg-white shadow-lg rounded-sm border border-gray-200"
            }
          >
            <img src="/img/nft1.png" alt="nft1" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
