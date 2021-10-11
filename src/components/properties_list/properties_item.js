import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";

import routes from "routing/routes";

import buildPath from "utils/build_path";

import BestOffer from "./best_offer";

import EmptyIcon from "static/empty-property.svg";
import styles from "./properties.module.css";
import yellow from "utils/Lists/yellow_list";

export default function PropertiesItem(props) {
  const { property, currency, isHighlighted, onSelectProperty, onMouseOver, onMouseOut } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const [show, setShow] = useState(true)

  const { description, photos, title, id, bestOffer } = property;
  
  useEffect(() => {
    for (let index  = 0; index < yellow.length; index++) {
      if(id === yellow[index])
        setShow(false) 
    }

  }, [id])

  const handleMouseOver = () => {
    onMouseOver(property);
  };

  const handleMouseOut = () => {
    onMouseOut(property);
  };

  const handleSelectProperty = () => {
    onSelectProperty(property);
  };

  const selectRoomPath = show ? buildPath(history.location.search, routes.hotelPage, { channelId: id }) : '#';

  const photo = useMemo(() => {
    if (photos?.length > 0) {
      return <div className={styles.image} style={{ backgroundImage: `url(${photos[0].url})` }} />;
    }

    return (
      <div className={styles.emptyImage}>
        <img src={EmptyIcon} alt={title} />
      </div>
    );
  }, [photos, title]);

  const itemClassName = classNames(styles.item, isHighlighted && styles.itemHighlighted);

  return (
    <div
      className={itemClassName}
      onClick={handleSelectProperty}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
    >
      <div className={styles.overlay}>
        <div className={styles.previewBtnWrapper}>
          <Button className={styles.previewButton}>{t("properties:preview")}</Button>
        </div>
      </div>
 
      <div>
        <div className={styles.imageWrapper}>{photo}</div>

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description || t("properties:no_info")}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <BestOffer amount={bestOffer} currency={currency} />
        <Link to={selectRoomPath} className={styles.seeMoreLink} style={show ? {} : { pointerEvents: 'none' }}>
          {show ? t("properties:book_now") : 'coming soon...'}
        </Link>
      </div>
    </div>
  );
}
