import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Produto from "../Pages/Produto"
import Pedido from "../Pages/Pedido"


const Routes =() => {
    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route exact path= {'/'} component ={Home}/>
            <Route exact path= {'/login'} component ={Login}/>
            <Route exact path= {'/produtos'} component ={Produto}/>
            <Route exact path= {'/pedido'} component ={Pedido}/>


        </Switch>
        
        </BrowserRouter>
        </>
    )
}
export default Routes