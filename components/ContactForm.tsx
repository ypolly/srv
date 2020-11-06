import Borders from "./Borders";
import ContactText from "./ContactText";
import { isDesktop } from "../pages/media";

export default function ContactForm({ animate, open }) {
  return (
    // ovdje se pomice prozor ako je animate true, to ti ne treba kod web app, dakle slide out i slide in
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
          />
          <ContactText />
        </div>
      </Borders>
    </div>
  );
}
