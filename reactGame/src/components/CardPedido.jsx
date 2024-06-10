const CardPedido = ({ pedido }) => {
  const { id, idUSer, valorTotal, itens } = pedido

  return (
    <div>
      <p>{id}</p>
      <p>{idUSer}</p>
      <p>{valorTotal}</p>
    {itens.map(({idProduto,
      quantidade}) => (
        <div>
          <p>{idProduto}</p>
          <p>{quantidade}</p>
        </div>
      ))}


    </div>

  )
}
export default CardPedido