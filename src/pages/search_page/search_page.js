import React, { useCallback, useContext, useEffect, useState} from "react";
import { Redirect, useHistory } from "react-router-dom";
import _, { toLower } from "lodash";

import HeaderSearch from "components/header_search";
import PropertiesList from "components/properties_list";
import PropertiesSearchMap from "components/properties_search_map";
import PropertyPreview from "components/property_preview";

import { AppDataContext, SearchActionsContext, SearchDataContext } from "containers/data_context";

import routes from "routing/routes";

import { DEFAULT_CURRENCY } from "constants/defaults";
import dateFormatter from "utils/date_formatter";
import getBookingParamsFromUrl from "utils/get_booking_params_from_url";
import { encodeMapParams } from "utils/map_params";
import setUrlParams from "utils/set_url_params";
import get_url_params from "utils/get_url_params";

import styles from "./search_page.module.css";
import Bottom from "components/home_footer/Bottom/Bottom";
import {countries} from 'country-data';
import Countries from "constants/countries";
// import Geocode from "react-geocode";
// import Autocomplete from 'react-google-autocomplete';
// import { GoogleMapsAPI } from '../client-config';
// Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_KEY);
// Geocode.enableDebug();

// import countryList from 'react-select-country-list'

const DEBOUNCE_MAP_TIME = 1000;

