import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import CommentBox from '../CommentBox/CommentBox';
import { BiMessageRounded } from 'react-icons/bi';


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
      <span  onClick={handleClickOpen}>
       <BiMessageRounded />
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
     
      >

        <CommentBox handleClose={handleClose} />
       
      
      
         
       
      </Dialog>
    </div>
  );
}
