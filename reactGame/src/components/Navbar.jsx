import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            onClick={() => history.push("/produtos")}
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
              ":hover": {
                    color: "rgba(0, 0, 0, 0.3)", 
                  },
            }}
          >
            HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ver carrinho">
              <ShoppingCartIcon
                onClick={() => history.push("/carrinho")}
                sx={{ 
                  cursor: "pointer",
                  ml: 2,
                 transition: "transform 0.2s ease-in-out", // Adiciona uma transição suave
                  "&:hover": {
                    color: "rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.1)", // Aumenta o tamanho do ícone quando o cursor estiver sobre ele
                  },
                 }}
              />
            </Tooltip>
            <Tooltip title="Fazer login">
              <AccountCircleIcon    
                sx={{
                  cursor: "pointer",
                  ml: 2,
                  transition: "transform 0.2s ease-in-out", // Adiciona uma transição suave
                  "&:hover": {
                    color: "rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.1)", // Aumenta o tamanho do ícone quando o cursor estiver sobre ele
                  },
                }}
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
