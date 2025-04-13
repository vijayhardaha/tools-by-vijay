import { Comfortaa as ComfortaaFont } from "next/font/google";
import { Montserrat_Alternates as MontserratAlternatesFont } from "next/font/google";
import { Hind as HindFont } from "next/font/google";
import { Kalam as KalamFont } from "next/font/google";
import { Mukta as MuktaFont } from "next/font/google";
import { Martel as MartelFont } from "next/font/google";
import { Khand as KhandFont } from "next/font/google";
import { Teko as TekoFont } from "next/font/google";
import { Josefin_Slab as JosefinSlabFont } from "next/font/google";
import { Jost as JostFont } from "next/font/google";
import { Poppins as PoppinsFont } from "next/font/google";
import { Anonymous_Pro as AnonymousProFont } from "next/font/google";
import { Josefin_Sans as JosefinSansFont } from "next/font/google";
import { Pacifico as PacificoFont } from "next/font/google";
import { Caveat as CaveatFont } from "next/font/google";
import { Crimson_Text as CrimsonTextFont } from "next/font/google";
import { Roboto as RobotoFont } from "next/font/google";
import { PT_Mono as PTMonoFont } from "next/font/google";
import { Noto_Sans as NotoSansFont } from "next/font/google";
import { Bebas_Neue as BebasNeueFont } from "next/font/google";
import { Roboto_Condensed as RobotoCondensedFont } from "next/font/google";
import { Montserrat as MontserratFont } from "next/font/google";
import { Libre_Baskerville as LibreBaskervilleFont } from "next/font/google";
import { Proza_Libre as ProzaLibreFont } from "next/font/google";
import { Lexend as LexendFont } from "next/font/google";
import { Cormorant_Garamond as CormorantGaramondFont } from "next/font/google";
import { EB_Garamond as EBGaramondFont } from "next/font/google";
import { Sacramento as SacramentoFont } from "next/font/google";
import { Architects_Daughter as ArchitectsDaughterFont } from "next/font/google";

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
const Hind = HindFont({
  subsets: ["latin", "devanagari"],
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
const Josefin_Slab = JosefinSlabFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Jost = JostFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Poppins = PoppinsFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Anonymous_Pro = AnonymousProFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Josefin_Sans = JosefinSansFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Pacifico = PacificoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
}); // Exclude 700
const Caveat = CaveatFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Crimson_Text = CrimsonTextFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Roboto = RobotoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const PT_Mono = PTMonoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
}); // Exclude 700
const Noto_Sans = NotoSansFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Bebas_Neue = BebasNeueFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
}); // Exclude 700
const Roboto_Condensed = RobotoCondensedFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
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
const Proza_Libre = ProzaLibreFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Lexend = LexendFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const Cormorant_Garamond = CormorantGaramondFont({
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
const Architects_Daughter = ArchitectsDaughterFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
}); // Exclude 700
const Teko = TekoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

// prettier-ignore
export const fonts = [
  { key: "comfortaa", label: "Comfortaa", class: Comfortaa.className },
  { key: "montserrat_alternates", label: "Montserrat Alternates", class: Montserrat_Alternates.className},
  { key: "hind", label: "Hind", class: Hind.className },
  { key: "kalam", label: "Kalam", class: Kalam.className },
  { key: "mukta", label: "Mukta", class: Mukta.className },
  { key: "martel", label: "Martel", class: Martel.className },
  { key: "khand", label: "Khand", class: Khand.className },
  { key: "teko", label: "Teko", class: Teko.className },
  { key: "josefin_slab", label: "Josefin Slab", class: Josefin_Slab.className },
  { key: "jost", label: "Jost", class: Jost.className },
  { key: "poppins", label: "Poppins", class: Poppins.className },
  { key: "anonymous_pro", label: "Anonymous Pro", class: Anonymous_Pro.className},
  { key: "josefin_sans", label: "Josefin Sans", class: Josefin_Sans.className },
  { key: "pacifico", label: "Pacifico", class: Pacifico.className },
  { key: "caveat", label: "Caveat", class: Caveat.className },
  { key: "crimson_text", label: "Crimson Text", class: Crimson_Text.className },
  { key: "roboto", label: "Roboto", class: Roboto.className },
  { key: "pt_mono", label: "PT Mono", class: PT_Mono.className },
  { key: "noto_sans", label: "Noto Sans", class: Noto_Sans.className },
  { key: "bebas_neue", label: "Bebas Neue", class: Bebas_Neue.className },
  { key: "roboto_condensed", label: "Roboto Condensed", class: Roboto_Condensed.className},
  { key: "montserrat", label: "Montserrat", class: Montserrat.className },
  { key: "libre_baskerville", label: "Libre Baskerville", class: Libre_Baskerville.className},
  { key: "proza_libre", label: "Proza Libre", class: Proza_Libre.className },
  { key: "lexend", label: "Lexend", class: Lexend.className },
  { key: "cormorant_garamond", label: "Cormorant Garamond", class: Cormorant_Garamond.className},
  { key: "eb_garamond", label: "EB Garamond", class: EB_Garamond.className },
  { key: "sacramento", label: "Sacramento", class: Sacramento.className },
  { key: "architects_daughter", label: "Architects Daughter", class: Architects_Daughter.className},
];
