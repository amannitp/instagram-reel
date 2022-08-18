import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import instagramLogo from './Assets/Instagram.JPG'
import {createUseStyles} from 'react-jss'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import './signup.css'
import { red } from "@mui/material/colors";
import { height } from "@mui/system";
export default function SignUp() {


  const useStyle=createUseStyles({
             text:{
              margin:'2% 0'

             },
             margin:{
              marginTop:'4%',
             },
             card2:{
              marginTop:'6%',
              padding:"2% 0"
             }
  })

  const classes=useStyle()
  
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card sx={{ maxWidth: 345 }}>
          <div className="insta-logo">
            <img src={instagramLogo}/>
          </div>
          <CardContent>
            <Typography a variant='subtitle1' className={classes.text}>
              sign up to see photo and video from your friend
            </Typography>
            {true &&  <Alert severity="error">This is an error alert — check it out!</Alert>}
            <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" fullWidth={true} />
            <TextField id="outlined-basic" label="Password" variant="outlined" margin='dense' fullWidth='true'/>
            <TextField id="outlined-basic" label="Full name" variant="outlined" margin='normal' fullWidth='true'/>
            <Button variant="outlined" fullWidth={true} size='large' color='primary' component='label' className={classes.margin}>Contained
            <input type='file' accept='image/*' hidden />
            </Button>
            <Typography variant='subtitle1' className={classes.margin}>
              by signinng up, you agree to our terms policy and cookies policy
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" fullWidth={true}>Sign Up</Button>
          </CardActions>
        </Card>
         <div>
         <Card sx={{ maxWidth: 345 }} className={classes.card2}>
              <Typography>Have an account ? Log In</Typography>
        </Card>
         </div>
      </div>
    </div>
  );
}
