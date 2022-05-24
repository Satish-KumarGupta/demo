import React, { useEffect, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles(()=>({
    list:{
        width:200,
     
    },
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
     
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();

const handleLogout=()=>{
  console.log("called now");
  localStorage.clear();
  window.location.reload();
}

const token= localStorage.getItem('Success');
const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={classes.list}>
         <ListItem  onClick={() => setOpenDrawer(false)}>
            <ListItemText >
              <Link className={classes.link} to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/" className={"text-danger fs-2 bg-dark text-decoration-none"} onClick={handleLogout}>
              {!token ? <span>Signin</span> : <span>Logout</span>}
            </Link>
            </ListItemText>
          </ListItem>
          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">Faq</Link>
            </ListItemText>
          </ListItem> */}

        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;