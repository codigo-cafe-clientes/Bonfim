import { Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { theme, GlobalStyle } from "components/Layout/theme";
import { MainContainer } from "./style";
import Hero from "components/Hero";

import Contato from "controller/Contato";
import Servicos from "controller/Servicos";
import Sobre from "controller/Sobre";

export default function LayoutPage() {

  const [ title, setTitle ] = useState<string>();
  const [ background, setBackground ] = useState<string>();

  return (
    <>
      <GlobalStyle theme={theme} />
      <Hero title={title} background={background} />
      <MainContainer theme={theme}>
        <Routes>
          <Route path='empresa-bonfim-contabilidade' element={<Sobre setTitle={setTitle} setBackground={setBackground} />} />
          <Route path='servicos' element={<Servicos setTitle={setTitle} setBackground={setBackground} />} />
          <Route path='contato' element={<Contato setTitle={setTitle} setBackground={setBackground} />} />
        </Routes>
        <Outlet />
      </MainContainer>
    </>
  );
}