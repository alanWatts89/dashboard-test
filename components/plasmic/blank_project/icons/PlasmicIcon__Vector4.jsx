// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 27"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.577.094a1 1 0 01.846 0l12 5.6A1 1 0 0126 6.6v13.8a1 1 0 01-.577.906l-12 5.6a1 1 0 01-.846 0l-12-5.6A1 1 0 010 20.4V6.6a1 1 0 01.577-.906l12-5.6zM2 8.112l10 4.25V24.43L2 19.763V8.112zM14 24.43l10-4.667V8.112l-10 4.25V24.43zm-1-13.817l9.544-4.056L13 2.104 3.456 6.557 13 10.613z"
        }
        fill={"#000"}
        fillOpacity={".45"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
