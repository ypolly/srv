import Link from "next/Link";
import { useEffect, useState } from "react";

const menu = (props) => {
  const [closed, setClosed] = useState("");
  const [clear, setClear] = useState("");

  function closeCard() {
    setClosed("false");
  }

  const ANIMATION_CLASSES = {
    slideIn: "slide-in",
    slideOut: "slide-out",
  };

  const currentLang = props.window.substr(props.window.lastIndexOf("/") + 1);

  // set default state to use fade in and visible class
  const [animationCard, setAnimationCard] = useState("");
  const [animationDiv, setAnimationDiv] = useState("");
  const [animationBorder, setAnimationBorder] = useState("");
  // this will run everytime isHidden changes
  useEffect(() => {
    if (closed === "true") {
      // fade out then hide once animation finishes
      setAnimationCard("slide-out");
      setAnimationDiv("slide-out-button");
      setAnimationBorder("slide-out-border");
    } else if (closed === "false") {
      setAnimationCard("slide-in");
      setAnimationDiv("slide-in-button");
      setAnimationBorder("slide-in-border");
    }
  }, [closed]);
  return (
    <div>
      <div className="sr__header z-layer__header">
        <div className="sr__header-bg"></div>

        <div className="sr__header-block" id="headerMarker">
          <a href={"/" + currentLang} className="sr__header-logo">
            <object
              className="sr__header-logo_main"
              type="image/svg+xml"
              data="./images/logo-se.svg"
            ></object>
            <object
              className="sr__header-logo_sticker"
              type="image/svg+xml"
              data="./images/best-paid.svg"
            ></object>
          </a>
        </div>
      </div>

      <div
        id="languageMarker"
        className="sr__button language z-layer__language"
      >
        <Link href={"/" + currentLang}>
          <a>
            <div className="sr__button-bg">
              <div className="sr__button-block">
                {currentLang === "se" ? "English" : "Svenska"}
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div
        id="languageMarker"
        className={`sr__button apply z-layer__language ${animationDiv}`}
      >
        <a className="sr__button-open">
          <div
            onClick={() => {
              setClosed(closed === "true" ? "false" : "true");
            }}
            id="applyButton"
            className={`sr__button-bg apply  ${animationBorder}`}
          >
            <div
              className="sr__button-block apply"
              style={{ letterSpacing: "0.01em" }}
            >
              {currentLang === "se" ? "Tillämpa" : "Apply"}
            </div>
          </div>
        </a>
      </div>

      <div
        id="languageMarker"
        className={`sr__button contact  z-layer__language ${animationDiv}`}
      >
        <a className="sr__button-open">
          <div
            onClick={() => {
              setClosed(closed === "true" ? "false" : "true");
            }}
            id="applyButton"
            className={`sr__button-bg contact  ${animationBorder}`}
          >
            <div
              className="sr__button-block contact"
              style={{ letterSpacing: "0.01em" }}
            >
              {currentLang === "se" ? "Kontakt" : "Contact"}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default menu;
