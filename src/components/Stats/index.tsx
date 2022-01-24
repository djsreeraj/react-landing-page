import React from "react";
import StatCountCircle from "./StatCountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { makeStyles } from "@material-ui/core";
import LayoutWrapper from "../LayoutWrapper";
import { Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    marginTop: "246px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap",
      overflowX: "auto",
      marginTop: "120px",
    },
  },
}));

const Stats = () => {
  const classes = useStyle();
  return (
    <LayoutWrapper>
      <Container disableGutters className={classes.wrapper}>
        <StatCountCircle
          label="Likes"
          count={934}
          icon={<FavoriteBorderIcon />}
          isLike={true}
        />
        <StatCountCircle label="Events" count={112} icon={<EventIcon />} />
        <StatCountCircle label="Lives" count={20} icon={<LiveTvIcon />} />
        <StatCountCircle label="Artists" count={15} icon={<GroupIcon />} />
      </Container>
    </LayoutWrapper>
  );
};

export default Stats;
