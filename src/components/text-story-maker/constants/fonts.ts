import { Comfortaa as ComfortaaFont } from "next/font/google";
import { Montserrat_Alternates as MontserratAlternatesFont } from "next/font/google";
import { Nerko_One as NerkoOneFont } from "next/font/google";
import { Hind as HindFont } from "next/font/google";
import { Teko as TekoFont } from "next/font/google";
import { Kalam as KalamFont } from "next/font/google";
import { Mukta as MuktaFont } from "next/font/google";
import { Martel as MartelFont } from "next/font/google";
import { Khand as KhandFont } from "next/font/google";
import { Bebas_Neue as BebasNeueFont } from "next/font/google";
import { Montserrat as MontserratFont } from "next/font/google";
import { Josefin_Sans as JosefinSansFont } from "next/font/google";
import { Josefin_Slab as JosefinSlabFont } from "next/font/google";
import { Anonymous_Pro as AnonymousProFont } from "next/font/google";
import { Libre_Baskerville as LibreBaskervilleFont } from "next/font/google";
import { EB_Garamond as EBGaramondFont } from "next/font/google";
import { Caveat as CaveatFont } from "next/font/google";
import { Sacramento as SacramentoFont } from "next/font/google";
import { Dancing_Script as DancingScriptFont } from "next/font/google";
import { Clicker_Script as ClickerScriptFont } from "next/font/google";
import { Fresca as FrescaFont } from "next/font/google";
const Comfortaa = ComfortaaFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Montserrat_Alternates = MontserratAlternatesFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Nerko_One = NerkoOneFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
const Hind = HindFont({
  subsets: ["latin", "devanagari"],
  display: "swap",
  weight: ["400", "700"],
});
const Teko = TekoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Kalam = KalamFont({
  subsets: ["latin", "devanagari"],
  display: "swap",
  weight: ["400", "700"],
});
const Mukta = MuktaFont({
  subsets: ["latin", "devanagari"],
  display: "swap",
  weight: ["400", "700"],
});
const Martel = MartelFont({
  subsets: ["latin", "devanagari"],
  display: "swap",
  weight: ["400", "700"],
});
const Khand = KhandFont({
  subsets: ["latin", "devanagari"],
  display: "swap",
  weight: ["400", "700"],
});
const Josefin_Sans = JosefinSansFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Josefin_Slab = JosefinSlabFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Anonymous_Pro = AnonymousProFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Bebas_Neue = BebasNeueFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
}); // Exclude 700
const Montserrat = MontserratFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Libre_Baskerville = LibreBaskervilleFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const EB_Garamond = EBGaramondFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Sacramento = SacramentoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
}); // Exclude 700
const Caveat = CaveatFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Dancing_Script = DancingScriptFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Clicker_Script = ClickerScriptFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
const Fresca = FrescaFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export type Font = {
  key: string;
  label: string;
  class: string;
};

// prettier-ignore
export const fonts: Font[] = [
  { key: "comfortaa", label: "Comfortaa", class: Comfortaa.className },
  { key: "montserrat_alternates", label: "Montserrat (Alt)", class: Montserrat_Alternates.className},
  { key: "nerko_one", label: "Nerko", class: Nerko_One.className },
  { key: "hind", label: "हिन्द", class: Hind.className },
  { key: "teko", label: "टेको", class: Teko.className },
  { key: "kalam", label: "कलम", class: Kalam.className },
  { key: "mukta", label: "मुक्ता", class: Mukta.className },
  { key: "martel", label: "मार्टल", class: Martel.className },
  { key: "khand", label: "खंड", class: Khand.className },
  { key: "bebas_neue", label: "Bebas Neue", class: Bebas_Neue.className },
  { key: "montserrat", label: "Montserrat", class: Montserrat.className },
  { key: "josefin_sans", label: "Josefin Sans", class: Josefin_Sans.className },
  { key: "josefin_slab", label: "Josefin Slab", class: Josefin_Slab.className },
  { key: "anonymous_pro", label: "Anonymous Pro", class: Anonymous_Pro.className},
  { key: "libre_baskerville", label: "Libre", class: Libre_Baskerville.className},
  { key: "eb_garamond", label: "Garamond", class: EB_Garamond.className },
  { key: "caveat", label: "Caveat", class: Caveat.className },
  { key: "sacramento", label: "Sacramento", class: Sacramento.className },
  { key: "dancing_script", label: "Dancing", class: Dancing_Script.className },
  { key: "clicker_script", label: "Clicker", class: Clicker_Script.className },
  { key: "fresca", label: "Fresca", class: Fresca.className },
];
