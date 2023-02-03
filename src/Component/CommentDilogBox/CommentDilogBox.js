import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import CommentBox from '../CommentBox/CommentBox';


export default function CommentDilogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button  onClick={handleClickOpen}>
        r
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
     
      >

        <CommentBox />
       
      
      
          <button onClick={handleClose}>Disagree</button>
          <button onClick={handleClose} autoFocus>
            Agree
          </button>
       
      </Dialog>
    </div>
  );
}
