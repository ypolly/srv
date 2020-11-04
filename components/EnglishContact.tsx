import Shield from "../public/images/shield.svg";
import { useTranslations } from "../shared/translations";

export default function Swedish() {
  const translation = useTranslations();

  return (
    <>
      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>{translation.get("busines")}</h2>
      </div>
      <div className="sr__content-text">
        <div className="centered_content">
          <p>
            {` ${translation.get("serviaab")} `}
            <span className={`marker-first-se`}>
              {translation.get("homecleaning")}
            </span>{" "}
            {` ${translation.get("with")} `}
            <span className="marker">{translation.get("swedens")}</span> in{" "}
            <span className="marker">{translation.get("twoCities")} </span>
            {` ${translation.get("and")} `}
            <span className="marker">{translation.get("Malmö")} </span>
            {` ${translation.get("priceof")} `}
            <span className="marker">{translation.get("480")} </span>{" "}
            {translation.get("reduction")}
          </p>
        </div>
      </div>
      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>
          {translation.get("customer")}
        </h2>
      </div>
      <h1 className={`centered_content red_text`}>
        {translation.get("phone")}
      </h1>
      <h1 className={`centered_content usual_font`}>0770-16 16 16</h1>
      <h1 className={`centered_content red_text_margin`}>
        {translation.get("email")}
      </h1>
      <h1 className={`centered_content usual_font`}>info@servia.com</h1>
      <h1 className={`centered_content red_text_margin`}>
        {translation.get("website")}
      </h1>
      <h1 className={`centered_content usual_font`}>servia.com</h1>
      <div>
        <h1 className={`centered_content red_text_margin`}>
          {translation.get("opening")}
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("monday")} `} 9:00-22:00
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("tuesday")} `} 9:00-22:00
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("wednesday")} `} 9:00-22:00
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("thursday")} `} 9:00-22:00
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("friday")} `} 9:00-22:00
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("saturday")} `} 9:00-22:00
        </h1>
        <h1 className={`centered_content usual_font`}>
          {`${translation.get("sunday")} `} 9:00-22:00
        </h1>
      </div>

      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>
          {translation.get("locations")}
        </h2>
      </div>
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

      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>{translation.get("compan")}</h2>
      </div>
      <h1 className={`centered_content red_firsttext_margin`}>
        {translation.get("companyname")}
      </h1>
      <h1 className={`centered_content usual_font`}>Servia AB</h1>

      <h1 className={`centered_content red_text_margin`}>
        {translation.get("regnumber")}
      </h1>
      <h1 className={`centered_content usual_font`}>556902-7013</h1>
      <h1 className={`centered_content red_text_margin`}>
        {translation.get("country")}
      </h1>
      <h1 className={`centered_content usual_font`}>
        {translation.get("swe")}
      </h1>
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
      <div
        id="bottomMarker"
        className="sr__footer h-center z-layer__footer"
        style={{ position: "relative", width: "fit-content" }}
      >
        <div className="sr__footer-bg">
          <div className="sr__footer-block">
            {translation.get("open")} •{" "}
            <a href="tel:0770-16 16 16">{translation.get("open")}</a>
            &nbsp;
            <a href="mailto:info@servia.com">
              <img src="./images/pencil.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
