import httpService from "./httpService";

export function createCard(card) {
  return httpService.post("/cards", card);
}

export function getAll() {
  return httpService.get("/cards");
}

export function getCard(id) {
  return httpService.get(`/cards/${id}`);
}

export function deleteCard(id, bizNumber) {
  return httpService.delete(`/cards/${id}`, bizNumber);
}

export function updateCard(id, card) {
  return httpService.put(`/cards/${id}`, card);
}

export function getMyCards() {
  return httpService.get("/cards/my-cards");
}
export function cardLike(id) {
  httpService.patch(`/cards/${id}`);
}

const cardsService = {
  createCard,
  getAll,
  getCard,
  getMyCards,
  deleteCard,
  updateCard,
  cardLike,
};

export default cardsService;
