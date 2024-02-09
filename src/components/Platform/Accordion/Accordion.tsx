import { useState, useRef, ReactNode, CSSProperties } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion({
  title,
  content,
  className,
  activeStyle,
  passiveStyle,
  iconColor = "#777",
}: {
  title?: string;
  content?: string | ReactNode;
  className?: string;
  activeStyle?: CSSProperties;
  passiveStyle?: CSSProperties;
  iconColor?: string;
}) {
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
      <button
        className={`accordion ${setenable} ${className}`}
        style={setenable === "enable" ? activeStyle : passiveStyle}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={iconColor} />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {typeof content === "string" ? (
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <>{content}</>
        )}
      </div>
    </div>
  );
}

export default Accordion;
