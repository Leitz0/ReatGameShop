import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import CardPedido from "../components/CardPedido";
import Context from "../context/Context";
import api from "../api/api";
import Footer from "../components/Footer";

export default function Pedido() {
  const { usuario } = useContext(Context);
  const history = useHistory();
  const [pedidos, setPedidos] = useState();

  useEffect(() => {
    if (usuario?.nome === "") return history.push("/login");
    getPedido();
  }, []);

  const getPedido = async () => {
    const response = await api.get(`/pedido?IdUSer=${usuario.id}`);
    setPedidos(response.data);
  };
  return (
    <>
      <div>
        <Navbar />
        {pedidos &&
          pedidos.length > 0 &&
          pedidos.map((pedido) => <CardPedido key={pedido.id} pedido={pedido} />)}
      </div>
      <Footer />
    </>
  );
}
