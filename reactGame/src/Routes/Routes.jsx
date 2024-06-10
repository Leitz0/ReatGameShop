import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produtos from "../Pages/Produtos";
import Pedido from "../Pages/Pedido";
import Cadastro from "../Pages/Cadastro";
import ProdutoDetalhe from "../Pages/ProdutoDetalhe";
import Carrinho from "../Pages/Carrinho";
import ProdutosCategoria from "../Pages/ProdutoCategoria";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/produtos"} component={Produtos} />
        <Route exact path={"/produto/:id"} component={ProdutoDetalhe} />
        <Route exact path={"/produtos/:categoria"} component={ProdutosCategoria} />
        <Route exact path={"/pedidos"} component={Pedido} />
        <Route exact path={"/cadastro"} component={Cadastro} />
        <Route exact path={"/carrinho"} component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
