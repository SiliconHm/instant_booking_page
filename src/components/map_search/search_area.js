import React, { useState } from "react";
import AutoComplete from 'react-google-autocomplete'

const PlacesAutocomplete = () => {
    const [location, setLocation] = useState({address: '', latt: '', long: ''})

    const onPlaceSelected = (place) => {
        const { formatted_address, geometry} = place

        setLocation(prev => ({
            ...prev,
            address: formatted_address,
            latt: geometry.location.lat(),
            long: geometry.location.lng()
        }))
    }

    // console.log(location)

    return (
        <div className="col-md-3 mt-3">
            <AutoComplete className='form-control p-3 text-14' onPlaceSelected={onPlaceSelected} types={['(region)']} placeholder='Where you are going?' location={location}/>
        </div>
    )
}

export default PlacesAutocomplete;