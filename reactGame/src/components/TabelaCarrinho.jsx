import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

const columns = [
  { id: "produto", label: "Produto", minWidth: 170 },
  { id: "preco", label: "Preco", minWidth: 100 },
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
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.nome}</TableCell>
                <TableCell align="center">{row.preco}</TableCell>
                <TableCell align="center">{row.descricao}</TableCell>
                <TableCell align="center">{row.quantidade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

TabelaCarrinho.propTypes = {
  itens: PropTypes.array,
};
