import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {TextField,Card} from '@material-ui/core';

const HomePage = () =>{
    return(
        <>
        <Card style={{maxWidth:'35%',margin:'20px auto',minWidth:'330px',borderRadius:'5px'}} className="shadow-sm">
            <div className="d-flex align-items-center" style={{margin:'7px 0'}}>
                <div style={{border:'1px solid #1976D2',borderRadius:'50%',padding:'3px',marginLeft:'5px'}}>
                    <img height="40" width="40" style={{borderRadius:'50%'}} src="https://images.unsplash.com/photo-1591537486477-606ef42395c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='user-pic'/>
                </div>
                <h6 className="ml-3" style={{fontWeight:600,fontSize:'14px'}}>Kishan Singh</h6>
            </div>
            <div className="image-container">
            <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1591589406157-e324d83bf5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="upload-pic"/>
            </div>
            <div className="m-3">
                <FontAwesomeIcon icon={ faHeart } className="text-danger" size="lg"/>  
            </div>
            <div className="d-flex">
                <h6 style={{fontSize:'14px',fontWeight:'600',marginLeft:'12px'}}>Kishan Singh</h6>
                <p style={{fontSize:'14px',fontWeight:'500',position:'relative',left:'7px',bottom:'2px'}}>Need to awake this time</p>
            </div>
            <TextField label="add a comment" variant="outlined" style={{margin:'0 3% 3% 3%',width:'94%'}}/>  
        </Card>
        <Card style={{maxWidth:'35%',margin:'20px auto',minWidth:'330px',borderRadius:'5px'}} className="shadow-sm">
            <div className="d-flex align-items-center" style={{margin:'7px 0'}}>
                <div style={{border:'1px solid #1976D2',borderRadius:'50%',padding:'3px',marginLeft:'5px'}}>
                    <img height="40" width="40" style={{borderRadius:'50%'}} src="https://images.unsplash.com/photo-1591537486477-606ef42395c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='user-pic'/>
                </div>
                <h6 className="ml-3" style={{fontWeight:600,fontSize:'14px'}}>Kishan Singh</h6>
            </div>
            <div className="image-container">
                <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1591569871121-2a071e6e47d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="upload-pic"/>
            </div>
            <div className="m-3">
                <FontAwesomeIcon icon={ faHeart } className="text-danger" size="lg"/>  
            </div>
            <div className="d-flex">
                <h6 style={{fontSize:'14px',fontWeight:'600',marginLeft:'12px'}}>Kishan Singh</h6>
                <p style={{fontSize:'14px',fontWeight:'500',position:'relative',left:'7px',bottom:'2px'}}>Need to awake this time</p>
            </div>
            <TextField label="add a comment" variant="outlined" style={{margin:'0 3% 3% 3%',width:'94%'}}/>  
        </Card>
        <Card style={{maxWidth:'35%',margin:'20px auto',minWidth:'330px',borderRadius:'5px'}} className="shadow-sm">
            <div className="d-flex align-items-center" style={{margin:'7px 0'}}>
                <div style={{border:'1px solid #1976D2',borderRadius:'50%',padding:'3px',marginLeft:'5px'}}>
                    <img height="40" width="40" style={{borderRadius:'50%'}} src="https://images.unsplash.com/photo-1591537486477-606ef42395c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='user-pic'/>
                </div>
                <h6 className="ml-3" style={{fontWeight:600,fontSize:'14px'}}>Kishan Singh</h6>
            </div>
            <div className="image-container">
            <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1591634364214-d49cfabf5f6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="upload-pic"/>
            </div>
            <div className="m-3">
                <FontAwesomeIcon icon={ faHeart } className="text-danger" size="lg"/>  
            </div>
            <div className="d-flex">
                <h6 style={{fontSize:'14px',fontWeight:'600',marginLeft:'12px'}}>Kishan Singh</h6>
                <p style={{fontSize:'14px',fontWeight:'500',position:'relative',left:'7px',bottom:'2px'}}>Need to awake this time</p>
            </div>
            <TextField label="add a comment" variant="outlined" style={{margin:'0 3% 3% 3%',width:'94%'}}/>  
        </Card>
        <Card style={{maxWidth:'35%',margin:'20px auto',minWidth:'330px',borderRadius:'5px'}} className="shadow-sm">
            <div className="d-flex align-items-center" style={{margin:'7px 0'}}>
                <div style={{border:'1px solid #1976D2',borderRadius:'50%',padding:'3px',marginLeft:'5px'}}>
                    <img height="40" width="40" style={{borderRadius:'50%'}} src="https://images.unsplash.com/photo-1591537486477-606ef42395c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='user-pic'/>
                </div>
                <h6 className="ml-3" style={{fontWeight:600,fontSize:'14px'}}>Kishan Singh</h6>
            </div>
            <div className="image-container">
            <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1591633720515-b002261a1699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="upload-pic"/>
            </div>
            <div className="m-3">
                <FontAwesomeIcon icon={ faHeart } className="text-danger" size="lg"/>  
            </div>
            <div className="d-flex">
                <h6 style={{fontSize:'14px',fontWeight:'600',marginLeft:'12px'}}>Kishan Singh</h6>
                <p style={{fontSize:'14px',fontWeight:'500',position:'relative',left:'7px',bottom:'2px'}}>Need to awake this time</p>
            </div>
            <TextField label="add a comment" variant="outlined" style={{margin:'0 3% 3% 3%',width:'94%'}}/>  
        </Card>
        </>
    )
}

export default HomePage;