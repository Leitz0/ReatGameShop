import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import api from "../api/api";
import CardProduto from "../components/CardProduto";
import Navbar from "../components/Navbar";

export default function ProdutosCategoria() {
  const { categoria } = useParams();
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await api.get(`/produto?categoria=${categoria}`);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, [categoria]);

  return (
    <>

      <Navbar />
      <h1 style={{textAlign:"center",fontFamily:'Roboto', fontSize: '60px' }}>{categoria}</h1>
      <div className="container">
        
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} saibaMais />
        ))}
      </div>
    </>
  );
}
