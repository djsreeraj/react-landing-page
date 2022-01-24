import React from "react";
import StatCountCircle from "./StatCountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { makeStyles } from "@material-ui/styles";
import LayoutWrapper from "../LayoutWrapper";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    marginTop: "246px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Stats = () => {
  const classes = useStyle();
  return (
    <LayoutWrapper>
      <div className={classes.wrapper}>
        <StatCountCircle
          label="Likes"
          count={934}
          icon={<FavoriteBorderIcon />}
          isLike={true}
        />
        <StatCountCircle label="Events" count={112} icon={<EventIcon />} />
        <StatCountCircle label="Lives" count={20} icon={<LiveTvIcon />} />
        <StatCountCircle label="Artists" count={15} icon={<GroupIcon />} />
      </div>
    </LayoutWrapper>
  );
};

export default Stats;
