import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import api from '../api/api';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function CardProduto({ id, imgUrl, nome, descricao, preco, categoria,
  quantidade, gostei, naoGostei, saibaMais, avaliacao }) {
  const history = useHistory();

  const refresh = () => {
    window.location.reload()
  }

  const hadleGosteiClick = async () => {

    const response = await api.patch(`/produto/${id}`, {
      gostei: gostei + 1
    })

    if (response.status == '200')
      refresh()
  }

  const hadleNaoGosteiClick = async () => {
    const response = await api.patch(`/produto/${id}`,
      { naoGostei: naoGostei + 1 }
    )
    if (response.status == '200')
      refresh()
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Typography variant="body2" display="block" >
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

        <Button size="small">Adicionar ao carrinho</Button>
        {saibaMais && <Button onClick={() => history.push(`/produto/${id}`)} size="small">Saiba mais</Button>}
        <br />
        {avaliacao && <Button size="small" onClick={hadleGosteiClick}>Gostou</Button>}
        {avaliacao && <Button size="small" onClick={hadleNaoGosteiClick}>Não Gostou</Button>}
      </CardActions>
    </Card>
  );
}
