import { getData } from "../components/dataFetcher";
import "./App.css";
import CardTemplate from "../components/CardTemplate";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// This App.jsx file combined both the CardTemplate and the getData modules.

function App() {
  const [searchRobots, setSeatchRobots] = useState([]);

  // useEffect to first render the page with data
  useEffect(() => {
    getData("/db/db.json").then((data) => {
      // search for cats

      //setting the fetched data
      setSeatchRobots(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 italic ">
        <h1 className="text-6xl leading-2">WorkerBots!</h1>
        <p>Welcome to the world of tomorrow!</p>
        <p>Need a Robot for a specific speacilty? Well look no further!</p>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {searchRobots.map((item, index) => {
          return (
            <CardTemplate
              key={index}
              name={item.name}
              age={item.age}
              email={item.email}
              specialty={item.specialty}
              cost={item.cost}
              image={item.image}
              available={item.available}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
