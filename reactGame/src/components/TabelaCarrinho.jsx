import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "produto", label: "Produto", minWidth: 170 },
  {
    id: "categoria",
    label: "Categoria",
    minWidth: 170,
    align: "right",
  },
  {
    id: "quantidade",
    label: "Quantidade",
    minWidth: 170,
    align: "right",
  },
  {
    id: "preço",
    label: "Valor unitário",
    minWidth: 170,
    align: "right",
  },
  {
    id: "preçoTotal",
    label: "Valor total",
    minWidth: 170,
    align: "right",
  },
];

export default function TabelaCarrinho({ itens }) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#364B74",
                    fontWeight: "bold",
                  }}
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.nome}</TableCell>
                <TableCell align="center">{row.categoria}</TableCell>
                <TableCell align="center">{row.quantidadeComprado}</TableCell>
                <TableCell align="center">
                  {row.preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell align="center">
                  {(row.preco * row.quantidadeComprado).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
