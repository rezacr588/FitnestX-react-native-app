import { ThemeProvider } from "styled-components";
import React from "react";
import { CustomizedDefaultTheme } from "./style/theme";

export default function Src() {
  return <ThemeProvider theme={CustomizedDefaultTheme}></ThemeProvider>;
}
