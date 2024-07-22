 const API_KEY = "024a68afc0042521189225f763bc5d2e";
//const API_KEY = "a1286f9f7ffba581857db9a1221b9fd1";
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if(!response.ok) {
            console.log('error')
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
export const getWeatherByLocation = async (latitude, longitude) => {
    try {
        const response = await fetch(`${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        if(!response.ok) {
            console.log('error')
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
