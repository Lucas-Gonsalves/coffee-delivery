import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

import { Routes } from "./routes";
import { MarketContextProvider } from "./contexts/market/market.context";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <MarketContextProvider>
        <Routes/>
      </MarketContextProvider>
    
    </ThemeProvider>
  );
};