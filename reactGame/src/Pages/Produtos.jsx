import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import CardProduto from "../components/CardProduto";
import Navbar from "../components/Navbar";
import "./Produtos.css";
import { Button, Link } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer";
import { Search } from "@mui/icons-material";




export default function Produtos() {
  const [filtro, setFiltro] = useState('')
  const [produtosFiltrados, setProdutosFiltrados] = useState([])
  const [produtos, setProdutos] = useState([]);

  

  const history = useHistory();

  const handlePesquisar = () => {
    if(filtro.length > 0){
      const filterProdutos = produtos.filter((produto) => produto.nome.toLowerCase().normalize()
      .includes(filtro.toLocaleLowerCase().normalize()) )
      return setProdutosFiltrados(filterProdutos)
    } 
    setProdutosFiltrados(produtos)
  }

  useEffect(() => {
    const dados = async () => {
      const data = await fetch("http://localhost:3001/produto");
      const response = await data.json();
      const disponiveis = response.filter((produto) => produto.quantidade > 0);
      setProdutos(disponiveis);
      setProdutosFiltrados(disponiveis);
    };
    dados();
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>

      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/Xbox One")}>Xbox One</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/Xbox Series")}>Xbox Series</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/PS4")}>PS4</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/PS5")}>PS5</Button>
      <Button style={{ margin: "10px" }}  variant="outlined" onClick={() => history.push("/produtos/PC")}>PC</Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      
      <input type="text" style={{border: "1px outset #364b74", borderRadius:"5px"}} placeholder="Pesquisar produto..." onChange={(p) => (setFiltro(p.target.value))} />
      <Button style={{ margin: "0", backgroundColor:"#364b74" }} variant="contained" onClick={handlePesquisar}><Search /></Button>
      </div>
      <Container maxWidth={false}>
        <Typography
          variant="h2"
          display="block"
          align="center"
          
          sx={{
            color:"#364b74",
            margin: "2rem 0",
          }}
        >
          PRODUTOS
        </Typography>
        <div className="container">
          {produtosFiltrados.map((produto) => (
            <CardProduto key={produto.id} produto={produto} saibaMais />
          ))}
        </div>
      </Container>
      <Footer/>
    </>
  );

}
