import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBree  } from './js/cat-api.js';

const fetchUsersSelect = document.querySelector(".breed-select");
const sd = document.querySelector('div');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error')

  
fetchUsersSelect.style.marginBottom = '40px'
fetchUsersSelect.style.width = '200px'
loading.style.display = 'none'
error.style.display = 'none'
sd.style.listStyle = 'none'
sd.style.display = 'flex'
sd.style.gap = '40px'

fetchUsersSelect.addEventListener("input", onClickSelect);


function onClickSelect(event) {
    if (event) {
        loading.style.display = 'flex'
    }
    console.log(fetchUsersSelect.value);
  const id = fetchUsersSelect.value;
    fetchCatByBree(id)
        .then((cats) => renderUserList(cats))
      .catch((error) => {
          loading.style.display = 'none'
        Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`);
        })};

        fetchBreeds()
      .then((list) => catList(list))
          .catch((error) => {
              Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`)
            });


function catList(list) {
        const markup1 = list
        .map((list) => {
      return  `<option class="cat-style" value="${list.id}">${list.name}</option>`;
    })
    .join("");
    fetchUsersSelect.innerHTML = markup1;
};



function renderUserList(cats) {
    const markup = cats[0].breeds
        .map((cat) => {
            return `<img class="fit-picture" alt="cat"
       width=40% heiht=40%  src=${cats[0].url}>
            <li class="cats_carts">
                      <p style="font-weight: 700;
  font-size: 36px;"> ${cat.name}</p>
          <p style="font-weight: 300;
  font-size: 20px;"> ${cat.temperament}</p>
          <p> ${cat.description}</p>
        </li>`;
            })
    .join("");
    sd.innerHTML = markup;
    loading.style.display = 'none';
};

