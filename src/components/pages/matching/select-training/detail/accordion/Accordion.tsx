import React from "react";

interface IAccordion {
  id: number;
  title: string;
  description: string;
}

function Accordion({ ...props }: IAccordion) {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Accordion;
