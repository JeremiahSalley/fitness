import React from "react";
import './home.css'
import Slideshow from './Slide'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // marginLeft: 125,
    margin: 50,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Slideshow />
      <div className= "book">
      <h5>What I can do for you</h5>
      <h6>As a Certified Master Trainer, I offer a wide range of fitness services and training styles. More<br/> than just getting you into shape, I also help with improving endurance, building strength, <br/>rehabilitating from injury, and sports-specific training. You can choose from a wide array of <br/>existing training options, or you can design your own.</h6>
      <div className='card'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia 
          component='img'
          alt=''
          height='240'
          image='../Images/core-training.webp'
          title='Core Training'/>
          
          
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            Core Training
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          There is no better way to get those important<br/> muscles working than to engage in this <br/>method. Want to see maximum and efficient <br/>results? Then sign up for a class today. <br/>Designed to improve strength, coordination, <br/>and wellbeing, this class is guaranteed to take <br/>your fitness to the next level.
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="Large" color="primary">
          Book Now
        </Button>

      </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia 
          component='img'
          alt=''
          height='240'
          image='../Images/musclebuilding.webp'
          title='Core Training'/>
          
          
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            Muscle Building
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          My experiences in fitness training include a <br/>focus on Muscle Building. The unique <br/>program I’ve developed will help burn <br/>calories, boost the metabolism, and improve <br/>your overall health. A combination of strategic <br/>exercises as well as a healthy diet will have <br/>you in tip top shape.
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="Large" color="primary">
          Book Now
        </Button>

      </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia 
          component='img'
          alt=''
          height='240'
          image='../Images/cardiofitness.webp'
          title='Core Training'/>
          
          
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            Cardo Fitness
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tired of sitting all day in the office? Do your<br/> body a favor and get your blood pumping.<br/>Health and fitness is as much about what your <br/>body looks like on the outside as it is about<br/>how it functions on the inside. Your heart is a<br/>muscle, too, and my workouts will get your<br/>heart-rate up. Your body will thank you for it!
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="Large" color="primary">
          Book Now
        </Button>

      </CardActions>
      </Card>

      </div>
      

      </div>
      <div className="services">
        <h3 id='services'>Our Services</h3>
        <p2>I have developed a range of classes to fit the specific needs of my clients, including personal<br/> training. Along with my one-on-one sessions, attending my classes provides a more social way of <br/>getting fit and the enjoyment of being part of a group working towards a common goal. Take a <br/>look at what I offer and sign up for a session today.</p2>
      </div>
      <div className="details">
        {/* <div className='full'> */}
          <img alt="heart2" id='heart2'src='../Images/heart.webp' />
          <h3 id='title'> Full Body</h3>
          <p3 id="para">There is  no better way to get those <br/>important muscles working than to <br/>engage in this method. Designed to <br/>improve strength, coordination, and <br/>wellbeing, this class is guaranteed to <br/>take your fitness to the next level.</p3>
        {/* </div> */}
        {/* <div className='cardio'> */}
          <img id='heart'alt="heart" src='../Images/heart.webp' />
          <h3 id='title1'>Cardio</h3>
          <p3 id="para1">Designed to improve strength,<br/> coordination, and wellbeing, this class<br/> is guaranteed to take your fitness to<br/> the next level</p3>
        {/* </div> */}
        {/* <div className='core'> */}
          <img id='heart1'alt="heart1" src='../Images/heart.webp' />
          <h3 id='title2'>Core</h3>
          <p3 id="para2"> Designed to improve strength, <br/>coordination, and wellbeing, this class <br/>is guaranteed to take your fitness to <br/>the next level.</p3>
        {/* </div> */}

      </div>
    </div>
  );
}

export default Home;
