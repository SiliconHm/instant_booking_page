import React, { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import Button from "components/buttons/button";

import routes from "routing/routes";
import buildPath from "utils/build_path";

import Dropdown from "components/dropdown";
import CurrencySelectControlled from "components/inputs/currency_select_controlled";
import LocaleSelect from "components/inputs/locale_select";
import RangePicker from "components/rangepicker";
import OccupancySettingsForm from "components/search_section/occupancy_settings/occupancy_settings_form";

import styles from "./header_search.module.css";
import AutoComplete from 'react-google-autocomplete'
import get_url_params from "utils/get_url_params";
import set_url_params from "utils/set_url_params";


export default function HeaderSearch({
  searchParams,
  handleDatesChange,
  handleChangeOccupancy,
  handleCurrencyChange,
}) {
  const { t } = useTranslation();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false); 
  const [rangePickerVisible, setRangePickerVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState({latitude: 0, longitude: 0})
  const [click, setClick] = useState(false)
  const [mapCoordinate, setMapCoordinates] = useState({lte1: '', lte2: '', gte1: '', gte2: ''})
  const [newParams, setNewParams] = useState(null)

  const handleToggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onCloseCallback = useCallback(() => {
    setRangePickerVisible(false);
  }, []);

  const getDropdownTitle = () => {
    const title = `${searchParams.adults} ${t("hotel_page:adults")} ·
    ${searchParams.children} ${t("hotel_page:children")}`;

    return title;
  };

  const dropdownTitle = getDropdownTitle();
  const rangePickerClassName = classNames(styles.rangePicker, {
    [`${styles.rangePicker__error}`]: rangePickerVisible,
  });

  const reverseGeocode = async (latitude, longitude) => {
    
    const Data =  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`)
    const res = await Data.json() 
    const addressArray = res.results[0].address_components
    const array = res.results;
    let address;
    for(let i = 0; i < array.length; i++) {
      if(array[i].types[0] === 'country') {
        address = array[i].geometry.bounds;
        break;
      }
    }

    let state;

      for( let i = 0; i < addressArray.length; i++ ) {
        if ( addressArray[ i ].types[0] === 'country' ) {
          state = addressArray[ i ].long_name;

          return {state, address};
        }
      }
  }

  const onPlaceSelected = (place) => {
    const {geometry} = place;

    setLocation((prev) => ({
      ...prev,
      latitude: geometry.location.lat(),
      longitude: geometry.location.lng()
    }))
  }

  const handleCoordinates = () => {
    if(newParams)
      set_url_params(newParams, history)

    const searchPagePath = buildPath(history.location.search, routes.searchPage);

      window.location.reload()

      return history.push(searchPagePath);
  }

  
  useEffect(()=>{
    const func = async (p) => {
      const {latitude, longitude} = p.coords;

      let loc
      if(location.latitude !== 0 && location.longitude !== 0) {
        loc  = await reverseGeocode(location.latitude, location.longitude)
      }
      else  
        loc  = await reverseGeocode(latitude, longitude)
      
      setMapCoordinates(prev => ({
        ...prev,
        lte1: loc.address.northeast.lat,
        lte2: loc.address.southwest.lat,
        gte1: loc.address.northeast.lng,
        gte2: loc.address.southwest.lng
      }))
    }

    const mapC = `${mapCoordinate.lte1},${mapCoordinate.lte2},${mapCoordinate.gte1},${mapCoordinate.gte2}`

    const param = get_url_params()
    setNewParams(param)

    setNewParams((prev) => ({
      ...prev,
      mapCoordinates: mapC
    }))

    navigator.geolocation.getCurrentPosition(func)
  },[location, mapCoordinate])

  const onClick = () => {
    setClick(!click)
  }

  const clickHandle = () => {
    setShow(!show)
  }
//  apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY} 
  return (
    <>
    <div className={styles.wrapper}>
      <p className={styles.title}>{t("properties:header")}</p>
      <div className={styles.form_wrapper}>
        <div className={`${styles.search_form} animated zoomIn`} >
            <div id="front-search-form" method="post" action="http://memberbutton.com/search" autoComplete='off'>
              <AutoComplete className={`form-control m-0`} types={['(region)']} placeholder='Enter destination...' onPlaceSelected={onPlaceSelected}/>
            </div>
            <div className={`front-search border-right-0 d-sm-block `}>
              <Button className='btn vbtn-default btn-sm btn-block p-0 text-12' onClick={handleCoordinates}>
                <i className='fas fa-search'></i>  
              </Button>
            </div>
        </div>
      </div>
      <div className={styles.inner}>

          <RangePicker
            checkinDatePlaceholder={t("hotel_page:checkin_placeholder")}
            checkoutDatePlaceholder={t("hotel_page:checkout_placeholder")}
            checkinDate={searchParams.checkinDate}
            checkoutDate={searchParams.checkoutDate}
            name="search_dates"
            className={rangePickerClassName}
            onDatesChange={handleDatesChange}
            isVisible={rangePickerVisible}
            closeCallback={onCloseCallback}
            />

          <Dropdown
            show={isOpen}
            onToggle={handleToggleDropdown}
            title={dropdownTitle}
            className={styles.occupancyDropDown}
            layout="vertical"
            >
              <OccupancySettingsForm
              bookingParams={searchParams}
              onClose={handleToggleDropdown}
              onChange={handleChangeOccupancy}
              />
          </Dropdown>

        <CurrencySelectControlled value={searchParams.currency} onChange={handleCurrencyChange}/>
        <LocaleSelect />
      </div>

      <div className={styles.drop}>
        <div className={`dropdown sv_user_login ${click ? 'show':''} pt-2 mt-0`} onClick={onClick}>
          <button className="dropdown-toggle" type="button" data-toggle="dropdown">
              <i className="fa fa-bars" aria-hidden={click}></i>
              <img src="http://app.memberbutton.com/public/images/profile.jpg" className="head_avatar" alt=""/>
          </button>
          
          <ul className={`dropdown-menu ${click ? 'show':''}`}>
              <li>
                  <a  aria-label="" data-toggle="modal" className={styles.text_color} data-target="#registermodel"  href="https://extranet.memberbutton.com/sign-up">  
                      Add Property
                  </a>
              </li>
              <li>
                  <a aria-label="" data-toggle="modal" className={styles.text_color} data-target="#loginmodel"  href="https://extranet.memberbutton.com/">
                      Extranet Login
                  </a>
              </li>                                        
                  <hr/>
              <li><a className={styles.text_color} href="http://app.memberbutton.com/help">Help</a></li>
          </ul>
      </div>
      </div>
    </div>
    <div className={`${styles.mob_ver} ${styles.drop}`}>
      <div onClick={clickHandle} className={styles.filter}>
        <h6 style={{color:'#4f02a4'}}> Filter <i className="fas fa-sort-amount-down-alt" ></i> </h6>
      </div>
      {show && 
      <div className={styles.searchSection}>
        <RangePicker
              checkinDatePlaceholder={t("hotel_page:checkin_placeholder")}
              checkoutDatePlaceholder={t("hotel_page:checkout_placeholder")}
              checkinDate={searchParams.checkinDate}
              checkoutDate={searchParams.checkoutDate}
              name="search_dates"
              className={rangePickerClassName}
              onDatesChange={handleDatesChange}
              isVisible={rangePickerVisible}
              closeCallback={onCloseCallback}
              />

          <Dropdown
            show={isOpen}
            onToggle={handleToggleDropdown}
            title={dropdownTitle}
            className={styles.occupancyDropDown}
            layout="vertical"
            >
              <OccupancySettingsForm
              bookingParams={searchParams}
              onClose={handleToggleDropdown}
              onChange={handleChangeOccupancy}
              />
          </Dropdown>
      </div>
      }
    </div>
    </>
  );
}
