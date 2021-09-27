import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import Footer from 'components/home_footer'
// import Middle from "components/Cards";
import Slider from 'components/slider/slider'
import MainSearch from "components/main_search";

import { AppDataContext } from "containers/data_context";

import EmptyIcon from "static/empty-property.svg";
import styles from "./home_page.module.css";
import Nabar from "components/Nabar";

export default function HomePage() {
  const { t } = useTranslation();
  const { featureFlags } = useContext(AppDataContext);
  
  if (!featureFlags.searchPageIsActive) {
    return (
      <div className={styles.emptyWrapper}>
        <img src={EmptyIcon} alt={t("properties:unActiveSearchPage")} />
      </div>
    );
  }
  return (
    <>

      <Nabar />
    <div className='hero-banner magic-ball home'>
      <div className='main-banner'>
        <div>
          <Slider/>
          <MainSearch />
          
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}
