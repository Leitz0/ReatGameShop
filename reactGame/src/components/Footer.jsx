import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static" component="footer" sx={{ top: 'auto', bottom: 0, mt: 2, bgcolor: '#364B74' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Typography
            variant="body2"
            color="inherit"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textAlign: "center",
            }}
          >
            Trabalho grupo 04
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
