/**
 * Default configuration options for the text story maker.
 */
export interface IOptions {
  textFont: number;
  textSize: number;
  textLineHeight: number;
  textLetterSpacing: number;
  textColor: number;
  textAlign: string;
  textBold: boolean;
  textItalic: boolean;
  textUppercase: boolean;
  textEffect: string;
  textStroke: string;
  textStrokeSize: number;
  textShadow: string;
  textShadowSize: number;
  text: string;
  boxBackground: string;
  boxOuterPadding: number;
  boxInnerPadding: number;
  boxBorderRadius: number;
  boxBackgroundOpacity: number;
  boxGlossy: string;
  boxGlossyBlur: number;
  boxGlossyShadow: number;
  cardRatio: string;
  bgType: string;
  bgColor: number;
  downloadSize: string;
}

export const defaultOptions: IOptions = {
  // Typography
  textFont: 0,
  textSize: 1.5,
  textLineHeight: 1.3,
  textLetterSpacing: 0,
  textColor: 0,
  textAlign: "center",
  textBold: false,
  textItalic: false,
  textUppercase: false,
  textEffect: "",

  // Text Effect
  textStroke: "",
  textStrokeSize: 1,
  textShadow: "",
  textShadowSize: 0.1,

  // Content
  text: "",

  // Box
  boxBackground: "",
  boxOuterPadding: 10,
  boxInnerPadding: 0,
  boxBorderRadius: 0,
  boxBackgroundOpacity: 0.15,
  boxGlossy: "",
  boxGlossyBlur: 4,
  boxGlossyShadow: 4,

  // Layout
  cardRatio: "9/16",

  // Background
  bgType: "gradient",
  bgColor: 0,

  // Download
  downloadSize: "2k",
};
