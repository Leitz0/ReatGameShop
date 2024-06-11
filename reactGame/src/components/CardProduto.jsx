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
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function CardProduto({ produto, saibaMais }) {
  const { id, imgUrl, nome, descricao, preco, categoria, gostei, naoGostei } = produto;
  const history = useHistory();
  const { adicionarItem } = useContext(Context);

  return (
    <Card sx={{ 
      width: 300, 
      boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.4)",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: "20px",
      margin: "10px",
      padding: "20px",
      border: "1px solid rgba(255, 255, 255, 0.3)"
    
      }}>
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
        {!saibaMais && (
          <Typography variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          <ThumbUpOffAltIcon style={{ color: "green" }} /> {gostei}{" "}
          <ThumbDownOffAltIcon style={{ color: "red" }} /> {naoGostei}
        </Typography>
        <Typography variant="body2" display="block" color="text.secondary">
          {Number(preco).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
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
