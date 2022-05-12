// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.826.767a.767.767 0 00-1.535 0v6.524H.767a.767.767 0 000 1.535h6.524v6.523a.768.768 0 001.535 0V8.826h6.523a.768.768 0 000-1.535H8.826V.767z"
        }
        fill={"#686868"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
