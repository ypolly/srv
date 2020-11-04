import salaryScale from "../data/salaryScale.json";
import { useTranslations } from "../shared/translations";

export const Home = () => {
  const translation = useTranslations();

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
                    {translation.get("homeTitle")}
                  </span>
                  {` ${translation.get("with")} `}
                  <span className="marker">
                    {translation.get("highestSalary")}
                  </span>
                  {` ${translation.get("simultaneously")} `}
                  <span className="marker">
                    {translation.get("twoCities")}
                  </span>{" "}
                  {` ${translation.get("and")} `}
                  <span className="marker">{translation.get("Malmö")}</span>
                </p>
                <p>
                  {` ${translation.get("full")} `}
                  <span className="marker">{translation.get("perHour")}</span>
                  {` ${translation.get("total")} `}
                  <i>{` ${translation.get("euros")} `}</i>
                </p>

                <p>
                  {` ${translation.get("massive")} `}
                  <span className="marker">{translation.get("50")}</span>
                </p>

                <p>
                  {translation.get("weekly")}
                  <span className="marker">
                    {` ${translation.get("monthly")} `}
                  </span>{" "}
                  {translation.get("plus")}
                </p>

                <p>{translation.get("asfar")}</p>

                <p>
                  {` ${translation.get("itis")} `}
                  <span className="marker">{translation.get("worlds")} </span>
                </p>

                <p>
                  {`${translation.get("paying")} `}
                  <span className="marker">{translation.get("verybest")}</span>
                  {` ${translation.get("available")} `}
                </p>

                <p>
                  {`${translation.get("skilled")} `}{" "}
                  <span className="marker">{translation.get("elite")}</span>{" "}
                  {`${translation.get("homes")} `}
                  <span className="marker">{translation.get("highest")} </span>
                </p>

                <p>
                  {`${translation.get("industry")} `}
                  <span className="marker">{translation.get("hemfrid")}</span>
                  {` ${translation.get("clients")} `}
                </p>

                <p>${translation.get("contrary")}</p>

                <p>
                  {`${translation.get("always")} `}
                  <span className="marker">{translation.get("480")}</span>
                  {` ${translation.get("vat")} `}
                  <span className="marker">{translation.get("reduction")}</span>
                  {` ${translation.get("regardless")} `}
                </p>

                <p>{translation.get("498")}</p>

                <p>
                  {`${translation.get("servia")} `}{" "}
                  <span className="marker">{translation.get("fees")}</span>
                </p>

                <p>{translation.get("business")}</p>

                <p style={{ marginBottom: "12px" }}>
                  {translation.get("graphic")}
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
                          {translation.get("high")} <br />{" "}
                          {translation.get("price")}
                        </span>
                        <br />
                        <span>480 KR/H</span>
                      </div>
                      <div className="bars__bar-cell fill-grey left-1">
                        <span>{translation.get("moms")}</span>
                      </div>
                      <div className="bars__bar-cell fill-grey left-2">
                        <span>{translation.get("premium")}</span>
                      </div>
                      <div className="bars__bar-cell fill-grey left-3">
                        <span>
                          {translation.get("minimum")} <br />{" "}
                          {translation.get("pay")}
                        </span>
                      </div>
                      <div className="bars__bar-cell legend orange">SERVIA</div>
                    </div>
                  </div>

                  <div className="bars__col">
                    <div className="bars__bar">
                      <div className="bars__bar-cell center-top">
                        <span>
                          {translation.get("high")} <br />{" "}
                          {translation.get("price")}
                        </span>
                        <br />
                        <span>490 KR/H</span>
                      </div>
                      <div className="bars__bar-cell fill-grey center-1">
                        <span>{translation.get("moms")}</span>
                      </div>
                      <div className="bars__bar-cell fill-grey center-2">
                        <span>{translation.get("premium")}</span>
                      </div>
                      <div className="bars__bar-cell fill-grey center-3">
                        <span>
                          {translation.get("minimum")} <br />{" "}
                          {translation.get("pay")}
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
                          {translation.get("high")} <br />{" "}
                          {translation.get("price")}
                        </span>
                        <br />
                        <span>550 KR/H</span>
                      </div>
                      <div className="bars__bar-cell fill-grey right-1">
                        <span>{translation.get("moms")}</span>
                      </div>
                      <div className="bars__bar-cell fill-grey right-2">
                        <span>{translation.get("premium")}</span>
                      </div>
                      <div className="bars__bar-cell fill-grey right-3">
                        <span>
                          {translation.get("minimum")} <br />{" "}
                          {translation.get("pay")}
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
                  {` ${translation.get("cleaner")} `}
                  <span className="marker">
                    {translation.get("increase")}
                  </span>{" "}
                  {` ${translation.get("part")} `}
                </p>

                <p>
                  <span className="marker">{translation.get("little")} </span>{" "}
                  {` ${translation.get("freely")} `}
                </p>

                <p>
                  {`${translation.get("least")} `}
                  <span className="marker">
                    {translation.get("allow")}
                  </span>{" "}
                  {translation.get("company")}
                </p>

                <p>{translation.get("words")}</p>

                <p>
                  {translation.get("toapply")}
                  <span className="marker">
                    {` ${translation.get("resume")} `}{" "}
                  </span>{" "}
                  {`${translation.get("tousat")} `}
                  <a href="mailto:thebestpaidmaid@servia.com">
                    thebestpaidmaid@servia.com,
                  </a>{" "}
                  {`${translation.get("along")} `}
                  <span className="marker">{translation.get("letters")}</span>
                  {` ${translation.get("andor")} `}
                </p>

                <p>
                  {`${translation.get("since")} `}
                  <span className="marker">
                    {translation.get("refrain")}
                  </span>{" "}
                  {translation.get("single")}
                </p>

                <p className="right">
                  {`${translation.get("if")} `}
                  <a href="tel:0770-16 16 16">0770-16 16 16 </a>{" "}
                  {translation.get("during")}{" "}
                  <span className="marker">{translation.get("anyday")}</span>
                  {` ${translation.get("everything")} `}
                </p>

                <p>{translation.get("forward")}</p>

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
};
