// Geocode.setApiKey( process.env.REACT_APP_GOOGLE_MAP_KEY );
const get_continent = async () =>  {

    const successfull = (position) => {
        const {latitude, longitude} = position.coords;
        lat = latitude
        long = longitude
    }
    console.log(lat, long)
    navigator.geolocation.getCurrentPosition(successfull, console.log)
    
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=04563085cbbc4905a4b3e91d25171b9a`)
        .then(res => res.json())	
}

export default get_continent;