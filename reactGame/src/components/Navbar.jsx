
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tooltip,
  Box,
} from "@mui/material";

export default function Navbar() {
  const history = useHistory();
  const { usuario } = useContext(Context);

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
          {usuario?.nome && (
            <Typography
              onClick={() => history.push("/produtos")}
              variant="h6"
              noWrap
              component="p"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              Olá {usuario.nome}!
            </Typography>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ver carrinho">
              <ShoppingCartIcon
                onClick={() => history.push("/carrinho")}
                sx={{ 
                  cursor: "pointer",
                  ml: 2,
                 transition: "transform 0.2s ease-in-out", 
                  "&:hover": {
                    color: "rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.1)", 
                  },
                 }}
              />
            </Tooltip>
            <Tooltip title="Fazer login">
            <AccountCircleIcon
                onClick={() => history.push("/login")} 
                sx={{
                  cursor: "pointer",
                  ml: 2,
                  transition: "transform 0.2s ease-in-out", 
                  "&:hover": {
                    color: "rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.1)", 
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
