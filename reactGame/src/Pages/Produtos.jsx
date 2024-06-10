import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import CardProduto from "../components/CardProduto";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import "./Produtos.css";
import { Button, Link } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const history = useHistory()

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
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/eletronico")}>Eletrônicos</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/perifericos")}>Periféricos</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/jogo")}>Jogos</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/quadrinho")}>Quadrinhos</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/actionfigures")}>Action Figures</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/outros")}>Outros</Button>
      </div>
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
