import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardProduto from "../components/CardProduto";
import api from "../api/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Button, ButtonGroup } from "@mui/material";

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [cardProduto, SetCardProduto] = useState({});

  const getProduto = async () => {
    const response = await api.get(`/produto/${id}`);
    SetCardProduto(response.data);
  };

  useEffect(() => {
    getProduto();
  }, []);

  const hadleGosteiClick = async () => {
    const response = await api.patch(`/produto/${id}`, {
      gostei: cardProduto.gostei + 1,
    });
    if (response.status == "200") getProduto();
  };

  const hadleNaoGosteiClick = async () => {
    const response = await api.patch(`/produto/${id}`, {
      naoGostei: cardProduto.naoGostei + 1,
    });
    if (response.status == "200") getProduto();
  };

  return (
    <>
      <Navbar />
     <br />
      <Container >
        <Container sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // Outras propriedades de estilo podem ser adicionadas aqui
        }}>
            <CardProduto   produto={cardProduto} />
        </Container>
        <Container sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column"
          // Outras propriedades de estilo podem ser adicionadas aqui
        }}>
            <Typography variant="h4" display="block" color="text.primary">
              Gostou do produto?
            </Typography>
            <br />
            <ButtonGroup variant="contained">
              <Button color="success" onClick={hadleGosteiClick}>
                Sim
              </Button>
              <Button color="error" onClick={hadleNaoGosteiClick}>
                Não
              </Button>
            </ButtonGroup>
        </Container>
      </Container>
      <Footer/>
    </>
  );
};
export default ProdutoDetalhe;
