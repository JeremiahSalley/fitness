import React from 'react';
import { Fade } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";

import {
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { orange } from "@material-ui/core/colors";

const BootstrapButton = withStyles({
  root: {
    color: "white",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const slideImages = ["../Images/slideshow1.webp", "../Images/slideshow2.webp"];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              height: "500px",
              backgroundSize: "contain",
            }}
          >
            <h1><span style={{'color':'orange'}}>Build</span> Your Body <br/><span style={{'color':'orange'}}>Transform</span> Your Life</h1>
            <h2>As a Professional Master Trainer in Personal Fitness Trainer, <br/>my main passion is guiding people towards a healthier lifestyle. <br/>My method is to build a custom plan based on your shape, size, and fitness goals. </h2>
            <ColorButton
              id="button"
              variant="contained"
              color="primary"
              // className={classes.margin}
            >
              Book Now
            </ColorButton>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              height: "500px",
              backgroundSize: "contain",
            }}
          >
            <h1><span style={{'color':'orange'}}>Build</span> Your Body <br/><span style={{'color':'orange'}}>Transform</span> Your Life</h1>
            <h2>As a Professional Master Trainer in Personal Fitness Trainer, <br/>my main passion is guiding people towards a healthier lifestyle. <br/>My method is to build a custom plan based on your shape, size, and fitness goals. </h2>
            <ColorButton
              id="button"
              variant="contained"
              color="primary"
              // className={classes.margin}
            >
              Book Now
            </ColorButton>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
