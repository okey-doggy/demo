import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Indicator(color?: string) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="5"
        viewBox="0 0 5 5"
        fill="none"
      >
        <circle cx="2.5" cy="2.5" r="2.5" fill={color ?? "#DBDBDB"} />
      </svg>
    </>
  );
}

Indicator.propTypes = {};

export default Indicator;
