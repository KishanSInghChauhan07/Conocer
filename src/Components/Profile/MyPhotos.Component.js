import React from 'react';
import {Card} from '@material-ui/core';
import {Paper,Tab,Tabs} from '@material-ui/core';

const MyPhotos = () =>{
    return( 
        <Card className="d-flex flex-column shadow-sm" style={{maxWidth:"80%",margin:'0 auto 30px auto'}}>
            <Paper>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab label="Posts" />
                <Tab label="IGTV" />
                <Tab label="Saved" />
                <Tab label="Tagged" />
              </Tabs>
            </Paper>
            <div className="row m-2">
                <img className="col-12 col-sm-3 p-0 border" height='300' width='300' src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12 p-0 border" height='300' width='300' src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12 p-0 border" height='300' width='300' src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12 p-0 border" height='300' width='300' src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12 p-0 border" height='300' width='300' src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12 p-0 border" height='300' width='300' src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>

            </div>
        </Card>
    )
}

export default MyPhotos;