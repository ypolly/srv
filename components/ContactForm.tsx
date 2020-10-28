import SvgIcon from "@material-ui/core/SvgIcon";
import Borders from "./Borders";
import Arrow from "../public/images/arrow.svg";
import Send from "../public/images/send.svg";
import Tick from "../public/images/tickoff.svg";

export default function ContactForm({ animationClass, closed, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return (
    <div
      id="sr__apply"
      className={`form__border border__white  h-form ${animationClass}`}
      style={{ opacity: 1 }}
    >
      <Borders color="red">
        <div onClick={handleChange} className="form__close">
          <object
            className="form__close-svg"
            type="image/svg+xml"
            data="./images/cross.svg"
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
          <h2 className={`red_line_text red_text`}>KUNDSERVICE</h2>

          <div className={`copyright copyright_redletters`}>
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

const ArrowDown = (props) => (
  <SvgIcon {...props}>
    <Arrow />
  </SvgIcon>
);

const TickOff = (props) => (
  <SvgIcon {...props}>
    <Tick />
  </SvgIcon>
);
