import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Todos from './todos';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';

// task in array
const initialtodos=[
  {id:uuidv4(),title:"task1",iscompleted:false},
  {id:uuidv4(),title:"task2",iscompleted:false},
  {id:uuidv4(),title:"task3",iscompleted:false},
]



export default function Todolist(){

  const [tasks,settasks]=useState(initialtodos);
  const [inputtitle,setinputtitle]=useState("")

  // create tasks from componet todos

  const todosjsx=tasks.map((t)=>{
    return <Todos title={t.title} id={t.id}  deleting={handledelete} />
  })
 
  // add task
  function handleaddtask(){
    const newtask={
      id:uuidv4(),title:inputtitle,iscompleted:false
    }
    if(inputtitle==""){
       settasks(tasks)
    }else{
         settasks([...tasks,newtask])
    }
  
    setinputtitle("")
    
  }

//delete task 
function handledelete(id){
  const updatedtasks=tasks.filter((t)=>{
    if(t.id==id){
      return false
    }else {
      return true
    }
  })
  settasks(updatedtasks)
}






  return (
    <>
       <Container maxWidth="sm"  >
        <Card sx={{ minWidth: 275 }} style={{backgroundColor:"pink"}}>
      <CardContent>
      <Typography variant='h4'>To-Dolist</Typography>
      {todosjsx}
       <Grid container spacing={2} style={{marginTop:"15px"}}>
        <Grid size={8}>
          <TextField id="outlined-basic" label="task name" variant="outlined" style={{width:"100%"}} 
          value={inputtitle}
          onChange={(event)=>{setinputtitle(event.target.value)}}/>
        </Grid>

        <Grid size={4}>
        <Button variant="contained" style={{width:"100%",height:"100%",backgroundColor:"pink"}}
        onClick={handleaddtask}
        >add</Button>
        </Grid>
      
      </Grid>
      </CardContent>
      
    </Card>
      </Container>
    </>
  )
}