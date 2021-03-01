import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import currencies from 'world-currencies';

import Select from 'components/inputs/select';

import { BookingActionsContext, BookingDataContext } from 'containers/data_context';

import { DEFAULT_CURRENCY } from 'constants/defaults';
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
  const { setParamsAndLoadRoomsInfo } = useContext(BookingActionsContext);
  const { t } = useTranslation();
  const { data: propertyData } = property;
  const currencySign = currencies[params.currency]?.units.major.symbol || '';
  const selectLabel = `${currencySign} (${params.currency})`;

  const handleCurrencyChange = useCallback((currency) => {
    setUrlParams({ currency }, history);
    setParamsAndLoadRoomsInfo({ ...params, currency });
  }, [history, setParamsAndLoadRoomsInfo, params]);

  useEffect(function handlePropertyLoad() {
    if (params.currency || !propertyData) {
      return;
    }

    const { currency = DEFAULT_CURRENCY } = propertyData;
    handleCurrencyChange(currency);
  }, [propertyData.hotelPolicy, handleCurrencyChange, params.currency, propertyData]);

  useEffect(function initSelectorState() {
    let options = Object.values(currencies)
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

    const PopularCurrenciesSeparator = {
      Component: (
        <Select.Separator>
          {t('currency_select:popular_currencies_separator')}
        </Select.Separator>
      ),
    };

    const AvailableCurrenciesSeparator = {
      Component: (
        <Select.Separator>
          {t('currency_select:available_currencies_separator')}
        </Select.Separator>
      ),
    };

    const { default: _default, ...topRatedCurrencies } = CURRENCY_RATE_BY_CODE;

    const topCurrenciesListLength = Object.values(topRatedCurrencies).length;
    options.splice(topCurrenciesListLength - 1, 0, AvailableCurrenciesSeparator);
    options = [PopularCurrenciesSeparator, ...options];

    setCurrencyOptions(options);
  }, [t]);

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
