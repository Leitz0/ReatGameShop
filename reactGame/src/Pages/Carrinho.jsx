import { useContext } from "react";
import { useHistory } from "react-router-dom";
import TabelaCarrinho from "../components/TabelaCarrinho";
import { Container, Typography, Button, Stack, Box } from "@mui/material";
import Context from "../context/Context";
import Navbar from "../components/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import api from "../api/api";

export default function Carrinho() {
  const { carrinho, limparCarrinho, usuario } = useContext(Context);
  const history = useHistory();

  const finalizar = async () => {
    if (!usuario?.nome) return history.push("/login");
    const response = await api.post("/pedido", {
      idUser: usuario.id,
      valorTotal: carrinho.reduce(
        (acc, item) => acc + item.preco * item.quantidadeComprado,
        0
      ),
      itens: carrinho.map((item) => {
        return {
          idProduto: item.id,
          nome: item.nome,
          imgUrl: item.imgUrl,
          descricao: item.descricao,
          preco: item.preco,
          categoria: item.categoria,
          quantidade: item.quantidadeComprado,
        };
      }),
      dataCompra: new Date().toISOString(),
    });
    if (response.status === 201) {
      carrinho.forEach(async (item) => {
        await api.patch(`/produto/${item.id}`, {
          quantidade: item.quantidade - item.quantidadeComprado,
        });
      });
      limparCarrinho();
      return history.push("/pedidos");
    }
    return alert("Erro ao finalizar compra!");
  };

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
              <ShoppingCartIcon sx={{ mr: 1, color: "#364B74", fontSize: 45 }} />
              <span style={{ fontFamily: "Helvetica", color: "#364B74" }}>Carrinho</span>
            </Box>
          </Typography>
          <br />
          {carrinho.length === 0 ? (
            <Typography variant="h5" align="center" style={{ color: "#364B74" }}>
              Seu carrinho está vazio! :(
            </Typography>
          ) : (
            <TabelaCarrinho itens={carrinho} />
          )}
          <br />
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button
              onClick={() => finalizar()}
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
