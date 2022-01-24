import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { ComponentHeader } from "../ComponentHeader";
import { ShowCard } from "./ShowCard";
import LayoutWrapper from "../LayoutWrapper";
import { showData } from "../../data";

const useStyle = makeStyles((theme) => ({
  listWrapper: {
    display: "flex",
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  actionButton: {
    color: "#E5C558",
    "&:hover, &:focus": {
      color: "#0259eb",
      cursor: "pointer",
    },
  },
}));

const Shows = () => {
  const classes = useStyle();

  const showsAction = () => {
    return (
      <p onClick={showAll} className={classes.actionButton}>
        View All
      </p>
    );
  };

  let action: any = showsAction();

  function showAll() {
    console.log("Showing all....");
  }

  return (
    <LayoutWrapper>
      <ComponentHeader title="Upcoming Shows" rightAction={action} />
      <Container className={classes.listWrapper}>
        {showData.map((item: any) => {
          return (
            <ShowCard
              title={item.artist}
              img={item.img}
              category={item.category}
            />
          );
        })}
      </Container>
    </LayoutWrapper>
  );
};

export default Shows;
