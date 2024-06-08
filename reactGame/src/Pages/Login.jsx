import { useState } from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';






const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (event) => {
   
    event.preventDefault();

    
    console.log("Dados de Login:", { username, password });
  };

  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundColor: '#CBD6EB',
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, 12%)',
      width: '30%',
      borderRadius: 3,
      boxShadow: 4,
     }}>
     

      
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <h2>Realizar acesso</h2>
      
      <FormControl variant="standard" style={{ textAlign: 'center' }}>
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
      </FormControl><br></br>
      
      <FormControl variant="standard" style={{ textAlign: 'center' }}>
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
      </FormControl><br></br>

      <div className="recall-forget" style={{ textAlign: 'center' }}>
        <label>
          <input type="checkbox" />
          Lembre de mim
        </label><br></br><br></br>
        <a href="#">Esqueceu sua senha?</a>
      </div>
      
      <Link to="/produtos">
    <button variant="contained" color="success" style={{ display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', 
        height: '30px', 
        backgroundColor: 'hsl(248.54deg 73.3% 11.44%)',
        color: 'white',
        padding: '10px 10px', 
        borderRadius: 4,
        textAlign: 'center' }}>
      Login
    </button>
</Link>
      
    <div className="signup-link" style={{ textAlign: 'center' }}>
    <p>
    Não tem uma conta? <br></br><a href="/cadastro">Registar</a>
    </p>
    </div>    
  </form>
  </Box>
  
);
}

export default Login;
