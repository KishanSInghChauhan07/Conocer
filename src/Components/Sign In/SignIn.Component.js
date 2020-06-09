import React from 'react';
import {Link} from 'react-router-dom'
import {TextField,Card,Button} from '@material-ui/core';

const SignIn = () =>{
    return(
        <Card className='text-center' style={{maxWidth:'40%',margin:'9% auto',padding:'50px 30px',boxShadow:'1px 1px 5px 5px lightgrey'}}>
            <h4 style={{margin:'10px 0 20px 0',fontWeight:'500'}}>Instagram</h4>
            <form className="d-flex flex-column align-items-center" noValidate autoComplete="off">
              <TextField label="Email"  className="w-75" style={{margin:'25px 0'}} variant="outlined" />
              <TextField label="Password" className="w-75" variant="outlined" style={{margin:'25px 0 40px 0'}}/>  
            </form>
            <Button variant="contained" style={{background:'#D93025',color:'#FFFFFF',padding:'10px 15px',marginBottom:'20px'}}>
              Sign In
            </Button>
            <h6>Don't have an Account
            <Link className='ml-2' to="/SignUp">SignUp</Link>
            </h6>
        </Card>
    )
}

export default SignIn;