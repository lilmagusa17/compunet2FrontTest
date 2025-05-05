

export function Card({ name, image, type }) {
    let container = document.createElement('div');
    container.className = 'card';

    let title = document.createElement('h2');
    title.className = 'card-title';

    let content = document.createElement('p');
    content.className = 'card-type';

    let img = document.createElement('img');
    img.className = 'card-image';

    let actionBtn = document.createElement('button');
    actionBtn.className = 'card-button';

    title.innerText = name;
    content.innerText = `Type: ${type}`;
    img.src = image;
    img.alt = name;

    actionBtn.innerText = "More Info";
    actionBtn.onclick = function () {
        alert(`${name} is a ${type}-type Pokémon!`);
    };

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(content);
    container.appendChild(actionBtn);

    return container;
}

export default async function PokeCardList() {
    let container = document.createElement('div');
    container.className = 'card-list';

    // Get the list of Pokémon
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
    const data = response.data;

    for (const pokemon of data.results) {
        const pokeRes = await axios.get(pokemon.url);
        const pokeData = pokeRes.data;

        const card = Card({
            name: pokeData.name,
            image: pokeData.sprites.front_default,
            type: pokeData.types[0].type.name
        });

        container.appendChild(card);
    }

    return container;
}
