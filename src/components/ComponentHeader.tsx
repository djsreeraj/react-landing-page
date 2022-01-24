import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "60px",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontFamily: "LibreBaskerville",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "40px",
  },
  titleAddon: {
    marginTop: "5px",
    width: "40px",
    border: "1.5px solid #0259eb",
    backgroundColor: "#0259eb",
  },
  rightAction: {},
}));

interface IProps {
  title: string;
  rightAction: HTMLElement;
}

export const ComponentHeader: React.FC<IProps> = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleSection}>
        <Typography variant="h2" className={classes.title}>
          {props.title}
        </Typography>
        <span className={classes.titleAddon}></span>
      </div>

      <div> {props.rightAction}</div>
    </div>
  );
};
