import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalSenhaIncorreta({ open, setOpen }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            E-mail ou senha incorretos!
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {`Tente novamente ou clique em "Registrar" para criar uma nova conta.`}
          </Typography>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="error"
            sx={{ mt: 4 }}
          >
            Fechar
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
