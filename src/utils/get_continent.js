// Geocode.setApiKey( process.env.REACT_APP_GOOGLE_MAP_KEY );
const get_continent = () =>  {

    const successfull = (position) => {
        const {latitude, longitude} = position.coords;
        lat = latitude
        long = longitude
    }
    console.log(lat, long)
    navigator.geolocation.getCurrentPosition(successfull, console.log)
    
    return 
}

export default get_continent;

  // Geocode.fromLatLng( lat , lng)
  //   .then(
  //   response => {
  //   // console.log(response)
  //     const address = response.results[0].geometry.bounds,
  //           addressArray =  response.results[0].address_components,
  //           state = getState( addressArray);
  //           setCoun(state)
  //           setBounds(address)
  //   },
  //   error => {
  //     console.error( error );
  //   }
  //   )
    // if(bounds)
    // setMrgBounds(prev => ({
    //   ...prev,
    //   latitude: {lte: bounds.northeast.lat, gte: bounds.northeast.lng},
    //   longitude: {lte: bounds.southwest.lat, gte: bounds.southwest.lng}
    // }))