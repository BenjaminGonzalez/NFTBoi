function Top() {
    return (

    <div class="header w-full min-h-screen flex flex-col justify-between">
        <div class="flex flex-col justify-center h-full py-12">
            <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
                <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
                    <h2 class="font-bold tracking-widest text-pink-600 text-4xl">Dopest Non-Doge NFT Out:</h2>
                    <span class="content__container block font-light text-browngray text-3xl my-6">
                    </span>
                    <p class="font-bold tracking-widest text-4xl">FACE.PNG</p> 
                    <p class="pt-10">
                        The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you creative and commercial rights, as well as inclusion in the gang.
                    </p>
                </div>
                <div class="w-full sm:w-1/2"> 
                    <img src="/img/nft1.png" alt="nft1" />
                </div>
            </div>
        </div>
        <div class="flex flex-row w-full justify-center pb-12">
            <a class="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red" href="#about">More Information</a>
        </div>
    </div>

    );
  }
  
  export default Top;
  