import { makeStyles, alpha } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import Logo from "../images/logo.png";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

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
  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <img src={Logo} alt="logo" className={classes.logo} />

          <div className={classes.navlinks}>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
