import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EvStationIcon from '@material-ui/icons/EvStation';
import RoomIcon from '@material-ui/icons/Room';
import LayersIcon from '@material-ui/icons/Layers';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  onClick={()=>{
        window.open("/dashboard", "_self");
      }}/>
    </ListItem>

      
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Summary" onClick={()=>{
        window.open("/SummaryControl", "_self");
      }}/>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <ListItemText primary="Shortest Route" onClick={()=>{
        window.open("/ShortestControl", "_self");
      }}/>
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <EvStationIcon />
      </ListItemIcon>
      <ListItemText primary="Player Registration" onClick={()=>{
        window.open("/VehicleControl", "_self");
      }}/>
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <AirlineSeatIndividualSuiteIcon />
      </ListItemIcon>
      <ListItemText primary="Drowsy Detect" onClick={()=>{
        window.open("/DrowsyControl", "_self");
      }}/>
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Classification" onClick={()=>{
        window.open("/dashboard", "_self");
      }}/>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" onClick={()=>{
        window.open("/login", "_self");
      }}/>
    </ListItem>
  </div>
);


