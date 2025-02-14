import { data } from "./data.js"
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



//Create a card based on the html defined in card.html
function drawCards(pokemon) {
    //Create the card
    const card = document.createElement("div");
    card.classList.add("card")

    //Create the header
    const h = document.createElement("h2");
    h.classList.add("card--title");
    h.innerText = pokemon["name"];
    card.appendChild(h);
    
    //Create image
    const img = document.createElement("img");
    img.width = "256";
    img.classList.add("card--img");
    img.src = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
    card.appendChild(img);

    // Create unordered list of pokemon attributes
    const ul = document.createElement("ul");
    ul.classList.add("card--text");

    for (let x = 0; x < 6; x++) {
        const attr = document.createElement("li");
        const type = pokemon["stats"][x]["stat"]["name"];
        const val = pokemon["stats"][x]["base_stat"];

        attr.innerText = type + ": " + val;
        ul.appendChild(attr);
    }

    card.appendChild(ul);

    document.querySelector("#cardcontainer").appendChild(card);
    

}


data.forEach(drawCards);
