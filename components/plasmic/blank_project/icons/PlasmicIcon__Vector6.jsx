// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 30"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.393.08a1 1 0 01.593 1.084L12.18 12H21a1 1 0 01.8 1.6l-12 16a1 1 0 01-1.786-.764L9.82 18H1a1 1 0 01-.8-1.6l12-16a1 1 0 011.193-.32zM3 16h8a1 1 0 01.986 1.164l-1.325 7.955L19 14h-8a1 1 0 01-.986-1.164l1.325-7.955L3 16z"
        }
        fill={"#000"}
        fillOpacity={".45"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
