import React, { useState } from 'react';
import axios from "axios";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import drowsy from "../../Information/Images/pune-mumbai-map.png"
import Button from "react-bootstrap/Button";
const API_URL = "http://localhost:3001";

export default function Shortest() {
  const [condition, setCondition] = useState(false);
  const [name1, SetName1] = useState([]);
  const [name2, SetName2] = useState([]);
  const [result, SetResult] = useState([]);

  const Calculate = async (e) => {
    console.log("Posting")
    let response = await axios.post(`${API_URL}/api/StartMaps`, {

      name1:name1,
      name2:name2
    });
    console.log(await response)
    SetResult(response.data.data)
    console.log(result);
  }


  const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

 
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>





      <Container maxWidth="lg" className={classes.container}>

      <center>
        <section id="contact" className="contact">
          <div className="container">
          <div className="php-email-form">

        <div className="row">
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <label>From:</label>
            <input
              type="text"
              className="form-control"
              placeholder="From"
              required=""
              value={name1}
              onChange={(event) => {
                SetName1(event.target.value)
              }}
            />
          </div>

          <div className="col-md-6 form-group mt-3 mt-md-0">
            <label>To:</label>
            <input
              type="text"
              className="form-control"
              placeholder="To"
              required=""
              value={name2}
              onChange={(event) => {
                SetName2(event.target.value)
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-dark"
          onClick={() => {
          Calculate();
          }}
        >
          Calculate
          </button>

        </div>
           
          </div>
        </section>
      </center>

        <h2>Trips Distance in Km: {result}</h2> <br></br>

        <Grid container spacing={5}>

          <Grid item xs={6} >
            <Paper className={fixedHeightPaper}>
              <img src={drowsy} style={{ width: "450px" }} />
            </Paper>
          </Grid>

          <Grid item xs={6} >
            <Paper className={fixedHeightPaper}>
            <Button onClick={()=>{
                            window.open('http://localhost/route/bingtest.html', "_self")
                        }}>Navigation Start</Button>

              {/* <button onClick={() => {
                setCondition(false)
                Submit();
              }}>
                Stop
            </button> */}
            </Paper>
          </Grid>

          
        </Grid>


      

      </Container>
    </React.Fragment>
  );
}