export const getGifs = async(category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=7&api_key=fvSxzToxU7Gm8QTMwty7H5IA70z8QZs6`;
        const res = await fetch( url );
        const {data} = await res.json();
        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        return gifs;
}

