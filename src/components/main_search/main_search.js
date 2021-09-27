import React, { useCallback, useState } from "react";
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

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng
// } from "use-places-autocomplete";
// import geocoding from "reverse-geocoding";
// import { Geocoder } from "@react-google-maps/api";

export default function MainSearch() {
  const { t } = useTranslation();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  // const [loc, setLoc] = useState(null)
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [rangePickerVisible, setRangePickerVisible] = useState(false);
  const [occupancyParams, setOccupancyParams] = useState(DEFAULT_OCCUPANCY_PARAMS);

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

      // console.log('params: ', params)

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

  return (
    <div className={styles.wrapper}>
      <div className="align-items-center text-center text-md-left svmobsearch desk-search-form container">
                      
      <div className="row mt-3">
      <div className={`col-lg-xl offset-xl-1 col-lg-10 offset-lg-1 ${styles.margin_top} ${isOpen ? `${styles.margin_scroll}` : ''}`}>

      <div className="main_formbg item animated zoomIn mob-form-bg">

      <form id="front-search-form" method="post" action="http://memberbutton.com/search" autoComplete='on'>
                <input type="hidden" name="_token" value="XzBGMDRPhmnF8K7s0qShkxCskXtgW4tVoY50Lr9n"/>
      <div className="row">  
            <PlacesAutocomplete/>
        
      <RangePicker
        checkinDatePlaceholder={t("hotel_page:checkin_placeholder")}
        checkoutDatePlaceholder={t("hotel_page:checkout_placeholder")}
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
        >

        <OccupancySettingsForm
          bookingParams={occupancyParams}
          onClose={handleToggleDropdown}
          onChange={handleChangeOccupancy}
          />
      </Dropdown>


      <div className='col-md-2 front-search mt-2 border-right-0 d-none d-sm-block'>
      <Button onClick={onSearch} className='btn vbtn-default btn-block p-3 text-16'>
        <i className='fas fa-search'></i>
      </Button>
      </div>
      <div className='col-12 d-block d-sm-none front-search mt-2'>
      <Button onClick={onSearch} className='btn vbtn-default btn-block p-3 text-16'>
        <i className='fas fa-search'></i>
         {t("main_page:search_btn")}
      </Button>
      </div>
      
      </div>
      </form>
      </div>
     </div>
      </div>
    </div>
    </div>
  );
}
