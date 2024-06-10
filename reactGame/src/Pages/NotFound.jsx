import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh"}}>
        <Typography variant="h1" align="center">
          Página não encontrada
        </Typography>
      </div>
      <Footer />
    </>
  );
}
