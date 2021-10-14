import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import FieldError from "./field_error";

import styles from "./formal_field.module.css";

export default function FormalField(props) {
  const { name, Component, shouldUnregister, defaultValue = "", clickid} = props;
  const [isClickId, setClickId] = useState(false)
  // console.log(defaultValue === clickid)
  // console.log(Component)
  // console.log(props)
  useEffect(() => {
    if(defaultValue === clickid)
      setClickId(true)
    else
      setClickId(false)
  }, [clickid, defaultValue]) 

  return (
    <div className={styles.container} style={isClickId ? {display:'none'} : {}}>
      <Controller
        name={name}
        shouldUnregister={shouldUnregister}
        errorClass={styles.error} 
        defaultValue={defaultValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={({ field, fieldState }) => <Component {...props} {...field} {...fieldState} />}
      />
      <ErrorMessage name={name} render={FieldError} />
    </div>
  );
}
