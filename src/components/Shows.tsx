import React from "react";
import { makeStyles } from "@material-ui/core";
import { ComponentHeader } from "./ComponentHeader";

const useStyle = makeStyles((theme) => ({
  wrapper: {},
  actionButton: {
    color: "#E5C558",
    "&:hover, &:focus": {
      color: "#fff",
    },
  },
}));

const Shows = () => {
  const classes = useStyle();

  let action: any = showsAction();

  function showsAction() {
    return (
      <p onClick={showAll} className={classes.actionButton}>
        View All{" "}
      </p>
    );
  }

  function showAll() {
    console.log("Showing all....");
  }

  return (
    <div className={classes.wrapper}>
      <ComponentHeader title="Upcoming Shows" rightAction={action} />
    </div>
  );
};

export default Shows;
