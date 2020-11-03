import salaryScale from "../data/salaryScale.json";

export default function Swedish() {
  return (
    <>
      <div id="borderLayout" className="sr__border z-layer__border h-center">
        <div className="sr__border-1">
          <div className="sr__border-2">
            <div className={`sr__page z-layer__content `}>
              <div className={`sr__content `}>
                <div className="sr__content-photoblock">
                  <div
                    className="sr__content-photo"
                    style={{
                      backgroundImage: "url( ./images/photo-1.svg )",
                    }}
                  ></div>
                </div>
                <div id="line" className="sr__content-line"></div>
                <div className="sr__content-text">
                  <p>
                    <span className="marker-first-se">
                      NU LANSERAR VI STÄDFÖRETAGET
                    </span>{" "}
                    med{" "}
                    <span className="marker">
                      Sveriges högsta lön för hemstädare, Servia AB.
                    </span>{" "}
                    Vi gör det samtidigt i Sveriges tre största städer:{" "}
                    <span className="marker">Stockholm, Göteborg </span>och{" "}
                    <span className="marker">Malmö.</span>
                  </p>

                  <p>
                    Lönen vi erbjuder är hela{" "}
                    <span className="marker">202 kr per timme</span> (180 kr
                    plus 22 kr i semesterersättning) plus 31,42% i sociala
                    avgifter, alltså totalt 265 kr per timme.
                  </p>

                  <p>
                    Det är massiva{" "}
                    <span className="marker">
                      50% högre lön än i kollektivavtal.
                    </span>
                  </p>

                  <p className="right">
                    För heltidsarbete om 40 h i veckan blir det en lön på{" "}
                    <span className="marker">34 986 kr per månad</span> (31 243
                    kr plus 3 743 kr i semesterersättning) plus 31,42% i sociala
                    avgifter, alltså totalt 45 977 kr per månad).
                  </p>

                  <p>
                    Så långt vi vet, finns det inget annat städföretag i Sverige
                    eller, sett till hela lönekostnaden, förmodligen ens i
                    världen, som betalar sina hemstädare högre lön än Servia.
                  </p>

                  <p>
                    Det är – så långt vi kan se –{" "}
                    <span className="marker">
                      världens högsta lön för städare.
                    </span>
                  </p>

                  <p>
                    Genom att betala den allra högsta lönen för hemstädare, kan
                    vi rekrytera och erbjuda{" "}
                    <span className="marker">de allra bästa hemstädarna</span>{" "}
                    som finns att tillgå.
                  </p>

                  <p className="right">
                    Hemstädare som är exceptionellt skickliga, tjänstvilliga,
                    ordningsamma och pålitliga, och som talar flytande svenska
                    och/eller engelska: kort sagt,{" "}
                    <span className="marker">elitstädare</span> för svenska hem
                    med de{" "}
                    <span className="marker">
                      högst ställda kraven på kvalitet, service, och säkerhet.
                    </span>
                  </p>

                  <p>
                    Och eftersom vi kan sköta verksamheten för marknadens
                    sannolikt lägsta påslag{" "}
                    <span className="marker">
                      – 45% på lönen jämfört med Hemfrids 145% –
                    </span>{" "}
                    är priset till kunderna inte högre än hos de stora
                    städbolagen.
                  </p>

                  <p>Tvärtom är det till och med något lägre.</p>

                  <p>
                    Priset för städning hos Servia är{" "}
                    <span className="marker">alltid 480 kr/h</span>
                    inklusive moms, eller{" "}
                    <span className="marker">
                      240 kr/h efter skattereduktion,
                    </span>{" "}
                    oavsett var kunderna bor, oavsett hur ofta, hur länge och
                    vilka veckodagar som kunderna bokar hemstädning.
                  </p>

                  <p>
                    Det är att jämföra med Hemfrid som tar 498-550 kr per timme
                    och HomeMaid som tar 490 kr per timme plus avgifter.
                  </p>

                  <p>
                    Hos Servia tar vi{" "}
                    <span className="marker">inga avgifter alls.</span>
                  </p>

                  <p>
                    Det enda kunderna betalar är den allra högsta lönen till de
                    allra bästa hemstädarna för de timmar som de arbetar plus
                    ett minimalt påslag om 45% för att sköta verksamheten.
                  </p>

                  <p style={{ marginBottom: "14px" }}>
                    Hela affärsmodellen kan faktiskt enkelt visas genom en enda
                    grafisk bild:
                  </p>

                  <div className="bars">
                    <div className="bars__col block">
                      <div className="bars__bar legend__block">
                        {salaryScale.map((n) => (
                          <div className="bars__bar-cell">{n}</div>
                        ))}
                        <div className="bars__bar-cell legend-first"></div>
                      </div>
                    </div>

                    <div className="bars__col">
                      <div className="bars__bar">
                        <div className="bars__bar-cell left-top">
                          <span>
                            HÖGSTA <br /> PRIS
                          </span>
                          <br />
                          <span>480 KR/H</span>
                        </div>
                        <div className="bars__bar-cell fill-grey left-1">
                          <span>MOMS</span>
                        </div>
                        <div className="bars__bar-cell fill-grey left-2">
                          <span>PÅSLAG</span>
                        </div>
                        <div className="bars__bar-cell fill-grey left-3">
                          <span>MINIMILÖN</span>
                        </div>
                        <div className="bars__bar-cell legend orange">
                          SERVIA
                        </div>
                      </div>
                    </div>

                    <div className="bars__col">
                      <div className="bars__bar">
                        <div className="bars__bar-cell center-top">
                          <span>
                            HÖGSTA <br /> PRIS
                          </span>
                          <br />
                          <span>490 KR/H</span>
                        </div>
                        <div className="bars__bar-cell fill-grey center-1">
                          <span>MOMS</span>
                        </div>
                        <div className="bars__bar-cell fill-grey center-2">
                          <span>PÅSLAG</span>
                        </div>
                        <div className="bars__bar-cell fill-grey center-3">
                          <span>MINIMILÖN</span>
                        </div>
                        <div className="bars__bar-cell legend grey-dark">
                          HOMEMAID
                        </div>
                      </div>
                    </div>
                    <div className="bars__col">
                      <div className="bars__bar">
                        <div className="bars__bar-cell right-top">
                          <span>
                            HÖGSTA <br /> PRIS
                          </span>
                          <br />
                          <span>550 KR/H</span>
                        </div>
                        <div className="bars__bar-cell fill-grey right-1">
                          <span>MOMS</span>
                        </div>
                        <div className="bars__bar-cell fill-grey right-2">
                          <span>PÅSLAG</span>
                        </div>
                        <div className="bars__bar-cell fill-grey right-3">
                          <span>MINIMILÖN</span>
                        </div>
                        <div className="bars__bar-cell legend grey-dark">
                          HEMFRID
                        </div>
                      </div>
                    </div>
                    <div className="bars__col left"></div>
                  </div>

                  <p style={{ margin: 0 }}>
                    Om du idag arbetar som städare – som anställd eller i egen
                    städfirma med egna kunder – och du får exceptionellt fina
                    omdömen av dina kunder, och du vill{" "}
                    <span className="marker">höja din lön markant</span> genom
                    att bli en del av Servia, är du varmt välkommen att ansöka
                    till oss.
                  </p>

                  <p>
                    <span className="marker">
                      Du kan jobba så mycket eller så litet som du vill,
                    </span>
                    och du kan fritt välja om du vill vara anställd hos oss
                    eller arbeta som underleverantör genom en egen firma eller
                    bolag, för 265 kr per timme plus moms.
                  </p>

                  <p>
                    Inte minst:{" "}
                    <span className="marker">
                      vi tillåter dig att fortsätta att arbeta för dina egna
                      kunder
                    </span>{" "}
                    eller på det företag där du idag är anställd i den
                    utsträckning som du själv vill, och så mycket som du själv
                    vill för oss.
                  </p>

                  <p>
                    Vi har med andra ord inga konkurrensförbud. Vi behöver inga
                    sådana, eftersom vi är övertygade om att det inte finns
                    något företag inom hemstädning som kan konkurrera med den
                    lön som vi betalar.
                  </p>

                  <p>
                    För att ansöka,{" "}
                    <span className="marker">skicka ditt CV</span> till oss på
                    <span className="marker">
                      thebestpaidmaid@servia.com,
                    </span>{" "}
                    tillsammans med ett eller flera lysande{" "}
                    <span className="marker">referensbrev</span> från företag
                    och/eller kunder inom hemstädning.
                  </p>

                  <p>
                    Eftersom vi får in så många ansökningar till dessa högst
                    betalda jobb som städare i Sverige, ber vi dig om en tjänst:{" "}
                    <span className="marker">undvik att ringa till oss</span>{" "}
                    och vänta istället på att vi kontaktar dig. För det kommer
                    vi att göra. Vi läser och vi besvarar nämligen varje
                    ansökning vi får – alltid.
                  </p>

                  <p>
                    Om du läser detta som potentiell kund och vill veta mer om
                    Servia, välkomnar vi dig att ringa oss på
                    <a href="tel:0770-16 16 16">0770-16 16 16</a> under{" "}
                    <span className="marker">
                      alla dagar, måndag till söndag, kl. 9-22,
                    </span>{" "}
                    så berättar vi allt du vill veta om hur det fungerar.
                  </p>

                  <p>Vi ser fram emot att höra av dig.</p>

                  <p>
                    <span className="marker">Servia AB</span> <br />
                    <span className="marker">
                      <i>The Best Paid Maid.</i>™
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
