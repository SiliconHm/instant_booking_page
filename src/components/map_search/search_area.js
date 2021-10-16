import React from "react";
import AutoComplete from 'react-google-autocomplete'
import Label from "components/label/label";
import styles from './search.module.css'

const PlacesAutocomplete = ({clicked, label, clicks, setLocation}) => {
        
    const onPlaceSelected = (place) => {
        const { formatted_address, geometry} = place
        
        setLocation(prev => ({
            ...prev,
            address: formatted_address,
            latitude: geometry.location.lat(),
            longitude: geometry.location.lng()
        }))
    } 

    const handler = () => {
        clicked(!clicks) 
    }
 
    return ( 
        <>
        <div className={`col-md-3 ${styles.margins}`}>
        {label && <Label className={styles.label_name}>{label}</Label>}
            <AutoComplete apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY} className={`form-control m-0`} onPlaceSelected={onPlaceSelected} types={['(region)']} placeholder='Enter destination...' onClick={handler} />
        </div>
        </>
    )
}

export default PlacesAutocomplete;