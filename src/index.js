import Notiflix from "notiflix";
import { fetchCatByBreed } from "./js/cat-api";
import { renderBreedDesc } from "./js/renderBreedDesc";
import { fetchAndRenderBreeds } from "./js/fetchAndRenderBreeds";

import Notiflix from "notiflix";

const breedSelect = document.querySelector(".breed-select");
const divPict = document.querySelector(".cat-info-pict");
const divDesc = document.querySelector(".cat-info-desc");
const loader = document.querySelector(".loader");

breedSelect.addEventListener("change", onChangeSelect);

fetchAndRenderBreeds();

function onChangeSelect(event) 
{
    loader.classList.remove("unvisible");
    divPict.innerHTML = "";
    divDesc.innerHTML = "";
    const breedId = event.target.value;
    console.log("breedId: ", breedId);
    fetchCatByBreed(breedId).then(breed => renderBreedDesc(breed)).catch(error => {
        console.log(error);
        Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
    }).finally(() => loader.classList.add("unvisible"));
}

export { breedSelect, divPict, divDesc, loader };