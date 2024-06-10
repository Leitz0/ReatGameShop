import { useState } from "react";
import { PropTypes } from "prop-types";
import Context from "./Context";

const defaultUsuario = {
  nome: "",
  email: "",
  senha: "",
};

export default function Provider({ children }) {
  const [usuario, setUsuario] = useState(defaultUsuario);
  const [carrinho, setCarrinho] = useState([]);

  const adicionarItem = (produto) => {
    carrinho.find((item) => item.id === produto.id)
      ? setCarrinho(
          carrinho.map((item) =>
            item.id === produto.id
              ? { ...item, quantidadeComprado: item.quantidadeComprado + 1 }
              : item
          )
        )
      : setCarrinho([...carrinho, { ...produto, quantidadeComprado: 1 }]);
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <Context.Provider
      value={{ usuario, setUsuario, carrinho, adicionarItem, limparCarrinho }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
