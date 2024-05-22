import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

import { Routes } from "./routes";
import { MarketContextProvider } from "./contexts/market/market.context";
import { CookiesProvider } from "react-cookie";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <MarketContextProvider>
          <Routes/>
        </MarketContextProvider>
      </CookiesProvider>      

    </ThemeProvider>
  );
};