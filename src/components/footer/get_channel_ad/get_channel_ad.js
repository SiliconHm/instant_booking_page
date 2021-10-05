import React from "react";
import { useTranslation } from "react-i18next";

import Link from "components/link";

import styles from "./get_channel_ad.module.css";

export default function GetChannelAd() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <span className={styles.text}>{t("footer:get_free_channel")}</span>
      <Link to="https://memberbutton.com" target="_blank">
        {t("footer:channex_member")} 
      </Link>
      <span> | </span>
      <Link to="https://socialhub.center/" target="_blank">
        {t("footer:channex_social")} 
      </Link>
      <span> | </span>
      <Link to="https://app.memberbutton.com/about" target="_blank">
        {t("footer:channex_about")}
      </Link>   
      <span className={styles.text}> | {t("footer:channex_rights")}</span>
    </div>
  ); 
}
