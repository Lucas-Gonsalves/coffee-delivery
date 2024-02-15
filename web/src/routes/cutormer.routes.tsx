import { Route, Routes } from "react-router-dom";

import { Layout } from "../layout";

import { Home } from "../pages/Home";
import { Sucess } from "../pages/Sucess";
import { Checkout } from "../pages/Checkout";


export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/sucess" element={<Sucess/>} />

      </Route>
    </Routes>
  )
};