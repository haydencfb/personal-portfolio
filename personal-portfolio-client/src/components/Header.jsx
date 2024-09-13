// CSS Imports
import classes from "../styles/main.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Image Imports
import profileLogo from "../assets/uzime.jpg";

// React Hook Imports
import { Link } from "react-router-dom";
import { useState } from "react";

// MUI Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Header() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [currentPage, setCurrentPage] = useState('About');

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        {/* <h1 className={`${classes.headerH1}`}>Hayden Fitzpatrick-Brintle</h1>

        <img src={profileLogo} alt="Hayden" className={`${classes.headerImg}`} />

        <nav className={`${classes.headerNav}`}>

          <ul className={`${classes.headerUl}`}>

            <li>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            </li>

            <li>
              <Link to="/" className={`${classes.headerLink}`}>
                  About Me
              </Link>
            </li>

            <li>
              <Link to="/Portfolio" className={`${classes.headerLink}`}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/Contact" className={`${classes.headerLink}`}>  
                  Contact Me
              </Link>
            </li>

            <li>
              <Link to="/Resume" className={`${classes.headerLink}`}>
                    Resume
              </Link>
            </li>

          </ul>

        </nav> */}

      </>
  );
}
