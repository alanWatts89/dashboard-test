// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group32Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"7.5"} cy={"7.5"} r={"3.5"} fill={"#1ED900"}></circle>

      <circle cx={"7.5"} cy={"7.5"} r={"7"} stroke={"#1ED900"}></circle>
    </svg>
  );
}

export default Group32Icon;
/* prettier-ignore-end */
