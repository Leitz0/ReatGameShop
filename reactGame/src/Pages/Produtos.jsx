import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import CardProduto from "../components/CardProduto";
import Navbar from "../components/Navbar";
import "./Produtos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const dados = async () => {
      const data = await fetch("http://localhost:3001/produto");
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
        <Typography
          variant="h2"
          display="block"
          align="center"
          color="text.primary"
          sx={{
            margin: "2rem 0",
          }}
        >
          PRODUTOS
        </Typography>
        <div className="container">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} saibaMais />
          ))}
        </div>
      </Container>

    </>
  );
}
