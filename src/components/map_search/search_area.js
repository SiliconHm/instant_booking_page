import React, { useState } from "react";
import AutoComplete from 'react-google-autocomplete'
import Label from "components/label/label";
import styles from './search.module.css'

const PlacesAutocomplete = ({clicked, label}) => {
    const [location, setLocation] = useState({address: '', latt: '', long: ''})

    const [click, setClick] = useState(false)

    const onPlaceSelected = (place) => {
        const { formatted_address, geometry} = place

        setLocation(prev => ({
            ...prev,
            address: formatted_address,
            latt: geometry.location.lat(),
            long: geometry.location.lng()
        }))
    }

    const handler = () => {
        setClick(!click)
        clicked(click)
    }

    // console.log(location)

    return (
        <>
        <div className="col-md-3 mt-2">
        {label && <Label className={styles.label_name}>{label}</Label>}
            <AutoComplete className='form-control p-3 text-12' onPlaceSelected={onPlaceSelected} types={['(region)']} placeholder='Where you are going?' location={location} onClick={handler} />
        </div>
        </>
    )
}

export default PlacesAutocomplete;