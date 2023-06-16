const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

const KEY = 'live_lTYzNRJn2voREt0ld5zii1Z9q7DuxyDIG9AVAbJecJ9iBwnOQrUjds4HNL1Bxowb';

const fetchBreeds = () => {
    return fetch(`${url1}?api_key=${KEY}`).then(response => {
        if (!response.ok) 
        {
            throw new Error(response.status);
        }
        return response.json();
    });
};

const fetchCatByBreed = breedId => {
    return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
        if (!response.ok) 
        {
            throw new Error(response.status);
        }
        return response.json();
    });
};

export { fetchBreeds, fetchCatByBreed };