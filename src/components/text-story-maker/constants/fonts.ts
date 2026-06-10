import {
  Comfortaa as ComfortaaFont,
  Montserrat_Alternates as MontserratAlternatesFont,
  Nerko_One as NerkoOneFont,
  Hind as HindFont,
  Teko as TekoFont,
  Kalam as KalamFont,
  Anonymous_Pro as AnonymousProFont,
  EB_Garamond as EBGaramondFont,
  Caveat as CaveatFont,
  Fresca as FrescaFont,
} from 'next/font/google';
const Comfortaa = ComfortaaFont({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const Montserrat_Alternates = MontserratAlternatesFont({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const Nerko_One = NerkoOneFont({ subsets: ['latin'], display: 'swap', weight: ['400'] });
const Hind = HindFont({ subsets: ['latin', 'devanagari'], display: 'swap', weight: ['400', '700'] });
const Teko = TekoFont({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const Kalam = KalamFont({ subsets: ['latin', 'devanagari'], display: 'swap', weight: ['400', '700'] });
const Anonymous_Pro = AnonymousProFont({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const EB_Garamond = EBGaramondFont({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const Caveat = CaveatFont({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const Fresca = FrescaFont({ subsets: ['latin'], display: 'swap', weight: ['400'] });

/**
 * Interface for font options.
 */
export interface Font {
  key: string;
  label: string;
  class: string;
}

// prettier-ignore
export const fonts: Font[] = [
  { key: "comfortaa", label: "Comfortaa", class: Comfortaa.className },
  { key: "montserrat_alternates", label: "Montserrat (Alt)", class: Montserrat_Alternates.className},
  { key: "nerko_one", label: "Nerko", class: Nerko_One.className },
  { key: "hind", label: "हिन्द", class: Hind.className },
  { key: "teko", label: "टेको", class: Teko.className },
  { key: "kalam", label: "कलम", class: Kalam.className },
  { key: "anonymous_pro", label: "Anonymous Pro", class: Anonymous_Pro.className},
  { key: "eb_garamond", label: "Garamond", class: EB_Garamond.className },
  { key: "caveat", label: "Caveat", class: Caveat.className },
  { key: "fresca", label: "Fresca", class: Fresca.className },
];
