import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Modal } from "react-bootstrap";

import Dropdown from "components/dropdown";
import CurrencySelectControlled from "components/inputs/currency_select_controlled";
import LocaleSelect from "components/inputs/locale_select";
import RangePicker from "components/rangepicker";
import OccupancySettingsForm from "components/search_section/occupancy_settings/occupancy_settings_form";

import styles from "./header_search.module.css";

export default function HeaderSearch({
  searchParams,
  handleDatesChange,
  handleChangeOccupancy,
  handleCurrencyChange,
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); 
  const [rangePickerVisible, setRangePickerVisible] = useState(false);

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

  const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t("properties:header")}</p>
      <div className={styles.inner}>

        <div className={styles.toShow}>
          <p className={`${styles.title} mt-3`}>{t("global:search")}</p>
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

      <button onClick={() => setShow(true)} className={styles.buttonStyle}>
        <i className='fas fa-search'></i>
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <p className={`${styles.title} mt-3`}>{t("global:search")}</p>
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
          </p>
        </Modal.Body>
      </Modal>
        <CurrencySelectControlled value={searchParams.currency} onChange={handleCurrencyChange}/>
        <LocaleSelect />
      </div>
    </div>
  );
}
