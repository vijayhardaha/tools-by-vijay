/**
 * Background color options for the text story maker.
 * @typedef {Object} BgColors
 * @property {Object.<string, string>} solid - Solid background color options.
 * @property {Object.<string, string>} gradient - Gradient background color options.
 * @property {Object.<string, string>} mesh - Mesh background color options.
 */

/** @type {BgColors} */
export const bgColors = {
  solid: {
    color1: "bg-red-500",
    color2: "bg-yellow-500",
    color3: "bg-green-500",
    color4: "bg-blue-500",
    color5: "bg-purple-500",
    color6: "bg-pink-500",
    color7: "bg-gray-500",
    color8: "bg-black",
    color9: "bg-white",
    color10: "bg-orange-500",
    color11: "bg-teal-500",
    color12: "bg-cyan-500",
    color13: "bg-amber-500",
    color14: "bg-lime-500",
    color15: "bg-emerald-500",
    color16: "bg-sky-500",
    color17: "bg-indigo-500",
    color18: "bg-violet-500",
    color19: "bg-fuchsia-500",
    color20: "bg-rose-500",
    color21: "bg-red-600",
    color22: "bg-yellow-600",
    color23: "bg-green-600",
    color24: "bg-blue-600",
    color25: "bg-purple-600",
    color26: "bg-pink-600",
    color27: "bg-gray-600",
    color28: "bg-black-600",
    color29: "bg-white-600",
    color30: "bg-neutral-500",
  },
  gradient: {
    color1: "bg-linear-to-tr from-red-500 via-orange-500 to-yellow-500",
    color2: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    color3:
      "bg-[linear-gradient(60deg,_#f79533,_#f37055,_#ef4e7b,_#a166ab,_#5073b8,_#1098ad,_#07b39b,_#6fba82)]",
    color4: "bg-linear-to-tr from-blue-500 via-cyan-500 to-teal-500",
    color5: "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500",
    color6: "bg-linear-to-tr from-rose-500 via-pink-500 to-red-500",
    color7: "bg-linear-to-tr from-gray-700 via-rose-500 to-orange-400",
    color8: "bg-linear-to-tr from-gray-400 via-pink-500 to-rose-400",
    color9: "bg-linear-to-tr from-gray-300 via-yellow-500 to-amber-400",
    color10: "bg-linear-to-tr from-yellow-500 via-lime-500 to-green-500",
    color11: "bg-linear-to-tr from-blue-500 via-cyan-500 to-teal-500",
    color12: "bg-linear-to-tr from-yellow-200 via-yellow-400 to-yellow-600",
    color13: "bg-linear-to-tr from-green-200 via-teal-400 to-cyan-600",
    color14: "bg-linear-to-tr from-pink-200 via-purple-400 to-indigo-600",
    color15: "bg-linear-to-tr from-red-200 via-yellow-400 to-green-600",
    color16: "bg-linear-to-tr from-green-200 via-emerald-400 to-teal-600",
    color17: "bg-linear-to-tr from-orange-200 via-red-400 to-pink-600",
    color18: "bg-linear-to-tr from-amber-200 via-orange-400 to-red-600",
    color19: "bg-linear-to-tr from-gray-800 via-blue-700 to-gray-900",
    color20: "bg-linear-to-tr from-purple-500 via-indigo-500 to-blue-500",
    color21:
      "bg-[linear-gradient(45deg,_#ff9a9e,_#fad0c4,_#fad0c4,_#fbc2eb,_#a18cd1,_#fbc2eb,_#fad0c4,_#ff9a9e)]",
    color22:
      "bg-[linear-gradient(90deg,_#ff9966,_#ff5e62,_#ff9966,_#ff5e62,_#ff9966,_#ff5e62,_#ff9966,_#ff5e62)]",
    color23:
      "bg-[linear-gradient(120deg,_#ff6a00,_#ee0979,_#ff6a00,_#ee0979,_#ff6a00,_#ee0979,_#ff6a00,_#ee0979)]",
    color24:
      "bg-[linear-gradient(135deg,_#00c6ff,_#0072ff,_#00c6ff,_#0072ff,_#00c6ff,_#0072ff,_#00c6ff,_#0072ff)]",
    color25:
      "bg-[linear-gradient(150deg,_#f953c6,_#b91d73,_#f953c6,_#b91d73,_#f953c6,_#b91d73,_#f953c6,_#b91d73)]",
    color26:
      "bg-[linear-gradient(180deg,_#4facfe,_#00f2fe,_#4facfe,_#00f2fe,_#4facfe,_#00f2fe,_#4facfe,_#00f2fe)]",
    color27:
      "bg-[linear-gradient(200deg,_#43e97b,_#38f9d7,_#43e97b,_#38f9d7,_#43e97b,_#38f9d7,_#43e97b,_#38f9d7)]",
    color28:
      "bg-[linear-gradient(225deg,_#fa709a,_#fee140,_#fa709a,_#fee140,_#fa709a,_#fee140,_#fa709a,_#fee140)]",
    color29:
      "bg-[linear-gradient(240deg,_#30cfd0,_#330867,_#30cfd0,_#330867,_#30cfd0,_#330867,_#30cfd0,_#330867)]",
    color30:
      "bg-[linear-gradient(270deg,_#a8edea,_#fed6e3,_#a8edea,_#fed6e3,_#a8edea,_#fed6e3,_#a8edea,_#fed6e3)]",
  },
  mesh: {
    color1:
      "bg-[#7f1d1d] [background-image:radial-gradient(at_87%_94%,#c026d3_0,transparent_72%),radial-gradient(at_27%_100%,#3f3f46_0,transparent_64%),radial-gradient(at_46%_91%,#0c4a6e_0,transparent_16%),radial-gradient(at_12%_87%,#0d9488_0,transparent_84%),radial-gradient(at_80%_15%,#bfdbfe_0,transparent_34%),radial-gradient(at_56%_60%,#f97316_0,transparent_81%)]",
    color2:
      "bg-[#7c3aed] [background-image:radial-gradient(at_47%_8%,#a5f3fc_0,transparent_32%),radial-gradient(at_80%_96%,#38bdf8_0,transparent_31%),radial-gradient(at_8%_6%,#10b981_0,transparent_43%),radial-gradient(at_14%_82%,#e2e8f0_0,transparent_18%),radial-gradient(at_1%_100%,#075985_0,transparent_73%),radial-gradient(at_5%_31%,#9f1239_0,transparent_16%)]",
    color3:
      "bg-[#4f46e5] [background-image:radial-gradient(at_59%_25%,#a78bfa_0,transparent_6%),radial-gradient(at_19%_62%,#2563eb_0,transparent_11%),radial-gradient(at_94%_96%,#fde68a_0,transparent_61%),radial-gradient(at_46%_97%,#e5e5e5_0,transparent_44%),radial-gradient(at_22%_8%,#dc2626_0,transparent_71%),radial-gradient(at_48%_45%,#4338ca_0,transparent_42%)]",
    color4:
      "bg-[#ffffff] [background-image:radial-gradient(at_50%_8%,#bfdbfe_0,transparent_20%),radial-gradient(at_19%_96%,#f9fafb_0,transparent_29%),radial-gradient(at_32%_21%,#155e75_0,transparent_58%),radial-gradient(at_33%_27%,#f3e8ff_0,transparent_37%),radial-gradient(at_15%_89%,#fef9c3_0,transparent_70%),radial-gradient(at_7%_55%,#0c4a6e_0,transparent_15%)]",
    color5:
      "bg-[#f9fafb] [background-image:radial-gradient(at_73%_59%,#0d9488_0,transparent_76%),radial-gradient(at_7%_24%,#1e293b_0,transparent_65%),radial-gradient(at_75%_46%,#d9f99d_0,transparent_70%),radial-gradient(at_53%_58%,#0e7490_0,transparent_31%),radial-gradient(at_62%_98%,#e4e4e7_0,transparent_78%),radial-gradient(at_18%_31%,#e879f9_0,transparent_59%)]",
    color6:
      "bg-[#ff0000] [background-image:radial-gradient(at_40%_20%,#fca66b_0px,transparent_50%),radial-gradient(at_80%_0%,#2cd3f0_0px,transparent_50%),radial-gradient(at_0%_50%,#ffe5e5_0px,transparent_50%),radial-gradient(at_80%_50%,#f280b6_0px,transparent_50%),radial-gradient(at_0%_100%,#fcb079_0px,transparent_50%),radial-gradient(at_80%_100%,#8d8dfc_0px,transparent_50%),radial-gradient(at_0%_0%,#f280b6_0px,transparent_50%)]",
    color7:
      "bg-[#e4ff99] [background-image:radial-gradient(at_88%_16%,#56d6a0_0px,transparent_50%),radial-gradient(at_70%_45%,#dc7cf3_0px,transparent_50%),radial-gradient(at_3%_77%,#83c8e8_0px,transparent_50%),radial-gradient(at_70%_32%,#c286d3_0px,transparent_50%),radial-gradient(at_66%_35%,#f3e475_0px,transparent_50%),radial-gradient(at_34%_20%,#4effe0_0px,transparent_50%),radial-gradient(at_2%_2%,#b2b6f3_0px,transparent_50%)]",
    color8:
      "bg-[#99fff5] [background-image:radial-gradient(at_68%_74%,#6ec3ff_0px,transparent_50%),radial-gradient(at_62%_9%,#7c85e3_0px,transparent_50%),radial-gradient(at_92%_80%,#adcdf2_0px,transparent_50%),radial-gradient(at_17%_15%,#c7a3f5_0px,transparent_50%),radial-gradient(at_67%_99%,#7fd8b7_0px,transparent_50%),radial-gradient(at_80%_19%,#f3d56b_0px,transparent_50%),radial-gradient(at_59%_79%,#f5a3c7_0px,transparent_50%)]",
    color9:
      "bg-[#99ff99] [background-image:radial-gradient(at_39%_92%,#5c6ef3_0px,transparent_50%),radial-gradient(at_98%_54%,#f3f36a_0px,transparent_50%),radial-gradient(at_85%_20%,#f0e775_0px,transparent_50%),radial-gradient(at_41%_24%,#db75e6_0px,transparent_50%),radial-gradient(at_31%_72%,#eb8af0_0px,transparent_50%),radial-gradient(at_78%_76%,#a4dd88_0px,transparent_50%),radial-gradient(at_89%_75%,#f57387_0px,transparent_50%)]",
    color10:
      "bg-[#99ff99] [background-image:radial-gradient(at_39%_92%,#d255d3_0px,transparent_50%),radial-gradient(at_98%_54%,#6df3a5_0px,transparent_50%),radial-gradient(at_85%_20%,#71e38c_0px,transparent_50%),radial-gradient(at_41%_24%,#f57a87_0px,transparent_50%),radial-gradient(at_31%_72%,#f58a95_0px,transparent_50%),radial-gradient(at_78%_76%,#64d7aa_0px,transparent_50%),radial-gradient(at_89%_75%,#f5e76a_0px,transparent_50%)]",
    color11:
      "bg-[#99faff] [background-image:radial-gradient(at_39%_80%,#6ff2a3_0px,transparent_50%),radial-gradient(at_68%_66%,#a6c9f2_0px,transparent_50%),radial-gradient(at_0%_21%,#90efad_0px,transparent_50%)]",
    color12:
      "bg-[#164e63] [background-image:radial-gradient(at_90%_25%,#94a3b8_0,transparent_31%),radial-gradient(at_7%_63%,#0c4a6e_0,transparent_48%),radial-gradient(at_73%_40%,#e879f9_0,transparent_61%),radial-gradient(at_4%_100%,#065f46_0,transparent_12%),radial-gradient(at_13%_32%,#22c55e_0,transparent_33%),radial-gradient(at_86%_62%,#fdba74_0,transparent_79%)]",
  },
};
