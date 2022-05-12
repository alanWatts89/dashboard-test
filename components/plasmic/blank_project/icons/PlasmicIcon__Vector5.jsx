// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 26"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6 1a1 1 0 00-2 0v11c0 .033.002.066.005.099a5.002 5.002 0 000 9.802A1.013 1.013 0 004 22v3a1 1 0 002 0v-3c0-.033-.002-.066-.005-.099a5.002 5.002 0 000-9.802C5.998 12.066 6 12.033 6 12V1zm12 0a1 1 0 00-2 0v3c0 .033.002.066.005.099a5.002 5.002 0 000 9.802A1.011 1.011 0 0016 14v11a1 1 0 002 0V14c0-.033-.002-.066-.005-.099a5.002 5.002 0 000-9.802C17.998 4.066 18 4.033 18 4V1zM5 14a3 3 0 100 6 3 3 0 000-6zm9-5a3 3 0 116 0 3 3 0 01-6 0z"
        }
        fill={"#000"}
        fillOpacity={".45"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
