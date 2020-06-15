import React from 'react';
import {AppBar,Toolbar,Modal,Backdrop,Card,TextField,IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


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
    const [title, setTitle] = React.useState("");

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
                        {/* <button type="button" onClick={handleOpen}>
                          react-transition-group
                        </button> */}
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
                            <Card in={open} style={{height:'40%',width:'30%'}} className="text-center">
                            <TextField label="Caption"  className="w-75" style={{margin:'25px 0'}} variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <input accept="image/*" style={{display:'none'}} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                              </IconButton>
                            </label>
                            </Card>
                        </Modal>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;