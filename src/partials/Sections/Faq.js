import React from "react";

function QandA(num, question, answer){
  return (<div>
    <strong>
      <a class="text-3xl">
        {num+": " } 
        </a >
      {question}
      </strong>
    <br />
    {answer}
    <br />
    <br />
    </div>
  )
}

function FAQ() {

  return (
    <div
      id="roadmap"
      class="w-full min-h-screen flex flex-col justify-center items-center py-12"
    >
      <div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
        <h2 class="font-bold tracking-wider text-gray-800 text-4xl mb-4">
          FAQ
        </h2>
        <div class="text-left">

        {QandA("1", "How can I buy a FACE.PNG", "Head over to OpenSea and purchase there")}
        {QandA("2", "How were the faces created?", "Each Doge Pound has constructed algorithmically by mixing a variety of properties with different possibilities.")}
        {QandA("3", "What is the smart contract adderess of the FACE.HQ?", "Verified smart contract address: 0xF")}

        </div>
      </div>
      
    </div>
  );
}
export default FAQ;
