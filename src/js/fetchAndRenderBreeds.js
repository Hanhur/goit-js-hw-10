import { loader, breedSelect } from "../index.js";
import { fetchBreeds } from "./cat-api.js";
import { renderBreedsSelect } from "./renderBreedsSelect.js";

const fetchAndRenderBreeds = () => {
    loader.classList.remove("unvisible");
    fetchBreeds().then(breeds => renderBreedsSelect(breeds)).catch(error => {
        console.log(error);
        Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
    }).finally(() => {
        loader.classList.add("unvisible");
        breedSelect.classList.remove("unvisible");
    });
};

export { fetchAndRenderBreeds };