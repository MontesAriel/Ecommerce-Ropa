
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import  DialogContent from '@mui/material/DialogContent'; 

const Modal = ({handleClose, open, children}) => {

   return(
       <Dialog onClose={handleClose} open={open}>
           <DialogContent>
                <DialogTitle>{children}</DialogTitle>
           </DialogContent>
       </Dialog>
   )
}

export default Modal;