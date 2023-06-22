const url = 'https://musclewiki.p.rapidapi.com/exercises/attributes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c4e570fe9msh72621c65ec4fa41p135a8ajsnfce2d9275253',
		'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
	}
};

export const FetchAttributes = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result
        
    } catch (error) {
        console.error(error);
    }
}