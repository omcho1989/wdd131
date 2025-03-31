const temples_array = document.querySelector("#temples_array");
function displayTemples(temples) {
  temples.forEach((temple) => {
    const templateCard = document.querySelector("#template_card").cloneNode(true);
    templateCard.querySelector("#temple_name").textContent = temple.templeName;
    templateCard.querySelector("#temple_location").textContent = `Location: ${temple.location}`;
    templateCard.querySelector("#temple_dedicated").textContent = `Dedicated: ${temple.dedicated}`;
    templateCard.querySelector("#temple_area").textContent = `Area: ${temple.area.toLocaleString()}`;
    const image = templateCard.querySelector("#temple_image");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName}`;
    templateCard.removeAttribute("id");
    temples_array.appendChild(templateCard);
  });
  document.querySelector("#template_card").style.display = "none";
}

displayTemples(temples);