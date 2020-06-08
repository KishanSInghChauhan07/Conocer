import React from 'react';
import MyPhotos from './MyPhotos.Component';
import {Card} from '@material-ui/core';

const Profile = () =>{
    return(
        <>
            <Card className='d-flex shadow-sm' style={{maxWidth:'80%',margin:'30px auto 20px auto',padding:'38px 0 40px 0'}}>
                <div className="m-auto">
                    <img className="shadow" height="200" width="200" style={{borderRadius:'50%'}} src="data:image/jpeg;base64,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" alt="profile-pic"/>
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