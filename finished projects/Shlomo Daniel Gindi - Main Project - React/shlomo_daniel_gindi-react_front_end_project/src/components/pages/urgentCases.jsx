import { useContext, useState } from "react";
import { useEffect } from "react";
import UserCard from "../common/userCard";
import { useAuth } from "../../context/auth.context";
import useAllCards from "../../hooks/useAllCards";
import { SearchContext } from "../../App";
import filterCases from "../../utilities/filterCases";

function UrgentCases() {
  const { allCards: allCardsFromServer, getAllCards } = useAllCards();

  const [render, setRender] = useState(false);
  const [myFavCards, setMyFavCards] = useState([]);
  const { user } = useAuth();

  const { searchInput: filterValue } = useContext(SearchContext);
  let cards = filterCases(myFavCards, filterValue);

  const refreshLike = async () => {
    setRender(false);

    let data = await getAllCards();
    data = data.filter((card) => card.likes.includes(user?._id));

    setMyFavCards(data);
    setRender(true);
  };

  useEffect(() => {
    async function fetch() {
      let data = await getAllCards();
      data = data.filter((card) => card.likes.includes(user?._id));
      setMyFavCards(data);
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
              userID={user?._id}
              refreshLike={refreshLike}
              islike={card.likes.includes(user._id)}
            />
          ))}
      </div>
    </main>
  );
}
export default UrgentCases;
