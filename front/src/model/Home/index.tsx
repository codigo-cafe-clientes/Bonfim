import {iSobre, iCliente} from "interfaces/interfaceHome";
import DataHomeSobre from "./_sobre.json";
import DataHomeCliente from "./_cliente.json";

export function mSobre():iSobre {
  return DataHomeSobre;
}

export function mCliente():iCliente[] {
  return DataHomeCliente;
}