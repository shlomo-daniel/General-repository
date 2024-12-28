function filterCases(allCards, searchValue) {
  // arguments
  const filteredCards = allCards.filter((card) => card.title === searchValue);

  let cards = searchValue ? filteredCards : allCards;

  //output
  return cards;
}
export default filterCases;
