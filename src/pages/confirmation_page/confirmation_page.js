import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Footer from "components/footer";
import Header from "components/header";
import SectionWrapper from "components/layout/section_wrapper";
import Loading from "components/loading";
import Navigation from "components/navigation";
import calculateSummaryParams from "utils/calculate_summary_params";
import Booking from "components/booking_detail";
// import Dates from "components/booking_summary/dates/dates";

import {
  AppActionsContext,
  BookingActionsContext,
  BookingDataContext,
  PaymentFormDataContext,
} from "containers/data_context";

import NewBookinLink from "./new_booking_link";
import ThankPanel from "./thank_panel";

export default function ConfirmationPage() {
  const [total, setTotal] = useState(0);

  const { value } = useContext(PaymentFormDataContext);
  const { channelId, property, params, roomsInfo } = useContext(BookingDataContext);
  const { data: roomsData } = roomsInfo;
  const { ratesOccupancyPerRoom } = params;
  // console.log('params: ', params)
  // console.log('currency: ', currency)
  const bookingActions = useContext(BookingActionsContext);

  const { init } = useContext(AppActionsContext);
  const { bookingId } = useParams();
  const { data: propertyData, isLoading } = property;
  const isPropertyPresent = propertyData && !isLoading;
  const email = value?.customer?.mail;

  useEffect(
    function initApp() {
      const savedBookingParams = bookingActions.getDataFromStorage();

      init(bookingActions, savedBookingParams);
    },
    [bookingActions, init],
  );

  useEffect(
    function setSummaryParams() {
      const summaryParams = calculateSummaryParams(roomsData, ratesOccupancyPerRoom);

      if (!summaryParams) {
        return;
      }

      setTotal(summaryParams.total);
      // setSelectedRatesByRoom(summaryParams.selectedRatesByRoom);
    },
    [roomsData, ratesOccupancyPerRoom],
  );

  if (!isPropertyPresent) {
    return <Loading />;
  }


  const { checkinDate, checkoutDate} = params;
  let checkIn,checkOut
  var options = {
        year: "numeric",
        month: "short",
        day: "numeric" };
  if(checkinDate) {
    checkIn = new Date(checkinDate).toLocaleDateString("en-US", options)
    checkOut = new Date(checkoutDate).toLocaleDateString("en-US", options)
  }

  const time = new Date()
  const date = `${new Date().toLocaleDateString('en-US', options)} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` 


  return (
    <div>
      <Header property={propertyData} />
      <SectionWrapper theme="light">
        <Col xs="12">
          <Navigation />
        </Col>
        <Col xs="12">
          <ThankPanel bookingId={bookingId} email={email} />
          <Booking booking={date} checkIn={checkIn} checkOut={checkOut} total={total} status='Confirm' currency={params.currency}/>
          <NewBookinLink channelId={channelId} />
        </Col>
      </SectionWrapper>
      <Footer property={propertyData} />
    </div>
  );
}
