import { theme, GlobalStyle } from "components/Layout/theme";
import { MainContainer } from "./style";
import Home from "controller/Home";

export default function LayoutHome() {
  return (
    <>
      <GlobalStyle theme={theme} />
      <MainContainer theme={theme}>
        <Home />
      </MainContainer>
    </>
  );
}