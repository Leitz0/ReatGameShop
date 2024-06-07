import { useState } from "react";
import {PropTypes} from "prop-types";
import Context from "./Context";

export default function Provider({ children }) {
  const [user, setUser] = useState("");

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};