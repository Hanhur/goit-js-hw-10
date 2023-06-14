const MY_KEY = 'live_lTYzNRJn2voREt0ld5zii1Z9q7DuxyDIG9AVAbJecJ9iBwnOQrUjds4HNL1Bxowb';
export function fetchBreeds() 
{
    return fetch("https://api.thecatapi.com/v1/breeds").then((response) => {
        if (!response.ok) 
        {
            throw new Error(response.status);
        }
        return response.json();
    })
};

export function fetchCatBreeds(id) 
{
    return fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${id}&api_key=${MY_KEY}`).then(response => {
        if (!response.ok) 
        {
            throw new Error(response.status);
        }
        return response.json();
    })
};