import { useState, useContext } from "react";
import Context from "../context/Context";
import { v4 as uuidv4 } from "uuid";
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
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const { setUsuario } = useContext(Context);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    setError("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setError("Todos os campos devem ser preenchidos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email inválido.");
      return;
    }

    if (senha !== confirmarSenha) {
      setError("As senhas não conferem.");
      return;
    }

    const novoUsuario = { id: uuid, nome, email, senha };

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
      });

      if (!response.ok) {
        throw new Error(`Erro ao adicionar usuário: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Usuário adicionado:", data);
      setUsuario(data);
      setOpen(true);
    } catch (error) {
      setError(error.message);
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/produtos");
  };

  const handleCancel = () => {
    history.push("/produtos");
  };

  return (
    <>
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Box p={3} boxShadow={3} borderRadius={2}>
            <Typography variant="h4" gutterBottom style={{ color: "#364B74" }}>
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
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirme sua Senha"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#364B74",
                    color: "#FFFFFF",
                  }}
                >
                  Cadastrar
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleCancel}
                  style={{ backgroundColor: "#FFFFFF", color: "#364B74" }}
                >
                  Cancelar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
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
    <Footer/>
    </>
  );
};

export default Cadastro;
