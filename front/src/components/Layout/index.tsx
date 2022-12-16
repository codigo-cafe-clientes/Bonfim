import { Outlet } from "react-router-dom";

import { theme } from "components/Layout/theme";
import { MainContainer, GlobalStyle } from "./style";

export default function Layout() {
  return (
    <>
      <GlobalStyle theme={theme} />
      <MainContainer theme={theme}>
        <Outlet />
      </MainContainer>
    </>
  );
}