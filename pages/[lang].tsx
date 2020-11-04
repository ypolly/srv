import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ApplyForm from "../components/ApplyForm";
import Link from "next/Link";

import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Home } from "../components/Home";

enum PAGE {
  APPLY,
  CONTACT,
  MAIN,
}

export default function () {
  const [activePage, setActivePage] = useState(PAGE.MAIN);
  const [animate, setAnimate] = useState(false);
  const {
    query: { lang },
  } = useRouter();

  const onPageClick = (nextPage) => {
    setAnimate(true);
    setActivePage(nextPage);
  };

  return (
    <>
      <Metadata />
      <div className="sr">
        <ApplyForm
          animate={animate}
          open={activePage === PAGE.APPLY}
          onChange={() => onPageClick(PAGE.MAIN)}
        />
        <ContactForm
          animate={animate}
          open={activePage === PAGE.CONTACT}
          onChange={() => onPageClick(PAGE.MAIN)}
          lang={lang}
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
                  <div
                    className={`${
                      activePage !== PAGE.APPLY
                        ? "sr__button-bg"
                        : "sr__button-bg2"
                    }`}
                  >
                    <div
                      className={`${
                        activePage !== PAGE.APPLY
                          ? "sr__button-block"
                          : "sr__button-block2"
                      }`}
                    >
                      {lang === "se" ? "English" : "Svenska"}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            {activePage === PAGE.APPLY ? (
              <div
                id="languageMarker"
                className={`sr__button apply  z-layer__language `}
              >
                <a className="sr__button-open">
                  <div
                    onClick={() => onPageClick(PAGE.CONTACT)}
                    id="applyButton"
                    className={`${
                      activePage !== PAGE.APPLY
                        ? "sr__button-bg"
                        : "sr__button-bg2"
                    } apply  `}
                  >
                    <div
                      className={`${
                        activePage !== PAGE.APPLY
                          ? "sr__button-block"
                          : "sr__button-block2"
                      } apply`}
                      style={{ letterSpacing: "0.01em" }}
                    >
                      {lang === "se" ? "Kontakt" : "Contact"}
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div
                id="languageMarker"
                className={`sr__button apply z-layer__language`}
              >
                <a className="sr__button-open">
                  <div
                    onClick={() => onPageClick(PAGE.APPLY)}
                    id="applyButton"
                    className={`sr__button-bg apply `}
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
            )}
            {activePage === PAGE.MAIN ? (
              <div
                id="languageMarker"
                className={`sr__button contact  z-layer__language `}
              >
                <a className="sr__button-open">
                  <div
                    onClick={() => onPageClick(PAGE.CONTACT)}
                    id="applyButton"
                    className={`sr__button-bg contact  `}
                  >
                    <div
                      className={`sr__button-block contact`}
                      style={{ letterSpacing: "0.01em" }}
                    >
                      {lang === "se" ? "Kontakt" : "Contact"}
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div
                id="languageMarker"
                className={`sr__button contact z-layer__language `}
              >
                <a className="sr__button-open">
                  <div
                    onClick={() => onPageClick(PAGE.MAIN)}
                    id="applyButton"
                    className={`${
                      activePage !== PAGE.APPLY
                        ? "sr__button-bg"
                        : "sr__button-bg2"
                    } contact  `}
                  >
                    <div
                      className={`${
                        activePage !== PAGE.APPLY
                          ? "sr__button-block"
                          : "sr__button-block2"
                      } contact`}
                      style={{ letterSpacing: "0.01em" }}
                    >
                      {lang === "se" ? "Hem" : "Home"}
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}
