import { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion({ title, content }: { title: string; content: string }) {
  const [setenable, setenableState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const contentRef = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setenableState(setenable === "" ? "enable" : "");
    setHeightState(
      setenable === "enable" ? "0px" : `${contentRef.current?.scrollHeight}px`
    );
    setRotateState(
      setenable === "enable" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setenable}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
