import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import LayoutWrapper from "../LayoutWrapper";

const useStyle = makeStyles((theme) => ({
  headerWrapper: {},
  title: {
    marginTop: "246px",
    fontFamily: "Libre Baskerville",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "80px",
    lineHeight: "96px",
    color: "#FFFFFF",
  },
  subTitle: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "32px",
    color: "#FFFFFF",
    width: "614px",
    opacity: "0.6",
  },
}));

const Header = () => {
  const classes = useStyle();

  return (
    <div className={classes.headerWrapper}>
      <LayoutWrapper>
        <NavBar />
        <Typography variant="h1" className={classes.title}>
          Cari Cari
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </Typography>
      </LayoutWrapper>
    </div>
  );
};

export default Header;
