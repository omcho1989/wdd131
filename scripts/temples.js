const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;

const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;

const menubutton = document.querySelector('#menubutton');
const menuitems = document.querySelector('#menuitems');

menubutton.addEventListener('click', () => {
  menuitems.classList.toggle('open');
});