import { matchPath } from 'react-router-dom';
import ApiActions from 'api_actions';

export const SET_CHANNEL_ID = 'SET_CHANNEL_ID';
export const SET_PROPERTY_LOADING = 'SET_PROPERTY_LOADING';
export const SET_PROPERTY_DATA = 'SET_PROPERTY_DATA';
export const SET_ROOMS_LOADING = 'SET_ROOMS_LOADING';
export const SET_ROOMS_DATA = 'SET_ROOMS_DATA';
export const SET_CLOSED_DATES_LOADING = 'SET_CLOSED_DATES_LOADING';
export const SET_CLOSED_DATES_DATA = 'SET_CLOSED_DATES_DATA';
export const SET_PARAMS = 'SET_PARAMS';
export const SET_ROOMS_REQUEST_PARAMS = 'SET_ROOMS_REQUEST_PARAMS';
export const RESET_PARAMS = 'RESET_PARAMS';

const setChannelId = (dispatch, payload) => {
  return dispatch({ type: SET_CHANNEL_ID, payload });
};

const setPropertyLoading = (dispatch) => {
  return dispatch({ type: SET_PROPERTY_LOADING });
};

const setPropertyData = (dispatch, payload) => {
  return dispatch({ type: SET_PROPERTY_DATA, payload });
};

const setRoomsLoading = (dispatch) => {
  return dispatch({ type: SET_ROOMS_LOADING });
};

const setRoomsData = (dispatch, payload) => {
  return dispatch({ type: SET_ROOMS_DATA, payload });
};

const setClosedDatesLoading = (dispatch) => {
  return dispatch({ type: SET_CLOSED_DATES_LOADING });
};

const setClosedDatesData = (dispatch, payload) => {
  return dispatch({ type: SET_CLOSED_DATES_DATA, payload });
};

const setParams = (dispatch, payload) => {
  return dispatch({ type: SET_PARAMS, payload });
};

const setRoomsRequestParams = (dispatch, payload) => {
  return dispatch({ type: SET_ROOMS_REQUEST_PARAMS, payload });
};

const resetParams = (dispatch) => {
  return dispatch({ type: RESET_PARAMS });
};

const getChannelId = (location) => {
  const basePath = process.env.REACT_APP_BASE_PATH;
  // TODO - looks kinda lame, make more reliable
  const matchedPath = matchPath(location.pathname, { path: `${basePath}/:channelId` });

  if (!matchedPath) {
    return null;
  }

  return matchedPath.params.channelId;
};

const loadProperty = async (dispatch, channelId) => {
  if (!channelId) {
    return;
  }

  setPropertyLoading(dispatch);

  const data = await ApiActions.getPropertyInfo(channelId);

  setPropertyData(dispatch, data);
};

const loadRoomsInfo = async (dispatch, channelId, params) => {
  if (!channelId) {
    return;
  }

  setRoomsLoading(dispatch);

  setRoomsRequestParams(dispatch, params);
  const data = await ApiActions.getRoomsInfo(channelId, params);

  setRoomsData(dispatch, data, params);
};

const loadClosedDates = async (dispatch, channelId) => {
  if (!channelId) {
    return;
  }

  setClosedDatesLoading(dispatch);

  const data = await ApiActions.getClosedDates(channelId);

  setClosedDatesData(dispatch, data);
};

const setParamsAndLoadRoomsInfo = (dispatch, channelId, bookingParams) => {
  setParams(dispatch, bookingParams);

  loadRoomsInfo(dispatch, channelId, bookingParams);
};

const mergeBookingParams = (channelId, bookingQueryParams, savedBookingData) => {
  if (!savedBookingData || channelId !== savedBookingData.channelId) {
    return bookingQueryParams;
  }

  const { params } = savedBookingData;

  return { ...params, ...bookingQueryParams };
};

const initBookingData = async (dispatch, location, bookingQueryParams, savedBookingData) => {
  const channelId = getChannelId(location);

  if (!channelId) {
    return;
  }

  const bookingParams = mergeBookingParams(channelId, bookingQueryParams, savedBookingData);

  setChannelId(dispatch, channelId);
  loadProperty(dispatch, channelId);
  loadClosedDates(dispatch, channelId);
  setParamsAndLoadRoomsInfo(dispatch, channelId, bookingParams);
};

export const actions = {
  loadProperty,
  loadRoomsInfo,
  loadClosedDates,
  setParams,
  resetParams,
  setParamsAndLoadRoomsInfo,
  initBookingData,
};