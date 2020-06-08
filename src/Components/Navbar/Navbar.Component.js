import React from 'react';
import {AppBar,Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <h4 className="pl-4" >
                        Instagram
                    </h4>
                    <div  style={{marginLeft:'auto'}}>
                        <Link to="/SignUp" className='text-white p-4'>SignUp</Link>
                        <Link to="/SignIn" className='text-white p-4'>SignIn</Link>
                        <Link to="/Profile" className='text-white p-4'>Profile</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;