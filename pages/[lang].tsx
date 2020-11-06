import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ApplyForm from "../components/ApplyForm";

import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Home } from "../components/Home";
import { SideButtons } from "../components/SideButtons";
import { isDesktop } from "./media";

enum PAGE {
  APPLY,
  CONTACT,
  MAIN,
}
// test if isDesktop
// if (!isDesktop) {
// }
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

  function scrollToTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Metadata />
      <div className="sr">
        <ApplyForm
          animate={animate}
          open={activePage === PAGE.APPLY}
          onChange={() => onPageClick(PAGE.MAIN)}
        />

        <Home />

        <ContactForm animate={animate} open={activePage === PAGE.CONTACT} />
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

        <div className="sideButtons">
          <SideButtons activePage={activePage} onPageClick={onPageClick} />
        </div>

        <div className="scrollButton">
          <button onClick={scrollToTop}>
            <img src="./images/topArrow.svg"/>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
