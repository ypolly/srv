import Shield from "../public/images/shield.svg";

export default function Swedish() {
  return (
    <>
      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>VERKSAMHET</h2>
      </div>
      <div className="sr__content-text">
        <div className="centered_content">
          <p>
            Servia AB erbjuder{" "}
            <span className={`marker-first-se`}>hemstädning</span> med{" "}
            <span className="marker">Sveriges högsta betalda hemstädare,</span>{" "}
            i <span className="marker">Stockholm, Göteborg </span>och{" "}
            <span className="marker">Malmö.</span> till en kostnad av{" "}
            <span className="marker">480 kr/h </span> inkl. moms före
            skattereduktion.{" "}
          </p>
        </div>
      </div>

      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>KUNDSERVICE</h2>
      </div>
      <h1 className={`centered_content red_text`}>TELEFON</h1>
      <h1 className={`centered_content usual_font`}>0770-16 16 16</h1>
      <h1 className={`centered_content red_text_margin`}>EPOST</h1>
      <h1 className={`centered_content usual_font`}>info@servia.com</h1>
      <h1 className={`centered_content red_text_margin`}>HEMSIDA</h1>
      <h1 className={`centered_content usual_font`}>servia.com</h1>
      <div>
        <h1 className={`centered_content red_text_margin`}>ÖPPETTIDER</h1>
        <h1 className={`centered_content usual_font`}>Måndag: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Tisdag: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Onsdag: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Torsdag: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Fredag: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Lördag: 9:00-22:00</h1>
        <h1 className={`centered_content usual_font`}>Söndag: 9:00-22:00</h1>
      </div>

      <div className={`headlineContainerStyle`}>
        <h2 className={`headlineContactStyle`}>ADRESSER</h2>
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
        <h2 className={`headlineContactStyle`}>BOLAG</h2>
      </div>
      <h1 className={`centered_content red_firsttext_margin`}>BOLAGSNAMN</h1>
      <h1 className={`centered_content usual_font`}>Servia AB</h1>

      <h1 className={`centered_content red_text_margin`}>
        ORGANISATIONSNUMMER
      </h1>
      <h1 className={`centered_content usual_font`}>556902-7013</h1>
      <h1 className={`centered_content red_text_margin`}>
        REGISTRATIONSLANDET
      </h1>
      <h1 className={`centered_content usual_font`}>SVERIGE</h1>
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
            RING KUNDTJÄNST • <a href="tel:0770-16 16 16">ÖPPET NU</a>
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
