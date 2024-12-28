import { useEffect, useState } from "react";
import cardsService from "../../services/cardsService";

export const useGetMyCards = () => {
  const [myCards, setMyCards] = useState([]);

  const getAllMyCards = async () => {
    const response = await cardsService.getMyCards();
    setMyCards(() => response.data);
    return response.data;
  };

  useEffect(() => {
    getAllMyCards();
  }, []);

  return { myCards, getAllMyCards };
};
export default useGetMyCards;
