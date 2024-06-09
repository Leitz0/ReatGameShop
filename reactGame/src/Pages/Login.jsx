import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import api from "../api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const { setUsuario } = useContext(Context);

  useEffect(() => {
    setUsuario(null);
  }, [])

  const handleLogin = async () => {
    try {
      const usuarios = await api.get("/users");
      const usuario = usuarios.data.find(
        (usuario) => usuario.email === username && usuario.senha === password
      );
      if (!usuario) {
        console.error("Usuário ou senha inválidos");
        return;
      }
      setUsuario(usuario);
      console.log("Usuário logado:", usuario);
      history.push("/produtos");
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "#CBD6EB",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 12%)",
        width: "30%",
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <h2>Realizar acesso</h2>

        <FormControl variant="standard" style={{ textAlign: "center" }}>
          <InputLabel htmlFor="input-with-icon-adornment">E-mail</InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <br></br>

        <FormControl variant="standard" style={{ textAlign: "center" }}>
          <InputLabel htmlFor="input-with-icon-adornment">Senha</InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <br></br>

          <Button onClick={handleLogin} variant="contained" color="success">
            Login
          </Button>

        <div className="signup-link" style={{ textAlign: "center" }}>
          <p>
            Não tem uma conta? <br></br>
            <a href="/cadastro">Registar</a>
          </p>
        </div>
      </form>
    </Box>
  );
};

export default Login;
