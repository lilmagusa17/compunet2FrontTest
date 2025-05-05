//import  CardList  from "./components.js";
import PokeCardList from "./pokedexComponents.js";



//let cardList = CardList();
//document.body.appendChild(cardList);

(async () => {
    const cards = await PokeCardList();
    document.body.appendChild(cards);
})();