export default function SearchPage() {
  const { featureFlags } = useContext(AppDataContext);
  const [selectProperty, setSelectProperty] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [highlightedProperties, setHighlightedProperties] = useState({});
  const history = useHistory();
  const { loadPropertiesList } = useContext(SearchActionsContext);
  const { properties } = useContext(SearchDataContext);
  let { data: propertiesData, isLoading } = properties;
  const [cont, setCont] = useState();
  // const [bounds, setBounds] = useState()
  // const [mrgBounds, setMrgBounds] = useState({latitude: {lte: '', gte: ''}, longitude: {lte:'', gte:''}})
 
  if(cont && propertiesData) {
    // console.log(cont)
    propertiesData = propertiesData.filter(function(value) {
      for (let i = 0; i < Countries.length; i++) {
            const element = Countries[i];
            if(toLower(element.continent) === cont && element.country === countries[value.country].name){
              return value
            }
          }
          return 0;
    })
  }

  // const successfull = (position) => {
  //   const {latitude, longitude} = position.coords;

  //   Geocode.fromLatLng( latitude , longitude).then(
	// 		response => {
	// 			const address = response.results[0].geometry.bounds;
  //       setBounds(address)
	// 		},
	// 		error => {
	// 			console.error( error );
	// 		}
	// 	);

  //   if(bounds)
  //     setMrgBounds(prev => ({
  //       ...prev,
  //       latitude: {lte: bounds.northeast.lat, gte: bounds.northeast.lng},
  //       longitude: {lte: bounds.southwest.lat, gte: bounds.southwest.lng}
  //     }))
  
  // console.log(mrgBounds)

  // }
  
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(successfull)
  // })

  const onSearch = useCallback(
    _.debounce((requestParams) => {
      const { mapCoordinates, ...restParams } = requestParams;

      const {continent} = get_url_params()
      setCont(continent)
      
      const filter = { ...mapCoordinates };
      
      const formattedDates = {
        checkinDate: dateFormatter.toApi(restParams.checkinDate),
        checkoutDate: dateFormatter.toApi(restParams.checkoutDate),
      };

      loadPropertiesList({ ...restParams, ...formattedDates }, filter);
    }, DEBOUNCE_MAP_TIME),
    [loadPropertiesList],
  );

  useEffect(
    function initParamsFromUrl() {
      if (searchParams) {
        return;
      }

      const parsedParams = getBookingParamsFromUrl();
      // console.log(parsedParams)
      const activeCurrency = parsedParams.currency || DEFAULT_CURRENCY;
    
      const newSearchParams = { ...parsedParams, currency: activeCurrency };
      
      setSearchParams(newSearchParams);
      onSearch(newSearchParams);
    },
    [searchParams, onSearch],
  );

  const handleCoordinatesChange = (marginBounds) => {

    // console.log('margin: ', marginBounds)
    // // console.log(bounds)
    // console.log(searchParams.mapCoordinates)
    
    const isSameLocation = _.isEqual(marginBounds, searchParams.mapCoordinates);

    const newSearchParams = { ...searchParams, mapCoordinates: marginBounds };
    const mapCoordinates = encodeMapParams(marginBounds);
    // console.log(newSearchParams)
    if (isSameLocation) {
      return;
    }
    // console.log('change')
    setSearchParams(newSearchParams);
    setUrlParams({ mapCoordinates }, history);

    onSearch(newSearchParams);
  };

  const onClearSelectProperty = useCallback(() => {
    setSelectProperty(null);
  }, [setSelectProperty]);

  const handleDatesChange = useCallback(
    ({ startDate, endDate }) => {
      const newSearchParams = {
        ...searchParams,
        checkinDate: startDate,
        checkoutDate: endDate,
      };

      setSearchParams(newSearchParams);
    

      if (startDate && endDate) {
        const formattedDates = {
          checkinDate: dateFormatter.toApi(startDate),
          checkoutDate: dateFormatter.toApi(endDate),
        };

        setUrlParams(formattedDates, history);
      }

      if (endDate) {
        onSearch(newSearchParams);
      }
    },
    [searchParams, history, onSearch],
  );

  const handleChangeOccupancy = useCallback(
    (value, name) => {
      const newSearchParams = { ...searchParams, [name]: value };

      setUrlParams({ [name]: value }, history);
      setSearchParams(newSearchParams);
      onSearch(newSearchParams);
    },
    [searchParams, onSearch, history],
  );

  const handleCurrencyChange = useCallback(
    (currency) => {
      const newSearchParams = { ...searchParams, currency };
      setUrlParams({ currency }, history);
      setSearchParams(newSearchParams);
      onSearch(newSearchParams);
    },
    [searchParams, onSearch, history],
  );

  const handlePropertyHighlight = useCallback(
    (item) => {
      setHighlightedProperties({ ...highlightedProperties, [item.id]: true });
    },
    [highlightedProperties],
  );

  const handlePropertyShadow = useCallback(
    (item) => {
      setHighlightedProperties({ ...highlightedProperties, [item.id]: false });
    },
    [highlightedProperties],
  );

  if (!searchParams) {
    return null;
  }

  if (!featureFlags.searchPageIsActive) {
    return <Redirect to={routes.homePage} />;
  }

  return (
    <div>
      <HeaderSearch
        searchParams={searchParams}
        handleDatesChange={handleDatesChange}
        handleCurrencyChange={handleCurrencyChange}
        handleChangeOccupancy={handleChangeOccupancy}
      />
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.left}`}> 
          <PropertiesList 
            loading={isLoading}
            currency={searchParams.currency}
            properties={propertiesData}
            onSelectProperty={setSelectProperty}
            highlightedProperties={highlightedProperties}
            onPropertyMouseOver={handlePropertyHighlight}
            onPropertyMouseOut={handlePropertyShadow}
          />
        </div>
        <div className={`${styles.right}`}>
          {selectProperty && (
            <PropertyPreview
            currency={searchParams.currency}
            property={selectProperty}
            onClearSelectProperty={onClearSelectProperty}
            />
            )}
          
          <PropertiesSearchMap
            defaultBounds={searchParams.mapCoordinates}
            properties={propertiesData}
            onChangeCallback={handleCoordinatesChange}
            onSelectProperty={setSelectProperty}
            highlightedProperties={highlightedProperties}
            onMarkerMouseOver={handlePropertyHighlight}
            onMarkerMouseOut={handlePropertyShadow}
          />
        </div>
      </div>
      
      <Bottom/>

      {/* <FooterLinkContainer>
        <GetChannelAd />
      </FooterLinkContainer>
      <FooterLinkContainer>
        <PolicyLink /> 
      </FooterLinkContainer> */}
    </div>
  );
}
