import React from 'react';
import MyPhotos from './MyPhotos.Component';
import {Card} from '@material-ui/core';

const Profile = () =>{
    return(
        <>
            <Card className='d-flex shadow-sm' style={{maxWidth:'80%',margin:'30px auto 20px auto',padding:'33px 0 35px 0'}}>
                <div className="m-auto">
                    <img className="shadow" height="250" width="250" style={{borderRadius:'50%'}} src="https://images.unsplash.com/photo-1591703166380-e36be05eb7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile-pic"/>
                </div>
                <div style={{margin:'10px auto'}}>
                    <h3>Kishan Singh Chauhan</h3>
                    <div className='d-flex mt-3'>
                        <h5 className="mr-4"><span className='mr-1'>0</span>Posts</h5>
                        <h5 className="mr-4"><span className='mr-1'>0</span>Followerss</h5>
                        <h5 className="mr-4"><span className='mr-1'>0</span>Following</h5>
                    </div>
                </div>
            </Card>
            <MyPhotos />       
        </>
    )
}

export default Profile;