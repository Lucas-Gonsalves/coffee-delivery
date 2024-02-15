import { BrowserRouter } from "react-router-dom";
import { CustomerRoutes } from "./cutormer.routes";


export function Routes() {
  return (
    <BrowserRouter>
      <CustomerRoutes/>
    </BrowserRouter>
  );
};