// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 26"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.912.346a1.205 1.205 0 011.69 0l13.552 13.331a1.205 1.205 0 01-1.69 1.718L25.8 13.757v11.24c0 .553-.45 1.003-1.004 1.003H4.718c-.554 0-1.004-.45-1.004-1.004v-11.24l-1.664 1.64a1.205 1.205 0 11-1.69-1.718L13.913.346zm.845 2.548l9.034 8.888v12.21h-4.015v-7.027c0-.554-.45-1.004-1.004-1.004H12.75c-.554 0-1.004.45-1.004 1.004v7.027H5.722v-12.21l9.035-8.888zm-1.004 21.098h4.015V17.97h-4.015v6.023z"
        }
        fill={"#898988"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
