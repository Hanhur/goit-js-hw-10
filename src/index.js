import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreeds } from './js/cat-api.js';

const select = document.querySelector(".breed-select");
const catInfo = document.querySelector('.cat-info');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error');

select.style.marginBottom = '40px';
select.style.width = '200px';
loading.style.display = 'none';
error.style.display = 'none';
catInfo.style.listStyle = 'none';
catInfo.style.display = 'flex';
catInfo.style.gap = '40px';

select.addEventListener("input", onClickSelect);

function onClickSelect(event) 
{
    if (event) 
    {
        loading.style.display = 'flex';
    }
    console.log(select.value);
    const id = select.value;
    fetchCatByBreeds(id).then((cats) => renderUserList(cats)).catch((error) => {
        loading.style.display = 'none';
        Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`);
    })
};

fetchBreeds().then((list) => catList(list)).catch((error) => {
    Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`);
});

function catList(list) 
{
    const markup = list.map((list) => {
            return `<option class="cat-style" value="${list.id}">${list.name}</option>`;
    }).join("");
    select.innerHTML = markup;
};

function renderUserList(cats) 
{
    const markup = cats[0].breeds.map((cat) => {
        return `<img class="fit-picture" alt="cat" width=40% heiht=40% src=${cats[0].url}>
        <li class="cats_carts">
            <p class="cat-item" style="font-weight: 700; font-size: 36px;"> ${cat.name}</p>
            <p> ${cat.description}</p>
            <p style="font-weight: 300; font-size: 20px;"> <b class="cat-temperament">Temperament: </b> ${cat.temperament}</p>
        </li>`;
    }).join("");
    catInfo.innerHTML = markup;
    loading.style.display = 'none';
};