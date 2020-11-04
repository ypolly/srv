import invariant from "invariant";
import { useRouter } from "next/router";
import en from "./languages/en.json";
import se from "./languages/se.json";

const languagesKeys = [Object.keys(en).sort(), Object.keys(se).sort()];

class Translation<T> {
  language: T;
  constructor(language: T) {
    this.language = language;
  }
  get(key: keyof T): string {
    // @ts-ignore
    invariant(this.language.hasOwnProperty(key), `Missing translation ${key}`);
    // @ts-ignore
    return this.language[key];
  }
}
export const useTranslations = () => {
  const {
    query: { lang },
  } = useRouter();

  switch (lang) {
    case "en":
      return new Translation(en);
    case "se":
      return new Translation(se);
    default:
      return new Translation(en);
  }
};
