import React, { useCallback, useMemo, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import BestOffer from "components/properties_list/best_offer";

import routes from "routing/routes";

import buildPath from "utils/build_path";

import EmptyIcon from "static/empty-property.svg";
import BackIcon from "static/icons-arrowright.svg";
import styles from "./property_preview.module.css";
import yellow from "utils/Lists/yellow_list";

export default function PropertyPreview({ currency, property, onClearSelectProperty }) {
  const { t } = useTranslation();
  const history = useHistory();
  const [show, setShow] = useState(true)
  const { photos, title, description, address, id, bestOffer } = property;

  useEffect(() => {
    for (let index  = 0; index < yellow.length; index++) {
      if(id === yellow[index])
        setShow(false) 
    }

  }, [id])

  const onBookNow = useCallback(() => {
    const redirectPath = buildPath(history.location.search, routes.hotelPage, { channelId: id });

    history.push(redirectPath);
  }, [history, id]);

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {photo}
        <div className={styles.closeWrapper} onClick={onClearSelectProperty}>
          <img src={BackIcon} className={styles.closeIcon} alt={t("properties:back_to_map")} />
          <p className={styles.closeLabel}>{t("properties:back_to_map")}</p>
        </div>
      </div>
      <div className={styles.header}> 
        <div className={styles.headerInner}>
          <p className={styles.title}>{title}</p> 
          <p className={styles.address}>{address}</p>
        </div>
        <div className={styles.seeMoreBtnWrapper}>
          <BestOffer amount={bestOffer} currency={currency} />
          {show && <Button onClick={onBookNow}>{t("properties:book_now")}</Button> }
          {!show && <Button disabled> Coming Soon...</Button>}
        </div>
      </div> 

      <p className={styles.description}>{description || t("properties:no_info")}</p>
    </div>
  );
}
