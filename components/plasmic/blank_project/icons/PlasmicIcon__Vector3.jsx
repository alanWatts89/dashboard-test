// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15 0a1 1 0 011 1v2.614C21.384 4.187 25.633 8.56 26.014 14H29a1 1 0 010 2h-3.022A11.25 11.25 0 0116 25.978V29a1 1 0 01-2 0v-2.986C8.56 25.634 4.187 21.384 3.614 16H1a1 1 0 110-2h2.578C3.968 8.423 8.423 3.968 14 3.578V1a1 1 0 011-1zm1 24.064V19a1 1 0 10-2 0v5.108A9.35 9.35 0 015.527 16H11a1 1 0 100-2H5.483A9.348 9.348 0 0114 5.483V11a1 1 0 102 0V5.527A9.35 9.35 0 0124.108 14H19a1 1 0 100 2h5.064A9.35 9.35 0 0116 24.064z"
        }
        fill={"#000"}
        fillOpacity={".45"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
