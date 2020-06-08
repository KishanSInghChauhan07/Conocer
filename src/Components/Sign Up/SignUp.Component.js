import React from 'react';
import {Link} from 'react-router-dom'
import {TextField,Card} from '@material-ui/core';

const SignUp = () =>{
    return(
        <Card className='text-center' style={{maxWidth:'40%',margin:'8% auto',padding:'50px 30px',boxShadow:'1px 1px 5px 5px lightgrey'}}>
            <h4 style={{margin:'10px 0 20px 0',fontWeight:'500'}}>Instagram</h4>
            <form className="d-flex flex-column align-items-center" noValidate autoComplete="off">
                <TextField label="Name"  className="w-75" style={{margin:'25px 0'}} variant="outlined" />
                <TextField label="Email"  className="w-75" style={{margin:'25px 0'}} variant="outlined" />
                <TextField label="Password" className="w-75" variant="outlined" style={{margin:'25px 0 40px 0'}}/>  
            </form>
            <h6>Already have an Account
            <Link className='ml-2' to="/SignIn">SignIn</Link>
            </h6>
        </Card>
    )
}

export default SignUp;