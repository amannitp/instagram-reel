import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import instagramLogo from "./Assets/Instagram.JPG";
import { createUseStyles } from "react-jss";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import insta from "../components/Assets/insta.png";
import "./login.css";
import img1 from '../components/Assets/img1.jpg'
import img2 from '../components/Assets/img2.jpg'
import img3 from '../components/Assets/img3.jpg'
import img4 from '../components/Assets/img4.jpg'
import img5 from '../components/Assets/img5.jpg'

import {
  CarouselProvider,
  Slider,
  Slide,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Link } from "react-router-dom";

import { red } from "@mui/material/colors";
import { height } from "@mui/system";
export default function Login() {
  const useStyle = createUseStyles({
    text: {
      margin: "2% 0",
    },
    text2: {
      color: "#3266a8",
    },
    margin: {
      marginTop: "4%",
    },
    card2: {
      marginTop: "6%",
      padding: "2% 0",
    },
  });

  const classes = useStyle();

  return (
    <div className="loginWrapper">
      <div
        className="img-car"
        style={{ backgroundImage: "url(" + insta + ")",backgroundSize:'cover' }}
        
      >
         <div className="car">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={5}
            naturalSlideWidth={238}
            naturalSlideHeight={423}
            hasMasterSpinner
            isPlaying={true}
            infinite={true}
            dragEnabled={false}
            touchEnabled={false}
          >
            <Slider>
              <Slide index={0}><Image src={img1}/></Slide>
              <Slide index={1}><Image src={img2}/></Slide>
              <Slide index={2}><Image src={img3}/></Slide>
              <Slide index={3}><Image src={img4}/></Slide>
              <Slide index={4}><Image src={img5}/></Slide>

              </Slider>
              
          </CarouselProvider>
        </div>
      </div>
      <div className="loginCard">
        <Card sx={{ maxWidth: 345 }}>
          <div className="insta-logo">
            <img src={instagramLogo} />
          </div>
          <CardContent>
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
              fullWidth="true"
              type="password"
            />
            <Typography
              variant="subtitle1"
              className={classes.text2}
              color="blue"
            >
              Forget Password?
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" fullWidth={true}>
              Log in
            </Button>
          </CardActions>
        </Card>
        <div>
          <Card sx={{ maxWidth: 345 }} className={classes.card2}>
            <Typography>New user ? <Link to='/' style={{textDecoration:'none'}}>Sign up</Link></Typography>
          </Card>
        </div>
      </div>
    </div>
  );
}
