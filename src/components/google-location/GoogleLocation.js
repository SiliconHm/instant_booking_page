const API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;  // how to get key - step are below

export const getLocation = (city) => {
    
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`, {
        method: 'GET'
    })
    .then((res)=> {
        const data = res.json()
        // console.log(data)
        return data
    })
    .catch(err => console.log(err))
}

 