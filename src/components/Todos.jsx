import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from 'react';



export default function Todos({title,deleting,id}){
   // state for change coler when click on task
  const [color,setcolor]=useState("teal")

  //recieve prob as function to detete
  function handledeletetask(){
    deleting(id)
  }

  



  return(
  <>
        <Card sx={{ minWidth: 260 }} 
        
        onClick={()=>setcolor(color ==='teal' ? 'gray' :'teal')} style={{backgroundColor:color,marginTop:"15px"}}
        >
           <CardContent>
             <Grid container spacing={2}>
        <Grid size={8}>
        <Typography style={{textAlign:"right",color:"white"}} >{title}</Typography>
        </Grid>

        <Grid size={4}>
          <IconButton style={{backgroundColor:"pink",border:"solid teal 4px",color:"white" }} ><CheckIcon/></IconButton>
        <IconButton aria-label="delete" style={{background:"pink",border:"solid teal 4px",color:"white"}} 
        onClick={handledeletetask}>
             <DeleteIcon />
        </IconButton>
        </Grid>
      
      </Grid>
       
           </CardContent>
      
    </Card>
  </>
  )
}