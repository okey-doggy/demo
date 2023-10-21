import React from "react";

type TIndicator = {
  color?: string;
};
function Indicator({ color }: TIndicator) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill={color ?? "#DBDBDB"} />
    </svg>
  );
}

Indicator.propTypes = {};

export default Indicator;
