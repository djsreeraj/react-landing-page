import { makeStyles, CssBaseline } from "@material-ui/core";
import Image from "../images/bg.jpg";
import NavBar from "./NavBar";
import Header from "./Header";
import Stats from "./Stats";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    height: "862px",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(
      180deg,
      rgba(5, 11, 20, 0.28) 0%,
      rgba(1, 13, 32, 0.69) 67.53%,
      #0a0b1a 85.33%
    ),
    url(${Image})`,
  },
}));

export const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Header />
      <Stats />
    </div>
  );
};
