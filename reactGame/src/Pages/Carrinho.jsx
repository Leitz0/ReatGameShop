import { useContext } from "react";
import TabelaCarrinho from "../components/TabelaCarrinho";
import { Container, Typography, Button, Stack } from "@mui/material";
import Context from "../context/Context";
import Navbar from "../components/Navbar";

export default function Carrinho() {
  const { carrinho, limparCarrinho } = useContext(Context);

  return (
    <>
      <Navbar />

      <Container>
        <Typography variant="h3" align="center">
          Carrinho
        </Typography>
        <br />
        {carrinho.length === 0 ? (
          <Typography variant="h5" align="center">
            Carrinho vazio
          </Typography>
        ) : (
          <TabelaCarrinho itens={carrinho} />
        )}
        <br />
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained">Finalizar Compra</Button>
          <Button onClick={() => limparCarrinho()} variant="contained">
            Limpar Carrinho
          </Button>
        </Stack>
      </Container>
    </>
  );
}
