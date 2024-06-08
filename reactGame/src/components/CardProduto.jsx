import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

import Context from "../context/Context";

export default function CardProduto({ produto }) {
  const { id, imgUrl, nome, descricao, preco, categoria, quantidade,gostei,naoGostei,saibaMais } = produto;
  const history = useHistory();
  const { adicionarItem } = useContext(Context);

  return (
    <Card sx={{ maxWidth: 345 }}>
      
        {/* <img src={imgUrl} srcSet={imgUrl} alt="" /> */}
      <CardMedia
        component="img"
        sx={{ widt: 140, height: 140 , objectFit: "contain" }}
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
        <Typography variant="body2" display="block" color="text.secondary">
          {preco} R$
        </Typography>
      </CardContent>
      <CardActions>

        <Button onClick={() => adicionarItem(produto)} size="small">
          Adicionar ao carrinho
        </Button>
         {saibaMais && <Button onClick={() => history.push(`/produto/${id}`) } size="small">Saiba mais</Button>}

      </CardActions>
    </Card>
  );
}
