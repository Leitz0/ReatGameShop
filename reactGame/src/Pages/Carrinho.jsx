import { useEffect, useState } from "react";
import TabelaCarrinho from "../components/TabelaCarrinho";
import { Container, Typography, Button, Stack } from "@mui/material";

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/produto");
      const data = await response.json();
      console.log(data);
      setItens(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" >Carrinho</Typography>
      <br />
      <TabelaCarrinho itens={itens} />
      <br />
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained">Finalizar Compra</Button>
        <Button variant="contained">Limpar Carrinho</Button>
      </Stack>
    </Container>
  );
}
