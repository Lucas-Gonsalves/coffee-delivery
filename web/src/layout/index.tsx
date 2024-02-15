import { LayoutContainer, LayoutContent } from "./styles";
import { Outlet } from "react-router-dom"; 


export function Layout() {

  return (
    <LayoutContainer>
      <LayoutContent>
        

        <Outlet />

      </LayoutContent>
    </LayoutContainer>
  );
};