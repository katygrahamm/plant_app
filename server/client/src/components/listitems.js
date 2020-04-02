import React from 'react';
import { Link } from "react-router-dom"; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HomeIcon from '@material-ui/icons/Home';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ArtTrackIcon />
      </ListItemIcon>
      <Link to='/dashboard'><ListItemText primary="Create" /></Link>
    </ListItem>
    <ListItem button>
    <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/myrooms'><ListItemText primary="My Spaces" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalFloristIcon />
      </ListItemIcon>
      <Link to='/myplants'><ListItemText primary="My Plants" /></Link>
     </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhotoLibraryIcon />
      </ListItemIcon>
      <Link to='/plantlibrary'><ListItemText primary="Library" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PlaylistAddCheckIcon />
      </ListItemIcon>
      <Link to='/wishlist'><ListItemText primary="Wish List" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ScheduleIcon />
      </ListItemIcon>
      <Link to='/schedule'><ListItemText primary="Schedule" /></Link>
    </ListItem>
  </div>
);
