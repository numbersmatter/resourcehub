//test
import Link from 'next/link'
import clsx from 'clsx';
import { AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  useTheme,
  CssBaseline
}
from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useState } from 'react';
import { auth } from '../lib/firebase'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}));

export default function NavBar(){
  const { user, username } = useContext(UserContext)
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <div>
        <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Resource Hub {user ? `Welcome ${user.displayName}` : null }
              </Typography>


        

            </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button >
              
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/programs">
            <ListItem button >
              
              <ListItemText primary="programs" />
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
          <Link href="/enter">
            <ListItem button >
              
              <ListItemText primary="Sign-in" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/enter">
            <ListItem button onClick={() => auth.signOut()} >
              
              <ListItemText primary="Sign-Out" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      </div>
  )
}
