import { Notify } from "notiflix/build/notiflix-notify-aio";
import { fetchBreeds, fetchCatBreeds } from "./js/cat-api";

const select = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");


select.addEventListener("input", onClickSelect);

function onClickSelect() 
{
    const id = select.value;
    fetchCatBreeds(id).then(cats => renderList(cats)).catch(error => {
        Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`);
    });
}

fetchBreeds().then(list => catList(list)).catch(error => {
    Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`);
});

function catList(list) 
{
    const markup = list.map(list => {
        return `<option class="cat-style" value="${list.id}">${list.name}</option>`;
    }).join("");
    select.innerHTML = markup;
}

function renderList(cats) 
{
    const markup = cats[0].breeds.map(cat => {
        return `<img class="cat-picture" alt="cat" width=40% heiht=40% src=${cats[0].url}>
        <li class="cat_carts">
            <p class="cat-item" style="font-weight: 700; font-size: 36px;">${cat.name}</p>
            <p class="cat-description">${cat.description}</p>
            <p style="font-weight: 300; font-size: 20px;"><b class="cat-temperament">Temperament: </b>${cat.temperament}</p>
        </li>`;
    }).join("");
    catInfo.innerHTML = markup;
}
