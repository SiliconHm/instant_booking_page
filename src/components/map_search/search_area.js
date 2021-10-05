import React, { useState } from "react";
import AutoComplete from 'react-google-autocomplete'
import Label from "components/label/label";
import styles from './search.module.css'

const PlacesAutocomplete = ({clicked, label, clicks}) => {
    const [location, setLocation] = useState({address: '', latt: '', long: ''})

    // const [click, setClick] = useState(true)

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
        clicked(!clicks) 
    }

    // console.log(location) 

    return ( 
        <>
        <div className={`col-md-3 ${styles.margins}`}>
        {label && <Label className={styles.label_name}>{label}</Label>}
            <AutoComplete className={`form-control m-0`} onPlaceSelected={onPlaceSelected} types={['(region)']} placeholder='Where you are going?' location={location} onClick={handler} />
        </div>
        </>
    )
}

export default PlacesAutocomplete;