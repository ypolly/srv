import Shield from "../public/images/shield.svg";

export default function Swedish() {
  return (
    <>
      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>BUSINESS</h2>
      </div>
      <div className="sr__content-text">
        <div className="centered_content">
          <p>
            Servia AB offers{" "}
            <span className={`marker-first-se`}>home cleaning</span> with{" "}
            <span className="marker">
              Sweden's best paid home cleaning maids,
            </span>{" "}
            in <span className="marker">Stockholm, Gothenburg </span>och{" "}
            <span className="marker">Malmö.</span> for the price of{" "}
            <span className="marker">480 kr/h </span> incl. VAT before tax
            reduction.{" "}
          </p>
        </div>
      </div>
      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>CUSTOMER SUPPORT</h2>
      </div>
      <h1 className={`centered_content red_text`}>PHONE</h1>
      <h1 className={`centered_content usual_font`}>0770-16 16 16</h1>
      <h1 className={`centered_content red_text_margin`}>EMAIL</h1>
      <h1 className={`centered_content usual_font`}>info@servia.com</h1>
      <h1 className={`centered_content red_text_margin`}>WEBSITE</h1>
      <h1 className={`centered_content usual_font`}>servia.com</h1>
      <div>
        <h1 className={`centered_content red_text_margin`}>OPENING HOURS</h1>
        <h1 className={`centered_content usual_font`}>Monday: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Tuesday: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Wednesday: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Thursday: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Friday: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Saturday: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Sunday: 9:00-22:00</h1>
      </div>

      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>LOCATIONS</h2>
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
        <h2 className={`headlineContactStyle`}>COMPANY</h2>
      </div>
      <h1 className={`centered_content red_firsttext_margin`}>COMPANY NAME</h1>
      <h1 className={`centered_content usual_font`}>Servia AB</h1>

      <h1 className={`centered_content red_text_margin`}>
        REGISTRATION NUMBER
      </h1>
      <h1 className={`centered_content usual_font`}>556902-7013</h1>
      <h1 className={`centered_content red_text_margin`}>
        COUNTRY OF REGISTRATION
      </h1>
      <h1 className={`centered_content usual_font`}>Sweden</h1>
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
            OPEN NOW • <a href="tel:0770-16 16 16">CLICK TO CALL</a>
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
