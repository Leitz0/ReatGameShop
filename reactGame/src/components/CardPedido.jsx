import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const CardPedido = ({ pedido }) => {
  const { id, valorTotal, itens, dataCompra } = pedido

  return (
    <Card sx={{width:'100%', mb: 2}} style={{backgroundColor:'#d3d3ed'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ backgroundColor: '#364B74', color: 'white' }}>
          Numero do Pedido: {id}
        </Typography>
        <Typography variant="body2" display="block">
          Total de pedido: {valorTotal.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
        </Typography>
        <Typography variant="body2">
          Data da compra: {new Date(dataCompra).toLocaleDateString()}
        </Typography>
        {itens.map(({ idProduto, nome,
          imgUrl, descricao, preco, categoria, quantidade }) => (
          <CardContent key={idProduto} sx={{display:'flex', justifyContent: 'flex-start'}}>
            <CardMedia
              component="img"
              sx={{ width: 140, height: 140, objectFit: "contain" }}
              image={imgUrl}
            />
            <div>
            <Typography variant="body2" color="text.secondary">
              Cód do Produto: {idProduto}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Categoria: {categoria}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição:
              <br />

              {descricao}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quant.: {quantidade}</Typography>
            <Typography variant="body2" color="text.secondary">
              Valor: {preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
            </Typography>
            </div>
          </CardContent>
        ))}

      </CardContent>
    </Card>
  )
}
export default CardPedido