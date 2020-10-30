import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Apply from "./apply";
import Link from "next/Link";

import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import EnglishText from "../components/EnglishText";
import SwedishText from "../components/SwedishText";
import ContactForm from "../components/ContactForm";

enum PAGE {
  APPLY,
  CONTACT,
  MAIN,
}

export default function Home() {
  const [activePage, setActivePage] = useState(PAGE.MAIN);
  const [clear, setClear] = useState("");
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  const { lang } = router.query;

  const ANIMATION_CLASSES = {
    slideIn: "slide-in",
    slideOut: "slide-out",
  };

  const [animationDiv, setAnimationDiv] = useState("");
  const [animationBorder, setAnimationBorder] = useState("");
  // this will run everytime isHidden changes

  const onPageClick = (page) => {
    setAnimate(true);
    if (page !== PAGE.MAIN) {
      setAnimationDiv("slide-out-button");
      setAnimationBorder("slide-out-border");
    } else {
      setAnimationDiv("slide-in-button");
      setAnimationBorder("slide-in-border");
    }
    setActivePage(page);
  };

  return (
    <>
      <Metadata />
      <div className="sr">
        <Apply
          animate={animate}
          open={activePage === PAGE.APPLY}
          onChange={() => onPageClick(PAGE.MAIN)}
        />
        <ContactForm
          animate={animate}
          open={activePage === PAGE.CONTACT}
          onChange={() => onPageClick(PAGE.MAIN)}
        />

        <div>
          <div>
            <div className="sr__header z-layer__header">
              <div className="sr__header-bg"></div>

              <div className="sr__header-block" id="headerMarker">
                <a href={"/" + lang} className="sr__header-logo">
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
              <Link href={"/" + (lang === "se" ? "en" : "se")}>
                <a>
                  <div className="sr__button-bg">
                    <div className="sr__button-block">
                      {lang === "se" ? "English" : "Svenska"}
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
                  onClick={() => onPageClick(PAGE.APPLY)}
                  id="applyButton"
                  className={`sr__button-bg apply  ${animationBorder}`}
                >
                  <div
                    className="sr__button-block apply"
                    style={{ letterSpacing: "0.01em" }}
                  >
                    {lang === "se" ? "Ansök" : "Apply"}
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
                  onClick={() => onPageClick(PAGE.CONTACT)}
                  id="applyButton"
                  className={`sr__button-bg contact  ${animationBorder}`}
                >
                  <div
                    className="sr__button-block contact"
                    style={{ letterSpacing: "0.01em" }}
                  >
                    {lang === "se" ? "Kontakt" : "Contact"}
                  </div>
                </div>
              </a>
            </div>
          </div>
          {lang === "en" ? <EnglishText /> : <SwedishText />}
          <Footer />
        </div>
      </div>
    </>
  );
}
