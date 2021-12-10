export const getGifs  = async (category) =>{
    const limit = 10;
    const apiKey = 'srO4uOUZuK75C4sD6BGMc1ZcZeKhxtVj';
    const url = 'https://api.giphy.com/v1/gifs/search?';
    const resp = await fetch(`${url}api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`);
    const {data} = await resp.json();

    const gifs = data.map(gif=>{
        return{
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return gifs;
}