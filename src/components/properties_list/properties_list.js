import React from "react";
import { Spinner } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
import classNames from "classnames";

import PropertiesItem from "./properties_item";

import styles from "./properties.module.css";

export default function PropertiesList(props) {
  const {
    properties,
    loading,
    currency,
    highlightedProperties,
    onSelectProperty,
    onPropertyMouseOver,
    onPropertyMouseOut,
  } = props;
  // const { t } = useTranslation();
  const isPropertiesPresent = properties && !loading;

  const listClassName = classNames(styles.list, {
    [`${styles.listGrid}`]: isPropertiesPresent && properties.length > 0,
  });
 
  const renderContent = () => { 
    if (!isPropertiesPresent) {
      return (
        <div className={styles.spinner}>
          <Spinner animation="border" size="xl" />
        </div>
      );
    }

    if (properties && properties.length > 0) {
      return properties.map((item) => {
        const isHighlighted = highlightedProperties[item.id];

        return (
          <PropertiesItem
            key={item.id}
            property={item}
            currency={currency}
            isHighlighted={isHighlighted} 
            onSelectProperty={onSelectProperty}
            onMouseOver={onPropertyMouseOver}
            onMouseOut={onPropertyMouseOut}
          /> 
        );
      });
    }

    return (
      <div className={styles.emptyWrapper}>
        <p className={styles.empty}>
          {/* {t("properties:no_search_results")} */}
 
          <h4 className="text-16 font-weight-500">
              Zoom-Out Map To See More
            <br/>
              Find properties by:
          </h4>
          <ul className={styles.search_no_res_list}>
            <li>1. Zoom out on the map</li>
            <li>2. Change your filters or dates</li>
            <li>3. Search for a specific city, address</li></ul>
        </p>
      </div>
    );
  };

  return (
    <div className={`${styles.wrapper}`}> 
      <div className={`${listClassName}`}>{renderContent()}</div>
    </div>
  );
}
