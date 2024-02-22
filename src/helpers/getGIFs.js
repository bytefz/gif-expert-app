export const getGifs = async (category) => {

    const apiKey = 'api_key=1l3U2WUHbijmxY7E9PYPcooLp1y4bcIC'
    const limitGIFs = 10;

    const url = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${category}&limit=${limitGIFs}&offset=0&rating=g&lang=en`

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));
    return gifs;
}