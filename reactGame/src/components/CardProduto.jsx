import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";

export default function CardProduto({id, imgUrl, nome, descricao, preco, categoria, quantidade}) {
  const history = useHistory();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ widt: 140, height: 140 }}
        image={imgUrl}
        title={nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" display="block" >
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
        <Button size="small">Adicionar ao carrinho</Button>
        <Button onClick={() => history.push(`/produtos/${id}`) } size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
