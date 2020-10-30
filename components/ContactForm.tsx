import Borders from "./Borders";
import Shield from "../public/images/shield.svg";
import { useEffect, useState } from "react";

export default function ContactForm({ animate, open, onChange }) {
  const onClose = () => {
    onChange(false);
  };
  return (
    <div
      id="sr__apply"
      className={`form__border border__white  h-form ${
        animate ? (open ? "slide-out" : "slide-in") : ""
      }`}
    >
      <Borders color="red">
        <div onClick={onClose} className="form__close">
          <object
            className="form__close-svg"
            type="image/svg+xml"
            data="./images/blackcross.svg"
          ></object>
        </div>

        <div>
          <object
            className="form__header-title"
            type="image/svg+xml"
            data="./images/servia-red.svg"
          ></object>

          <object
            className="form__header-logo"
            type="image/svg+xml"
            data="./images/best-paid.svg"
          ></object>
          <h2 className={`red_line_text red_text`}>VERKSAMHET</h2>
          <div className="sr__content-text">
            <div className="centered_content">
              <p>
                Servia AB erbjuder{" "}
                <span className={`marker-first-se`}>hemstädning</span> med{" "}
                <span className="marker">
                  Sveriges högsta betalda hemstädare,
                </span>{" "}
                i <span className="marker">Stockholm, Göteborg </span>och{" "}
                <span className="marker">Malmö.</span> till en kostnad av{" "}
                <span className="marker">480 kr/h </span> inkl. moms före
                skattereduktion.{" "}
              </p>
            </div>
          </div>
          <h2 style={{ marginBottom: 5 }} className={`red_line_text red_text`}>
            KUNDSERVICE
          </h2>
          <h3 style={{ marginTop: 0 }} className="red_dot_line red_text">
            ÖPPET NU
          </h3>
          <h1 className={`centered_content red_text`}>TELEFON</h1>
          <h1 className={`centered_content usual_font`}>0770-16 16 16</h1>
          <div>
            <h1 className={`centered_content usual_font`}>
              Måndag: 9:00-22:00
            </h1>
            <h1 className={`centered_content usual_font`}>
              Tisdag: 9:00-22:00
            </h1>
            <h1 className={`centered_content usual_font`}>
              Onsdag: 9:00-22:00
            </h1>
            <h1 className={`centered_content usual_font`}>
              Torsdag: 9:00-22:00
            </h1>
            <h1 className={`centered_content usual_font`}>
              Fredag: 9:00-22:00
            </h1>
            <h1 className={`centered_content usual_font`}>
              Lördag: 9:00-22:00
            </h1>
            <h1 className={`centered_content usual_font`}>
              Söndag: 9:00-22:00
            </h1>
          </div>
          <h1 className={`centered_content red_text_margin`}>EPOST</h1>
          <h1 className={`centered_content usual_font`}>info@servia.com</h1>
          <h1 className={`centered_content red_text_margin`}>HEMSIDA</h1>
          <h1 className={`centered_content usual_font`}>servia.com</h1>

          <h2 className={`red_line_text red_text_margin`}>ADRESSER</h2>
          <h1 className={`centered_content red_firsttext_margin`}>
            SERVIA&reg; AB STOCKHOLM
          </h1>
          <h1 className={`centered_content usual_font`}>Sibyllegatan 42</h1>
          <h1 className={`centered_content usual_font`}>114 43 Stockholm</h1>

          <h1 className={`centered_content red_text_margin`}>
            SERVIA&reg; AB GÖTEBORG
          </h1>
          <h1 className={`centered_content usual_font`}>Engelbrektsgatan 12</h1>
          <h1 className={`centered_content usual_font`}>411 34 Göteborg</h1>

          <h1 className={`centered_content red_text_margin`}>
            SERVIA&reg; AB MALMÖ
          </h1>
          <h1 className={`centered_content usual_font`}>Vasagatan 12</h1>
          <h1 className={`centered_content usual_font`}>121 34 Malmö</h1>

          <h2 className={`red_line_text red_text_margin`}>BOLAG</h2>
          <h1 className={`centered_content red_firsttext_margin`}>
            BOLAGSNAMN
          </h1>
          <h1 className={`centered_content usual_font`}>Servia AB</h1>

          <h1 className={`centered_content red_text_margin`}>
            ORGANISATIONSNUMMER
          </h1>
          <h1 className={`centered_content usual_font`}>556902-7013</h1>
          <div className={`shield_css`}>
            <Shield />
          </div>
          <div className={`copyright copyright_greyletters`}>
            © COPYRIGHT SERVIA AB 2020.
            <br />
            SERVIA™ AND THE BEST PAID MAID.™
            <br />
            ARE TRADEMARKS WITH PENDING REGISTRATIONS.
          </div>
        </div>
      </Borders>
    </div>
  );
}
