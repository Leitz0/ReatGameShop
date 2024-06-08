import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import CardProduto from "../components/CardProduto";
import Navbar from "../components/Navbar";
import "./Produtos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const dados = async () => {
      const data = await fetch("http://localhost:3000/produto");
      const response = await data.json();
      console.log(response);
      setProdutos(response);
    };
    dados();
  }, []);
  return (
    <>
      <Navbar />
      <Container maxWidth={false}>
        <h1>PRODUTOS</h1>
        <div className="container">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </Container>
    </>
  );
}
