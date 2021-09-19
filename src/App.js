import "./App.css";
import Footer from "./partials/footer";
import NavBar from "./partials/navbar";
import Top from "./partials/Sections/Top";
import RoadMap from "./partials/Sections/RoadMap";
import FAQ from "./partials/Sections/Faq";
import Team from "./partials/Sections/Team";
import Explorer from "./partials/Sections/Explorer";

function App() {
  return (
    <>
    <head>
    <meta charset="utf-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    <link rel="preload" href="/src/index.css" as="style" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
    <meta name="description" content="Just some NFT Project" /> 
    <meta name="author" content="Benjamin Gonzalez" /> 
    <meta name="robots" content="index,follow" /> 
    <meta name="theme-color" content="#ffffff" /> 
    <title>NFT</title>
    </head>

    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <NavBar />
        <Top />
        <RoadMap />
        <Explorer />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
