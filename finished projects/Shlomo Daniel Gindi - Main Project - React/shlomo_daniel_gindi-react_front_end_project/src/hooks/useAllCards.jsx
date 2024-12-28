import { useEffect, useState } from "react";
import cardsService from "../../services/cardsService";

export const useAllCards = () => {
  const [allCards, setAllCards] = useState([]);

  const getAllCards = async () => {
    const response = await cardsService.getAll();
    setAllCards(response.data);
    return response.data;
  };

  useEffect(() => {
    getAllCards();
  }, []);
  return { allCards, getAllCards };
};
export default useAllCards;
