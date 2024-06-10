import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import CardPedido from "../components/CardPedido";
import Context from "../context/Context";
import api from "../api/api"

export default function Pedido() {
  const {  usuario } = useContext(Context);
 
  const [pedidos, setPedidos] = useState()

  useEffect(() => {
    getPedido()
  }, [])

  const getPedido = async () => {
    const response = await api.get(`/pedido?IdUSer=${usuario.id}`);
    setPedidos(response.data)
    console.log(response)
  }
  return (

    <div>
      <Navbar />
      {pedidos && pedidos.length >0 && pedidos.map((pedido) => (
        <CardPedido key={pedido.id} pedido={pedido} />))}
    </div>


  );
}
