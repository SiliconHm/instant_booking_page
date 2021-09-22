import React from "react";
// import { Link, useRouteMatch } from "react-router-dom";

// import CurrencySelect from "components/inputs/currency_select";
// import LocaleSelect from "components/inputs/locale_select";

// import routes from "routing/routes";
import Navbar from "components/Nabar";

// import mLogo from 'static/member_favicon150x150.png'
// import mName from 'static/member_logo260x80.png'

// import HotelLogo from "./hotel_logo";
// import HotelTitle from "./hotel_title";
// import Form from "./Form/Form";

// import styles from "./header.module.css";
// import { style } from "@mui/system";

export default function Header({ property = {} }) {
  // const matchHotelPage = useRouteMatch({
  //   path: routes.hotelPage,
  //   strict: true,
  // });

  // const matchNotFoundPage = useRouteMatch({
  //   path: routes.default,
  //   strict: true,
  // });

  // const isCurrencySelectShown = matchHotelPage?.isExact && !matchNotFoundPage;
  // const { title, logo, hideLogo, hideTitle } = property;
  
  return (
      <div>
        <Navbar/>
      </div>
    )
  }
  