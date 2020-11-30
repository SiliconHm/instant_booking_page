import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import currencies from 'world-currencies';

import Select from 'components/inputs/select';

import { BookingActionsContext, BookingDataContext } from 'containers/data_context';

import setUrlParams from 'utils/set_url_params';

const CURRENCY_RATE_BY_CODE = {
  USD: 10,
  EUR: 9,
  JPY: 8,
  GBP: 7,
  AUD: 6,
  CAD: 5,
  CHF: 4,
  CNH: 3,
  HKD: 2,
  NZD: 1,
  default: 0,
};

export default function CurrencySelect() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const history = useHistory();
  const { params, property } = useContext(BookingDataContext);
  const { setParams } = useContext(BookingActionsContext);
  const { data: propertyData } = property;
  const currencySign = currencies[params.currency]?.units.major.symbol || '';
  const selectLabel = `${currencySign} (${params.currency})`;

  const handleCurrencyChange = useCallback((currency) => {
    setUrlParams({ currency }, history);
    setParams({ ...params, currency });
  }, [history, setParams, params]);

  useEffect(function handlePropertyLoad() {
    if (params.currency) {
      return;
    }

    const { currency } = propertyData.hotelPolicy;
    handleCurrencyChange(currency);
  }, [propertyData, handleCurrencyChange, params.currency]);

  useEffect(function initSelectorState() {
    const options = Object.values(currencies)
      .map(({ name, iso }) => ({
        key: iso.code,
        value: `${name} (${iso.code})`,
      }))
      .sort((a, b) => {
        const aPriorityByCode = CURRENCY_RATE_BY_CODE[a.key] ?? CURRENCY_RATE_BY_CODE.default;
        const bPriorityByCode = CURRENCY_RATE_BY_CODE[b.key] ?? CURRENCY_RATE_BY_CODE.default;

        const isPriorityEqual = aPriorityByCode === bPriorityByCode;

        return isPriorityEqual
          ? a.value.localeCompare(b.value)
          : bPriorityByCode - aPriorityByCode;
      });

    setCurrencyOptions(options);
  }, []);

  return (
    <Select
      withSearch
      label={selectLabel}
      value={params.currency}
      options={currencyOptions}
      onChange={handleCurrencyChange}
    />
  );
}