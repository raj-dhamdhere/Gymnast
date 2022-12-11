import React, { useState } from 'react';
import axios from "axios";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import drowsy from "../../Information/Images/Drowsy.jpg"
import Button from "react-bootstrap/Button";

export default function Drowsy() {
  const [condition, setCondition] = useState(false);

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

  const Submit = async () => {
    try {
      console.log(condition)
      const data = await axios.post(
        "http://localhost:3001/api/drowsy",
        {
          condition: condition
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>





      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={5}>

          <Grid item xs={6} >
            <Paper className={fixedHeightPaper}>
              <img src={drowsy} style={{ width: "250px" }} />
            </Paper>
          </Grid>

          <Grid item xs={6} >
            <Paper className={fixedHeightPaper}>
              <Button onClick={() => {
                setCondition(true)
                Submit();
              }}>
                Enable
              </Button>

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