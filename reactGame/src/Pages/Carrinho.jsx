import { useContext } from "react";
import TabelaCarrinho from "../components/TabelaCarrinho";
import { Container, Typography, Button, Stack, Box, Icon } from "@mui/material";
import Context from "../context/Context";
import Navbar from "../components/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Carrinho() {
  const { carrinho, limparCarrinho } = useContext(Context);

  return (
    <>
      <Navbar />
      <Container>
        <Box
          sx={{
            p: 4,
            mt: 4,
            border: "1px solid",
            borderColor: "grey.300",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" align="left">
            <Box display="flex" alignItems="center">
              <ShoppingCartIcon
                sx={{ mr: 1, color: "#364B74", fontSize: 45 }}
              />
              <span style={{ fontFamily: "Helvetica", color: "#364B74" }}>
                Carrinho
              </span>
            </Box>
          </Typography>
          <br />
          {carrinho.length === 0 ? (
            <Typography
              variant="h5"
              align="center"
              style={{ color: "#364B74" }}
            >
              Seu carrinho está vazio! :(
            </Typography>
          ) : (
            <TabelaCarrinho itens={carrinho} />
          )}
          <br />
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button
              disabled={carrinho.length === 0}
              variant="contained"
              sx={{
                backgroundColor: "#364B74",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#293857",
                },
              }}
            >
              Finalizar Compra
            </Button>
            <Button
              disabled={carrinho.length === 0}
              onClick={() => limparCarrinho()}
              variant="outlined"
              sx={{
                color: "#364B74",
                borderColor: "#364B74",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#F0F0F0",
                },
              }}
            >
              Limpar Carrinho
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
