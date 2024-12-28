import { useContext, useEffect, useState } from "react";
import { useGetMyCards } from "../../hooks/useGetMyCards";
import UserCard from "../common/userCard";
import { useAuth } from "../../context/auth.context";
import filterCases from "../../utilities/filterCases";
import { SearchContext } from "../../App";

function MyCases() {
  const { myCards: allMyCardsFromServer, getAllMyCards } = useGetMyCards();
  const { user } = useAuth();
  const { searchInput: filterValue } = useContext(SearchContext);
  const [render, setRender] = useState(false);
  const [myCards, setMyCards] = useState([]);

  let cards = filterCases(myCards, filterValue);

  useEffect(() => {
    setMyCards(allMyCardsFromServer);
  }, [allMyCardsFromServer]);

  const refreshLike = async () => {
    setRender(false);

    let data = await getAllMyCards();

    setMyCards(data);
    setRender(true);
  };

  useEffect(() => {
    async function fetch() {
      let data = await getAllMyCards();
      setMyCards(data);
    }
    fetch();
  }, [render]);

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
            <UserCard
              cardObj={card}
              key={card._id}
              refreshLike={refreshLike}
              islike={card.likes.includes(user._id)}
            />
          ))}
      </div>
    </main>
  );
}
export default MyCases;
