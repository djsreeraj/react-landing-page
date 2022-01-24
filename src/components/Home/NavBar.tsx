import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Hidden,
} from "@material-ui/core";
import Logo from "../../images/logo.png";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import { useState } from "react";

const navigationLinks = [
  { name: "Help", href: "#" },
  { name: "Account", href: "#" },
];

const useStyle = makeStyles((theme) => ({
  appbar: {
    background: "none",
    "& .MuiToolbar-gutters": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  appbarWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {},
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    lineHeight: "26px",
    marginLeft: theme.spacing(5),
    display: "flex",
    alignItems: "center",
  },
  linkStyle: {
    marginRight: 20,
  },
  iconMob: {
    color: "#fff",
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0.7)",
  },
  iconWhite: {
    color: "#fff",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    fontSize: "14px",

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Container disableGutters>
          <Toolbar className={classes.appbarWrapper}>
            <img src={Logo} alt="logo" className={classes.logo} />
            <div className={classes.navlinks}>
              <Hidden xsDown>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div className={classes.link}>Help</div>
                <div className={classes.link}>Account</div>
                <div className={classes.link}>
                  <LocalMallOutlinedIcon />
                </div>
              </Hidden>

              <Hidden smUp>
                <div className={classes.iconMob}>
                  <SearchIcon />
                </div>
                <div className={classes.iconMob}>
                  <LocalMallOutlinedIcon />
                </div>
                <div className={classes.iconMob}>
                  <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon className={classes.iconWhite} />
                  </IconButton>
                </div>
              </Hidden>
            </div>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.name}>
                <Link
                  className={classes.linkStyle}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
};

export default NavBar;
