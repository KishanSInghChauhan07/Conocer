import React from 'react';
import {AppBar,Toolbar,Modal,Backdrop} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddPost from '../AddPost/AddPost.Component';


const useStyles = makeStyles(() => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

const Navbar = () =>{
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return(
      <div>
        <AppBar position="fixed" className="bg-insta">
          <Toolbar>
            <h4 className="pl-4" >
                Instagram
            </h4>
            <div  style={{marginLeft:'auto'}}>
              <Link to="/SignUp" className='text-white p-4'>SignUp</Link>
              <Link to="/SignIn" className='text-white p-4'>SignIn</Link>
              <Link to="/Profile" className='text-white p-4'>Profile</Link>
              <Link onClick={handleOpen} className='text-white p-4'>Post</Link>
              <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
              >
                <AddPost in={open} handleClose={handleClose}/>
              </Modal>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar;