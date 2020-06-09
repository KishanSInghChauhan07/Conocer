import React from 'react';
import {Card} from '@material-ui/core';
import {Paper,Tab,Tabs} from '@material-ui/core';

const MyPhotos = () =>{
    return( 
        <Card className="d-flex flex-column shadow-sm" style={{maxWidth:"80%",margin:'0 auto'}}>
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
            <div className="row pl-3 pr-3 pt-2 pb-2">
                <img className="col-12 col-sm-3" height='300' width='300' style={{margin:'10px 0'}} src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12" height='300' width='300' style={{margin:'10px 0'}} src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12" height='300' width='300' style={{margin:'10px 0'}} src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12" height='300' width='300' style={{margin:'10px 0'}} src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12" height='300' width='300' style={{margin:'10px 0'}} src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>
                <img className="col-sm-3 col-12" height='300' width='300' style={{margin:'10px 0'}} src='https://images.unsplash.com/photo-1591690497001-3316502441ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='mt=photos'/>

            </div>
        </Card>
    )
}

export default MyPhotos;