import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

import Button from "components/buttons/button";
import Dropdown from "components/dropdown";
import RangePicker from "components/rangepicker";
import OccupancySettingsForm from "components/search_section/occupancy_settings/occupancy_settings_form";

import routes from "routing/routes";

import DEFAULT_OCCUPANCY_PARAMS from "constants/default_occopancy_params";
import buildPath from "utils/build_path";
import dateFormatter from "utils/date_formatter";
import setUrlParams from "utils/set_url_params";

import styles from "./main_search.module.css"; 
import PlacesAutocomplete from "components/map_search/search_area";
import Countries from "constants/countries";
import { toLower } from "lodash";

// // import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
// import Geocode from "react-geocode";
// // import Autocomplete from 'react-google-autocomplete';
// // import { GoogleMapsAPI } from '../client-config';
// Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_KEY);
// Geocode.enableDebug();


export default function MainSearch() {
  const { t } = useTranslation();
  const history = useHistory();
  // const [Continent, setContinent] = useState()
  // const [coun, setCoun] = useState('')
  const [click, setClick] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [rangePickerVisible, setRangePickerVisible] = useState(false);
  const [occupancyParams, setOccupancyParams] = useState(DEFAULT_OCCUPANCY_PARAMS);
  // const [mrgBounds, setMrgBounds] = useState({latitude: {lte: '', gte: ''}, longitude: {lte:'', gte:''}})
  const [mapCord, setMapCord] = useState('')

  const [country, setCountry] = useState("xyz")

  useEffect(()=>{
    const func=async(p)=>{
      const {latitude, longitude} = p.coords;
      const x  = await reverseGeocode(latitude, longitude)
      setCountry(x)    
      
    }
    navigator.geolocation.getCurrentPosition(func)
  },[country])


  const reverseGeocode = async (lat, lng) => {
    const Data =  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`)
    const res = await Data.json() 
    const addressArray = res.results[0].address_components

    let state;

      for( let i = 0; i < addressArray.length; i++ ) {
        if ( addressArray[ i ].types[0] === 'country' ) {
          state = addressArray[ i ].long_name;
          return state;
        }
      }

  }

  const dt = new Date(new Date().getTime() + 48*60*60*1000)
  const today = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
  
  const dt2 = new Date(new Date().getTime() + 72*60*60*1000)
  const tomorrow = `${dt2.getFullYear()}-${dt2.getMonth()+1}-${dt2.getDate()}`

  let contin
  for (let index = 0; index < Countries.length; index++) {
    const element = Countries[index];
    if(element.country === country) {
      // console.log(element)
      contin = toLower(element.continent)
      break;
    }  
  }
  useEffect(() => {
    if(contin) {
      if(contin === 'asia')
        setMapCord('68.49533937542401%2C-26.511615409508302%2C141.04002568843708%2C7.446275688437055')
  
      else if(contin === 'europe')
        setMapCord('75.0657849248914%2C-6.255809745073449%2C74.84606400095521%2C-58.747685999044776')
    }

  }, [contin])
  
  const handleDatesChange = useCallback(({ startDate, endDate }) => {

    setCheckinDate(startDate);
    setCheckoutDate(endDate);
  }, []);
  
  const handleToggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  const handleChangeOccupancy = useCallback(
    (value, name) => {
      const params = { ...occupancyParams, [name]: value };
      setOccupancyParams(params);
    },
    [occupancyParams],
    );
    
    const getDropdownTitle = useCallback(() => {
      const title = `${occupancyParams.adults} ${t("hotel_page:adults")} ·
    ${occupancyParams.children} ${t("hotel_page:children")}`;

    return title;
  }, [t, occupancyParams]);
  
  const dropdownTitle = getDropdownTitle();

  const onSearch = () => {
    if (checkinDate && checkoutDate) {
      const formattedDates = {
        checkinDate: dateFormatter.toApi(checkinDate),
        checkoutDate: dateFormatter.toApi(checkoutDate),
      };
      
      const params = { ...formattedDates, ...occupancyParams};
      

      setUrlParams(params, history);
      const searchPagePath = buildPath(history.location.search, routes.searchPage);
      
      // console.log('main search: ', searchPagePath)

      return history.push(searchPagePath);
    }

    return setRangePickerVisible(true);
  };
  
  const rangePickerClassName = classNames(styles.rangePicker, {
    [`${styles.rangePicker__error}`]: rangePickerVisible,
  });

  const handlePopup = () => {
    if(click)
      setClick(false)
  }



  return (
    <div className={styles.wrapper} onClick={handlePopup}> 
       <div className="align-items-center text-center text-md-left svmobsearch desk-search-form container">      
        <div className="row mt-3">
          <div className={`col-lg-xl offset-xl-1 col-lg-10 offset-lg-1 ${styles.margin_top} ${isOpen ? `${styles.margin_scroll}` : ''}`}>
            <div className="main_formbg item animated zoomIn mob-form-bg" >
              <div id="front-search-form" method="post" action="http://memberbutton.com/search" autoComplete='off'>
                {/* <input type="hidden" name="_token" value="XzBGMDRPhmnF8K7s0qShkxCskXtgW4tVoY50Lr9n"/> */}
                <div className="row">  
                {/* onClick={clickHandle} */}
                {/* <Map/> */}
                <PlacesAutocomplete clicked={setClick} clicks={click} label={t("hotel_page:location")}/>
                  <RangePicker
                    checkinDatePlaceholder={t("hotel_page:checkin_placeholder")}
                    checkoutDatePlaceholder={t("hotel_page:checkout_placeholder")}
                    checkinDateLabel={t("hotel_page:checkin_label")}
                    checkoutDateLabel={t("hotel_page:checkout_label")}
                    checkinDate={checkinDate}
                    checkoutDate={checkoutDate}
                    name="search_dates" 
                    className={rangePickerClassName}
                    onDatesChange={handleDatesChange}
                    isVisible={rangePickerVisible}
                    closeCallback={() => setRangePickerVisible(false)}
                    />

                  <Dropdown 
                    show={isOpen}
                    onToggle={handleToggleDropdown} 
                    title={dropdownTitle}
                    className={styles.occupancyDropDown}
                    layout="vertical"
                    label={t("hotel_page:guests")}  
                    >

                    <OccupancySettingsForm
                      bookingParams={occupancyParams}
                      onClose={handleToggleDropdown}
                      onChange={handleChangeOccupancy}
                      />
                  </Dropdown>


                  <div className={`front-search border-right-0 d-none d-sm-block ${styles.search_control}`}>
                    <Button onClick={onSearch} className='btn vbtn-default btn-sm btn-block p-0 text-12'>
                      <i className='fas fa-search'></i>  
                    </Button>
                  </div>

                  <div className='col-12 d-block d-sm-none front-search mt-2 mb-2'>
                    <Button onClick={onSearch} className='btn vbtn-default btn-block p-3 text-12'>
                      <i className='fas fa-search'></i>
                       {t("main_page:search_btn")}
                    </Button>
                  </div>
                 </div>
              </div>
            </div>
          </div>
              {click && 
                      <div className={styles.modal_1}>
                        <section>
                          <div className={styles.modal_2}>
                            <div className={styles.modal_3}>
                              <ul role='group' className={styles.modal_4}>
                                <li className={styles.modal_5}>
                                  <span className={styles.modal_6}>Deals for Influencers</span>
                                </li>
                                {/* ${Continent} //   lat: 33.6848393, lng: 73.0487146}
// southwest: {lat: 33.6839399, lng: 73.0469899*/}
                                <div>
                                  <li tabindex="-1" id="bigsearch-query-detached-query-suggestion-0" data-index="0" data-testid="option-0" className={styles.modal_7}>
                                    <a className={styles.modal_8} href={`/search?checkinDate=${today}&checkoutDate=${tomorrow}&adults=1&children=0&continent=${contin}&mapCoordinates=${mapCord}`}>
                                      <div aria-hidden="true">
                                        <video autoplay="" crossorigin="anonymous" playsinline="" poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg" preload="auto" width="28" height="28" __idm_id__="85739521">
                                          <source src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality" type="video/mp4"/>
                                          </video>
                                      </div>
                                      <div className={styles.modal_9}>
                                        <div className={`${styles.modal_10}`}>
                                          Near Me
                                        </div>
                                      </div> 
                                      </a>
                                    <a className={styles.modal_8} href='https://app.memberbutton.com'>
                                      <div aria-hidden="true">
                                        <video autoplay="" crossorigin="anonymous" playsinline="" poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg" preload="auto" width="28" height="28" __idm_id__="85739521">
                                          <source src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality" type="video/mp4"/>
                                          </video>
                                      </div>
                                      <div className={styles.modal_9}>
                                        <div className={`${styles.modal_10}`}>
                                          Influencers
                                        </div>
                                      </div> 
                                      </a>
                                    </li>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </section>
                      </div>
                      }
        </div>
      </div> 
    </div>
  );
}
