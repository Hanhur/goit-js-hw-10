import { breedSelect } from '../index.js';

const renderBreedsSelect = breeds => {
    const markup = breeds.map(breed => {
        return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    }).join('');
    breedSelect.insertAdjacentHTML('beforeend', markup);
};

export { renderBreedsSelect };