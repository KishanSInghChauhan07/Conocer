import React from 'react';
import {Card,TextField,Button} from '@material-ui/core';

const AddPost = () => {
    const [title, setTitle] = React.useState("");
    const [filename, setFileName] = React.useState("");
    const getFile = () => {
        document.getElementById("upfile").click();
      }
  
      const showname =  () => {
        let name = document.getElementById('upfile');
        setFileName(name.files.item(0).name);
      };
    return(
       <Card style={{height:'30%',width:'30%',position:'relative'}} className="text-center shadow-lg">
        <div style={{display:'block',margin:'4% 0 0 8%'}} className='d-flex'>
          <Button variant="contained" color="primary" component="span" onClick={getFile} >
            Upload Image
          </Button>
          <input id="upfile" type="file" style={{display: 'none'}} onChange={showname}/>
          <span className="text-success mt-2 ml-3">{filename}</span>
        </div>
        <TextField label="Write Your Caption Here" style={{margin:'25px 0' , width:'85%'}} variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button variant="contained" color="primary" component="span" style={{position:'absolute',bottom:'5%', right:'5%'}} >
          SUBMIT
        </Button>
      </Card> 
    )
}

export default AddPost;