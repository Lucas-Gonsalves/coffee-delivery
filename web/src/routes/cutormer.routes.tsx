import { Route, Routes } from "react-router-dom";

import { Layout } from "../layout";

import { Home } from "../pages/Home";
import { Sucess } from "../pages/Sucess";
import { Checkout } from "../pages/Checkout";

import { ManageCookiesKeysToUse } from "../hooks/cookies/manageCookieKeys";
import { FormOrderSchemaProps } from "../pages/Checkout/OrderForm";
import { useCookies } from "react-cookie";
import { NotFound } from "../pages/NotFound";


export function CustomerRoutes() {

  const { userFormKey } = ManageCookiesKeysToUse;
  const [ cookies ] = useCookies([userFormKey]);

  const userFormCookieExists: FormOrderSchemaProps = cookies[userFormKey];

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        
        { userFormCookieExists &&
          <Route path="/sucess" element={<Sucess/>} />
        }

      </Route>
    </Routes>
  )
};