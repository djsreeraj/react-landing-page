import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { ComponentHeader } from "../ComponentHeader";
import LayoutWrapper from "../LayoutWrapper";
import { reviewsData } from "../../data";
import { ReviewCard } from "./ReviewCard";

const useStyle = makeStyles((theme) => ({
  listWrapper: {
    display: "flex",
    margin: "0",
    justifyContent: "space-between",
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
      <ComponentHeader title="Reviews" rightAction={action} />
      <Container className={classes.listWrapper}>
        {reviewsData.map((item: any) => {
          return (
            <ReviewCard
              user={item.user}
              img={item.img}
              location={item.location}
              reviewTxt={item.reviewTxt}
            />
          );
        })}
      </Container>
    </LayoutWrapper>
  );
};

export default Reviews;
