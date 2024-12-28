function filterCases(allCards, searchValue) {
  const filteredCards = allCards.filter((card) => card.title === searchValue);

  let cards = searchValue ? filteredCards : allCards;

  return cards;
}
export default filterCases;
