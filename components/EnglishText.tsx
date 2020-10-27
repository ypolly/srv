import salaryScale from "../data/salaryScale.json";

export default function English() {
  return (
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
                <p className="right">
                  <span className="marker-first">
                    WE NOW LAUNCH THE CLEANING COMPANY
                  </span>{" "}
                  with
                  <span className="marker">
                    Sweden's highest salary for home cleaning maids, Servia AB.
                  </span>{" "}
                  We do it simultaneously in the three largest cities in Sweden:{" "}
                  <span className="marker">Stockholm, Göteborg,</span>
                  and <span className="marker">Malmö.</span>
                </p>
                <p>
                  The salary we offer is a full{" "}
                  <span className="marker">202 kr per hour</span> (180 kr plus
                  22 kr in holiday salary) plus 31.42% in social security
                  charges, that is, a total of 265 kr per hour.
                  <i>
                    {" "}
                    (To get the approximate amounts in euros, divide the numbers
                    by ten.)
                  </i>
                </p>

                <p>
                  That’s a massive{" "}
                  <span className="marker">
                    50% higher salary than in collective agreements.
                  </span>
                </p>

                <p>
                  For full-time work of 40 hours per week, that means a salary
                  of <span className="marker">34,986 kr per month</span> (31,243
                  kr plus 3,743 kr in holiday salary) plus 31.42% in social
                  security charges, that is, a total of 45,997 kr per month).
                </p>

                <p>
                  As far as we know, there is no other cleaning company in
                  Sweden, or, if we take into account the full salary cost,
                  possibly even in the world, that pays its cleaning maids
                  better than Servia does.
                </p>

                <p>
                  It is&mdash;as far as we can see&mdash;
                  <span className="marker">
                    the world's highest salary for cleaning maids.
                  </span>
                </p>

                <p>
                  By paying the very highest salary for home cleaning maids,
                  we’re able to recruit and offer{" "}
                  <span className="marker">
                    the very best home cleaning maids
                  </span>{" "}
                  available.
                </p>

                <p>
                  Maids who are exceptionally skilled, service-minded,
                  organized, and reliable, and who speak fluent Swedish and/or
                  English: in short, <span className="marker">elite maids</span>{" "}
                  for Swedish homes with the{" "}
                  <span className="marker">
                    highest standards of quality, service, and safety.
                  </span>
                </p>

                <p>
                  And because we can run the business at what’s most likely the
                  lowest premium in the industry
                  <span className="marker">
                    &mdash;45% of the salary as compared to Hemfrid's
                    145%&mdash;
                  </span>
                  the price to clients is not higher than at the big home
                  cleaning companies.
                </p>

                <p>To the contrary, it’s even somewhat lower.</p>

                <p>
                  The price for cleaning at Servia is always{" "}
                  <span className="marker">480 kr/h</span>
                  including VAT, or{" "}
                  <span className="marker">240 kr/h after tax reduction,</span>
                  regardless of where the clients live, or how frequently, how
                  long, and which weekdays clients book their cleaning.
                </p>

                <p>
                  That’s to compare with Hemfrid, which charges 498-550 kr per
                  hour, and HomeMaid, which charges 490 kr per hour plus fees.
                </p>

                <p>
                  At Servia, we don’t have{" "}
                  <span className="marker">any fees at all.</span>
                </p>

                <p>
                  The only thing clients pay is the very highest salary for the
                  very best maids for the hours they work plus a minimal premium
                  of 45% to run the business.
                </p>

                <p style={{ marginBottom: "12px" }}>
                  In fact, the whole business model can easily be shown in a
                  single graphic image:
                </p>

                <div className="bars">
                  <div className="bars__col block">
                    <div className="bars__bar legend__block">
                      {salaryScale.map((n) => (
                        <div className="bars__bar-cell">{n}</div>
                      ))}
                    </div>
                  </div>

                  <div className="bars__col">
                    <div className="bars__bar">
                      <div className="bars__bar-cell left-top">
                        <span>
                          HIGHEST <br /> PRICE
                        </span>
                        <br />
                        <span>480 KR/H</span>
                      </div>
                      <div className="bars__bar-cell fill-grey left-1">
                        <span>VAT</span>
                      </div>
                      <div className="bars__bar-cell fill-grey left-2">
                        <span>PREMIUM</span>
                      </div>
                      <div className="bars__bar-cell fill-grey left-3">
                        <span>
                          MINIMUM <br /> PAY
                        </span>
                      </div>
                      <div className="bars__bar-cell legend orange">SERVIA</div>
                    </div>
                  </div>

                  <div className="bars__col">
                    <div className="bars__bar">
                      <div className="bars__bar-cell center-top">
                        <span>
                          HIGHEST <br /> PRICE
                        </span>
                        <br />
                        <span>490 KR/H</span>
                      </div>
                      <div className="bars__bar-cell fill-grey center-1">
                        <span>VAT</span>
                      </div>
                      <div className="bars__bar-cell fill-grey center-2">
                        <span>PREMIUM</span>
                      </div>
                      <div className="bars__bar-cell fill-grey center-3">
                        <span>
                          MINIMUM <br /> PAY
                        </span>
                      </div>
                      <div className="bars__bar-cell legend grey-dark ">
                        HOMEMAID
                      </div>
                    </div>
                  </div>
                  <div className="bars__col">
                    <div className="bars__bar">
                      <div className="bars__bar-cell right-top">
                        <span>
                          HIGHEST <br /> PRICE
                        </span>
                        <br />
                        <span>550 KR/H</span>
                      </div>
                      <div className="bars__bar-cell fill-grey right-1">
                        <span>VAT</span>
                      </div>
                      <div className="bars__bar-cell fill-grey right-2">
                        <span>PREMIUM</span>
                      </div>
                      <div className="bars__bar-cell fill-grey right-3">
                        <span>
                          MINIMUM <br /> PAY
                        </span>
                      </div>
                      <div className="bars__bar-cell legend grey-dark">
                        HEMFRID
                      </div>
                    </div>
                  </div>
                  <div className="bars__col left"></div>
                </div>

                <p style={{ margin: 0 }}>
                  If you’re currently working as a home cleaner&mdash;as an
                  employee, or through your own individual enterprise with your
                  own clients&mdash;and you receive exceptionally positive
                  feedback from your clients, and you want to
                  <span className="marker">
                    substantially increase your salary
                  </span>{" "}
                  by becoming a part of Servia, you’re most welcome to apply to
                  us.
                </p>

                <p>
                  <span className="marker">
                    You can work as much or as little as you want,
                  </span>
                  and you can freely choose whether you want to be employed by
                  us, or work as a subcontractor through your own individual
                  enterprise or company, for 265 kr per hour plus VAT.
                </p>

                <p>
                  Not the least,{" "}
                  <span className="marker">
                    we allow you to continue to work for your own clients,
                  </span>{" "}
                  or the company where you are currently employed as much as you
                  want, and as much as you want for Servia.
                </p>

                <p>
                  In other words, we don’t have any competitive clauses. We
                  don’t need this, because we’re confident that there's no other
                  home cleaning company that can compete with the salary we pay.
                </p>

                <p>
                  To apply, <span className="marker">send your resume</span> to
                  us at
                  <a href="mailto:thebestpaidmaid@servia.com">
                    thebestpaidmaid@servia.com,
                  </a>{" "}
                  along with one or several brilliant{" "}
                  <span className="marker">reference letters</span> from
                  companies and/or clients in home cleaning.
                </p>

                <p>
                  Since we receive so many applications for these best paid home
                  cleaner jobs in Sweden, we kindly ask you for a small service:{" "}
                  <span className="marker">refrain from calling us,</span> and
                  instead wait for us to contact you. Because we will contact
                  you. We read, and we answer every single application we
                  receive&mdash;always.
                </p>

                <p className="right">
                  If you read this as a potential client, and you'd like to know
                  more about Servia, we invite you to call us at
                  <a href="tel:0770-16 16 16">0770-16 16 16 </a> during{" "}
                  <span className="marker">
                    any day, Monday to Sunday, at 9-22,
                  </span>{" "}
                  and we’ll tell you everything you want to know about how it
                  works.
                </p>

                <p>We look forward to hearing from you.</p>

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
  );
}
