module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#100f0f",
          "900_7f": "#0000007f",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_01": "#000000",
          "900_03": "#030303",
          "900_02": "#060606",
          "900_4c": "#0000004c",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
          "900_26": "#00000026",
        },
        white: { A700_b2: "#ffffffb2", A700: "#ffffff" },
        gray: {
          50: "#f8f8f8",
          100: "#f9f4f4",
          200: "#ececec",
          300: "#e2e2e2",
          400: "#b8b8ba",
          500: "#a3a3a3",
          600: "#727272",
          700: "#5a5454",
          900: "#13131a",
          "50_01": "#fcfcfc",
          "900_99": "#13131a99",
          "900_19": "#13131a19",
          "900_4c": "#13131a4c",
          "200_01": "#e8e9e9",
          "800_3f": "#3838383f",
          "800_19": "#39393919",
          "900_66": "#13131a66",
          "100_07": "#f0f3f8",
          "100_06": "#f3f5f7",
          "100_03": "#f7f6f6",
          "100_02": "#f8f7f7",
          "900_1e": "#13131a1e",
          "700_04": "#666666",
          "100_05": "#f7f7f7",
          "100_04": "#f5f5f5",
          "400_01": "#b1acb6",
          "400_02": "#bdbfc8",
          "100_01": "#eff8ff",
          "700_02": "#686868",
          "700_03": "#5a5353",
          "700_01": "#5d5d5d",
          "500_01": "#adadad",
          "500_03": "#a1a1a1",
          "500_02": "#9f9f9f",
          "900_02": "#0b0b28",
          "600_02": "#808080",
          "600_01": "#828282",
          "900_87": "#0b0b2887",
          "900_01": "#222529",
          "300_01": "#e0e0e0",
          "900_7f": "#13131a7f",
          "900_90": "#13131a90",
        },
        purple: {
          700: "#743c95",
          "700_3d": "#743c953d",
          "700_87": "#743c9587",
          "700_5e": "#743c955e",
          "700_63": "#743c9563",
        },
        blue: {
          700: "#1976d2",
          A400: "#1877f2",
          A200: "#5599ff",
          "700_19": "#307bc119",
        },
        light_green: { 700: "#699759", "700_4c": "#6997594c" },
        red: { 700: "#ec2121", A700_3f: "#e400013f", "800_19": "#b9343419" },
        green: { 500: "#4caf50", 600: "#46b520", "600_01": "#46b41f" },
        lime: {
          700: "#cba13d",
          "700_90": "#cba13d90",
          "700_7e": "#cba13d7e",
          "800_cc": "#a78d4ecc",
          "700_6c": "#cba13d6c",
          "700_cc": "#cba13dcc",
          "700_75": "#cba13d75",
          "700_87": "#cba13d87",
          "700_a2": "#cba13da2",
        },
        blue_gray: {
          50: "#eff0f6",
          100: "#d9d9d9",
          300: "#8d98aa",
          400: "#898989",
          700: "#535353",
          900: "#2a2e33",
          "700_01": "#4c535f",
          "100_01": "#d6d1da",
          "300_01": "#8c97a7",
        },
        amber: { 500: "#ffc107" },
        cyan: { 400: "#32a3c8" },
        light_blue: { 800: "#006fcf" },
        deep_orange: { A400: "#ff3d00" },
        indigo: { 900: "#202e86" },
      },
      boxShadow: {
        bs: "inset 1px 0px  8px 0px #307bc119",
        bs24: "0px 0px  16px 0px #3838383f",
        bs12: "0px 4px  16px 0px #e400013f",
        bs5: "0px 4px  16px 0px #743c953d",
        bs3: "0px 4px  4px 0px #0000003f",
        bs10: "0px 8px  9px 0px #0000003f",
        bs22: "0px 0px  10px 0px #00000019",
        bs9: "0px 0px  28px 0px #39393919",
        bs19: "0px 3.1px  3px 0px #0000003f",
        bs18: "0px 4px  18px 0px #0000000c",
        bs20: "0px 5px  20px 0px #0000000c",
        bs4: "0px 3.54px  14px 0px #e400013f",
        bs15: "0px 3.98px  15px 0px #e400013f",
        bs14: "0px 4.24px  4px 0px #0000003f",
        bs6: "0px 5.19px  20px 0px #e400013f",
        bs7: "0px 5.9px  5px 0px #00000019",
        bs11: "0px 6.08px  24px 0px #e400013f",
        bs2: "-6px -1px  4px 0px #00000019",
        bs16: "0px 7.54px  30px 0px #e400013f",
        bs17: "0px 9.5px  9px 0px #00000019",
        bs23: "inset 1.27px 0px  10px 0px #307bc119",
        bs1: "4px 30px  4px 0px #00000019",
        bs21: "0px 4.72px  18px 0px #0000000c",
        bs13: "0px 8.89px  8px 0px #00000019",
        bs8: "0px -12.6px  45px 0px #00000026",
      },
      fontFamily: {
        proximasoft: "Proxima Soft",
        poppins: "Poppins",
        dmsans: "DM Sans",
        opensans: "Open Sans",
        inter: "Inter",
        aclonica: "Aclonica",
        museosansrounded: "Museo Sans Rounded",
      },
      backgroundImage: {
        gradient: "linear-gradient(197deg ,#a78d4ecc,#cba13dcc,#cba13dcc)",
        gradient1: "linear-gradient(180deg ,#ffffff,#e8e9e9)",
      },
      textShadow: { ts: "0px 3.54px  14px #e400013f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
