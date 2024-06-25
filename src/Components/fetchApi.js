
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c8a1180a6fmsh023edf57775999bp16305djsnea67440b0915',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo`
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
