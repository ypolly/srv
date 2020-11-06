import { Link } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

enum PAGE {
  APPLY,
  CONTACT,
  MAIN,
}

export const SideButtons = ({ activePage, onPageClick }) => {
  const {
    query: { lang },
  } = useRouter();

  return (
    <div className="buttonsContainer">
      <div
        id="languageMarker"
        className="sr__button language z-layer__language"
      >
        <Link href={"/" + (lang === "se" ? "en" : "se")}>
          <a>
            <div
              className={`${
                activePage !== PAGE.APPLY ? "sr__button-bg" : "sr__button-bg2"
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
      {activePage !== PAGE.APPLY && (
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
      {activePage !== PAGE.CONTACT && (
        <div
          id="languageMarker"
          className={`sr__button apply  z-layer__language `}
        >
          <a className="sr__button-open">
            <div
              onClick={() => onPageClick(PAGE.CONTACT)}
              id="applyButton"
              className={`${
                activePage !== PAGE.APPLY ? "sr__button-bg" : "sr__button-bg2"
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
      )}
      {activePage !== PAGE.MAIN && (
        <div
          id="languageMarker"
          className={`sr__button contact z-layer__language `}
        >
          <a className="sr__button-open">
            <div
              onClick={() => onPageClick(PAGE.MAIN)}
              id="applyButton"
              className={`${
                activePage !== PAGE.APPLY ? "sr__button-bg" : "sr__button-bg2"
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
  );
};
