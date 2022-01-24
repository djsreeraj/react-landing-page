import React from "react";
import { makeStyles } from "@material-ui/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    width: "200px",
    border: "1px solid #FFFFFF",
    borderRadius: "100%",
    "&:hover, &:focus": {
      border: "1px solid #DD4CAC",
    },
    margin: "40px",
  },
  icon: {
    transform: "scale(1.4)",
    margin: "0",
    opacity: 0.7,
    "&:hover, &:focus": {
      color: "blue",
    },
  },
  countTxt: {
    margin: "7px",
    fontSize: "24px",
    fontFamily: "LibreBaskerville",
    color: "#fff",
  },
  liked: {
    color: "blue",
  },
  labelTxt: {
    margin: "0",
    fontFamily: "Nunito",
    fontSize: "16px",
    lineHeight: "32px",
    color: "#fff",
    opacity: 0.5,
  },
}));

const StatCountCircle: React.FC<{
  count: number;
  label: string;
  icon: SvgIconProps;
  isLike?: boolean;
}> = (props) => {
  const classes = useStyle();

  //state variables for like counting
  const [likes, setLikes] = useState<number>(props.count);
  const [isNewUser, setIsNewUser] = useState<boolean>(true);

  const onLikeClick = () => {
    if (props.isLike!) {
      if (isNewUser) {
        setLikes(likes + 1);
        setIsNewUser(false);
      } else {
        setLikes(likes - 1);
        setIsNewUser(true);
      }
    }
  };
  return (
    <div className={classes.wrapper}>
      <p
        className={`${classes.icon} ${!isNewUser && classes.liked}`}
        onClick={onLikeClick}
      >
        {props.icon}
      </p>

      <p className={classes.countTxt}> {props.isLike ? likes : props.count} </p>

      <p className={classes.labelTxt}>{props.label}</p>
    </div>
  );
};

export default StatCountCircle;
