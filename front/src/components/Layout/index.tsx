import { Outlet } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';

import { theme } from "components/Layout/theme";
import { MainContainer, GlobalStyle } from "./style";

export default function Layout() {
  return (
    <>
      <GlobalStyle theme={theme} />
      <MainContainer theme={theme}>
        <Header />
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
}