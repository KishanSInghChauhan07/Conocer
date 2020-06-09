import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {TextField,Card,Button} from '@material-ui/core';

const SignUp = () =>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const PostData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            console.log("invalid email")
            return
        }
        fetch('/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then( res => res.json())
            .then( data => {
                if(data.error){
                    console.log(data.error)
                }
                else{
                    console.log(data.message)
                    history.push('/SignIn')
                }
            }).catch(err =>{
                console.log(err);    
            })
    }
    return(
        <Card className='text-center' style={{maxWidth:'40%',margin:'6% auto',padding:'50px 30px',boxShadow:'1px 1px 5px 5px lightgrey'}}>
            <h4 style={{margin:'10px 0 20px 0',fontWeight:'500'}}>Instagram</h4>
            <form className="d-flex flex-column align-items-center" noValidate autoComplete="off">
                <TextField 
                    label="Name"
                    className="w-75" style={{margin:'25px 0'}} variant="outlined" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    label="Email"  
                    className="w-75" style={{margin:'25px 0'}} variant="outlined" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    label="Password" 
                    className="w-75" variant="outlined" style={{margin:'25px 0 40px 0'}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />  
            </form>
            <Button variant="contained" style={{background:'#D93025',color:'#FFFFFF',padding:'10px 15px',marginBottom:'20px'}} 
                onClick={() => PostData()}
            >
              Sign Up
            </Button>
            <h6>Already have an Account
            <Link className='ml-2' to="/SignIn">SignIn</Link>
            </h6>
        </Card>
    )
}

export default SignUp;