import Banner from "../components/banner/Banner";
import Cards from "../components/cards/Cards";

import { useState, useEffect } from "react";

function Home() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    function () {
      fetch("/data/dataHouse.json")
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then(function (data) {
          setIsLoading(false);
          setCards(data);
        });
    },
    [isLoading]
  );

  return (
    <>
      {!isLoading && (
        <div className="main">
          <Banner className="banner_1" />
          <section className="card-container">
            <ul className="card-list">
              <li className="card-item">
                {cards.map((card) => (
                  <Cards key={card.id} card={card} />
                ))}
              </li>
            </ul>
          </section>
        </div>
      )}
    </>
  );

  // return(
  //     <>{!isLoading && (
  //         <div className="main">
  //         <Banner className="banner_1"/>
  //         <div className="card-container">
  //             {cards.map((card) => <Card key={card.id} card={card}/>)}
  //         </div>
  //     </div>
  // )}</>
  // )
}

export default Home;
