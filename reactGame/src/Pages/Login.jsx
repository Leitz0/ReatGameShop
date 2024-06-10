import { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Context from "../context/Context";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKey from "@mui/icons-material/VpnKey";
import api from "../api/api";
import ModalSenhaIncorreta from "../components/ModalSenhaIncorreta";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [senhaIncorreta, setSenhaIncorreta] = useState(false);

  const history = useHistory();
  const { setUsuario } = useContext(Context);

  useEffect(() => {
    setUsuario(null);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const usuarios = await api.get("/users");
      const usuario = usuarios.data.find(
        (usuario) => usuario.email === username && usuario.senha === password
      );
      if (!usuario) {
        setSenhaIncorreta(true);
        return;
      }
      setUsuario(usuario);
      console.log("Usuário logado:", usuario);
      history.push("/produtos");
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
  };

  const handleCancel = () => {
    history.push("/produtos");
  };

  return (
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
             Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Senha"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKey />
                    </InputAdornment>
                  ),
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
                  Login
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
              <Box mt={2} textAlign="center">
                <Typography variant="body2">
                  Não tem uma conta? <Link to="/cadastro">Registrar</Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
      <ModalSenhaIncorreta open={senhaIncorreta} setOpen={setSenhaIncorreta} />
    </Container>
  );
};

export default Login;
