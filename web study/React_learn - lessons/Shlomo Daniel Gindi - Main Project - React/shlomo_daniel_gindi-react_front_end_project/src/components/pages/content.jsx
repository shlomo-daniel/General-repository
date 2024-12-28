import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../context/auth.context";
import { useAllCards } from "../../hooks/useAllCards";
import Card from "../common/card";
import { SearchContext } from "../../App";
import filterCases from "../../utilities/filterCases";

function Content() {
  const { user } = useAuth();
  const { allCards: allCardsFromServer, getAllCards } = useAllCards();
  const [allCards, setAllCards] = useState([]);
  const { searchInput: filterValue } = useContext(SearchContext);
  const [render, setRender] = useState(false);

  let cards = filterCases(allCards, filterValue);

  useEffect(() => {
    setAllCards(allCardsFromServer);
  }, [allCardsFromServer]);

  const refreshLike = async () => {
    setRender(false);
    // setAllCards(null);

    let data = await getAllCards();

    setAllCards(data);
    setRender(true);
  };

  useEffect(() => {
    async function fetch() {
      let data = await getAllCards();
      setAllCards(data);
    }
    fetch();
  }, [render]);

  console.log(cards);

  return (
    <main
      className="container-fluid  flex-fill p-3"
      style={{
        background: "#ffebe1",
        minHeight: "fit-content",
      }}
    >
      <div className=" d-flex justify-content-center align-items-start flex-wrap gap-3 ">
        {cards &&
          cards.map((card) => (
            <Card
              cardObj={card}
              key={card._id}
              refreshLike={refreshLike}
              isLike={card.likes.includes(user?._id)}
            />
          ))}
      </div>
    </main>
  );
}
export default Content;
