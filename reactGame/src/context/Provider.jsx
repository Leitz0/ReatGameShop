import { useState } from "react";
import {PropTypes} from "prop-types";
import Context from "./Context";

const defaultUsuario = {
  nome: "",
  email: "",
  senha: "",
};

export default function Provider({ children }) {
  const [usuario, setUsuario] = useState(defaultUsuario);

  return <Context.Provider value={{ usuario, setUsuario }}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};