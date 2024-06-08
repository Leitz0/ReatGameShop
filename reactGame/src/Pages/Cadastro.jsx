import React, { useState, useEffect } from "react";
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
import api from "../api/api";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    async function teste() {
      const teste1 = await api.get("/users");
      console.log(teste1.data);
    }
    teste();
  }, []);
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
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
    const result = await api.post("/users", JSON.stringify(novoUsuario));
    console.log(result);
    if (result.status === 201) return setOpen(true);
    return console.error("Erro ao adicionar usuário:", error);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/produto");
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
            <DialogContentText>
              Usuário cadastrado com sucesso!
            </DialogContentText>
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
