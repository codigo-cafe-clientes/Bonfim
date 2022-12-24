import { Link } from "react-router-dom";
import { CtaContactDiv } from "./style";

import CtaImage from 'assets/images/banner-contact.png';

export default function CtaContact() {
  return (
    <CtaContactDiv img={CtaImage}>
      <Link to="/contato">Contato</Link>
    </CtaContactDiv>
  );
}