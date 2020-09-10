import React from 'react';
import { useTranslation } from 'react-i18next';

import PriceColumnTitle from 'components/rates_table/price_column_title';
import Currency from 'components/currency';
import Tooltip from "components/tooltip";

import RatePlanPriceBreakdown from './rate_plan_price_breakdown';

import styles from './rate_plan_price.module.css';

const TAX_DECIMAL_PLACES = 2;

export default function RatePlanPrice({ ratePlan, isMobile, residenceTime, currency }) {
  const { t } = useTranslation();

  const { price, taxes } = ratePlan;
    const additionalTaxesAmount = taxes
    .filter((tax) => !tax.inclusive)
    .reduce((acc, tax) => acc + Number(tax.amount), 0)
    .toFixed(TAX_DECIMAL_PLACES);
  const hasTaxes = Boolean(additionalTaxesAmount);

  return (
    <div>
      {isMobile && <PriceColumnTitle residenceTime={residenceTime} />}
      <div className={styles.ratePlanPriceContainer}>
        <div className={styles.ratePlanPrice}>
          <Currency currency={currency} amount={price} />
        </div>
        <Tooltip className={styles.ratePlanTooltip}>
          <RatePlanPriceBreakdown ratePlan={ratePlan} currency={currency} />
        </Tooltip>
      </div>
      <div className={styles.ratePlanTaxes}>
        {t('rates_table:includes_taxes')}
      </div>
    </div>
  );
}