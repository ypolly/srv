import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Apply from "./apply";

import Metadata from "../components/Metadata";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import EnglishText from "../components/englishText";
import SwedishText from "../components/SwedishText";

export default function Home() {
  const [closed, setClosed] = useState("");
  const [clear, setClear] = useState("");
  const router = useRouter();

  const { lang } = router.query;

  function closeCard() {
    setClosed("false");
  }

  const ANIMATION_CLASSES = {
    slideIn: "slide-in",
    slideOut: "slide-out",
  };

  // set default state to use fade in and visible class
  const [animationCard, setAnimationCard] = useState("");
  const [animationDiv, setAnimationDiv] = useState("");
  const [animationBorder, setAnimationBorder] = useState("");
  // this will run everytime isHidden changes
  useEffect(() => {
    if (closed === "true") {
      // fade out then hide once animation finishes
      setAnimationCard("slide-out");
      setAnimationDiv("slide-out-button");
      setAnimationBorder("slide-out-border");
    } else if (closed === "false") {
      setAnimationCard("slide-in");
      setAnimationDiv("slide-in-button");
      setAnimationBorder("slide-in-border");
    }
  }, [closed]);

  return (
    <>
      <Metadata />
      <div className="sr">
        <Apply animationClass={animationCard} closeCard={closeCard} />
        <div>
          <Menu lang={lang} />
          {lang === "en" ? <EnglishText /> : <SwedishText />}
          <Footer />
        </div>
      </div>
    </>
  );
}
