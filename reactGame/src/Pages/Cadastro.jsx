import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import { useHistory } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setError("Todos os campos devem ser preenchidos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email inválido.");
      return;
    }

    const novoUsuario = { id: Date.now().toString(), nome, email, senha };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuário adicionado:", data);

        setOpen(true);
      })
      .catch((error) => {
        console.error("Erro ao adicionar usuário:", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/produtos");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#CBD6EB",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom style={{ color: "#545454" }}>
          Cadastro de usuário
        </Typography>
        <form onSubmit={handleSubmit}>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </form>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Cadastro realizado</DialogTitle>
          <DialogContent>
            <DialogContentText>Usuário cadastrado com sucesso!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Cadastro;
