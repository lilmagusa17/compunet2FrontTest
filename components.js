export function Card(){
    let container = document.createElement('div');
    let title = document.createElement('h2');
    let content = document.createElement('p');
    let actionBtn = document.createElement('button');

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(actionBtn);

    title.innerText = "Card Title";
    content.innerText = "This is a card component. It can contain any content you want.";
    actionBtn.innerText = "Click Me";
    actionBtn.onclick = function() {
        alert("Button clicked!");
    };

    return container;

}

export default function CardList(){
    let array = [];
    array.push({
        product_name: "Teclado",
        description: "Yunzii 75",
        price: 100,
        
    }); //receives a dictionary with the data to be displayed in the card
    array.push({
        product_name: "Mouse",
        description: "pink mouse",
        price: 100,
        
    });

    console.log(array);
    let container = document.createElement('div');


    array.forEach((item) => {
        let card = Card();
        card.querySelector('h2').innerText = item.product_name;
        card.querySelector('p').innerText = item.description;
        card.querySelector('button').innerText = item.actionBtn;
        card.querySelector('button').onclick = function() {
            alert("Button clicked!");
        };
        container.appendChild(card);
    }   
    
    );

    return container;
}
