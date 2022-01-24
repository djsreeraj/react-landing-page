import React from "react";
import { makeStyles } from "@material-ui/core";
import { ComponentHeader } from "../ComponentHeader";
import LayoutWrapper from "../LayoutWrapper";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    paddingBottom: "100px",
  },
  actionButton: {
    color: "#fff",
    "&:hover, &:focus": {
      color: "#E5C558",
    },
  },
}));

const Reviews = () => {
  const classes = useStyle();

  let action: any = reviewsAction();
  function reviewsAction() {
    return (
      <p onClick={test} className={classes.actionButton}>
        1/12 &nbsp; &larr; &nbsp;&nbsp; &rarr;
      </p>
    );
  }

  function test() {
    console.log("Reviews scroll all....");
  }
  return (
    <LayoutWrapper>
      <div className={classes.wrapper}>
        <ComponentHeader title="Reviews" rightAction={action} />
      </div>
    </LayoutWrapper>
  );
};

export default Reviews;
