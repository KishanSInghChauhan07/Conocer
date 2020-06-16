import React from 'react';
import {Card,TextField,Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
const AddPost = ({handleClose}) => {

    const history = useHistory()
    const [title, setTitle] = React.useState("");
    const [filename, setFileName] = React.useState("");
    const [url,setUrl] = React.useState("")

    const getFile = () => {
        document.getElementById("upfile").click();
    }
  
    const showname =  () => {
      let name = document.getElementById('upfile');
      setFileName(name.files.item(0).name);
    };
    
    
    const PostData = () =>{
        const data = new FormData()
        data.append("file",url)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","kishansinghchauhan")
        fetch("https://api.cloudinary.com/v1_1/kishansinghchauhan/image/upload",{
            method:"post",
            body:data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
        }).catch(err => {
            console.log(err)
        })
        fetch('/createpost',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                photo:url
            })
        }).then( res => res.json())
            .then( data => {
                if(data.error){
                    console.log(data.error, {
                        button: false,
                        timer:"2000"
                    });
                }
                else{
                    console.log(data.message, {
                        button: false,
                        timer:"2000",
                    });
                    history.push('/')
                }
            }).catch(err =>{
                console.log(err);    
            })
    }
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
            <Button variant="contained" color="primary" component="span" style={{position:'absolute',bottom:'5%', right:'5%'}} onClick={() => PostData()} onClose={handleClose} >
              SUBMIT
            </Button>
        </Card> 
    )
}

export default AddPost;