import Borders from "./Borders";
import Shield from "../public/images/shield.svg";
import { useEffect, useState } from "react";
import SwedishContact from "./SwedishContact";
import EnglishContact from "./EnglishContact";

export default function ContactForm({ animate, open, onChange, lang }) {
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
          {lang === "en" ? <EnglishContact /> : <SwedishContact />}
        </div>
      </Borders>
    </div>
  );
}
