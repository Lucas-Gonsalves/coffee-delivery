import { useContext } from "react";
import { MarketContext, MarketContextProps } from "./market.context";


export function useMarketContext(): MarketContextProps{
  const context = useContext(MarketContext);

  return context;
};