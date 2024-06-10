import { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";

import Context from "../context/Context";
import api from '../api/api';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function CardProduto({ produto, saibaMais }) {
  const { id, imgUrl, nome, descricao, preco, categoria, quantidade, gostei, naoGostei } =
    produto;
  const history = useHistory();
  const { adicionarItem } = useContext(Context);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <img src={imgUrl} srcSet={imgUrl} alt="" /> */}
      <CardMedia
        component="img"
        sx={{ widt: 140, height: 140, objectFit: "contain" }}
        image={imgUrl}
        title={nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" display="block">
          {categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descricao}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <ThumbUpOffAltIcon style={{ color: "green" }} /> {gostei} <ThumbDownOffAltIcon style={{ color: "red" }} /> {naoGostei}
        </Typography>
        <Typography variant="body2" display="block" color="text.secondary">
          R${preco}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => adicionarItem(produto)} size="small">
          Adicionar ao carrinho
        </Button>
        {saibaMais && (
          <Button onClick={() => history.push(`/produto/${id}`)} size="small">
            Saiba mais
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
