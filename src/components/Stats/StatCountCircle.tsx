import React from "react";
import { Container, makeStyles } from "@material-ui/core";
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
    [theme.breakpoints.down("sm")]: {
      marginRight: "15px",
      minHeight: "150px",
      minWidth: "150px",
      height: "140px",
      margin: "0",
      padding: "0",
      lineHeight: "1.3rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      margin: "2px",
    },
  },
  liked: {
    color: "blue",
  },
  likedCircle: {
    border: "1px solid #DD4CAC",
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
    <Container
      disableGutters
      className={`${classes.wrapper} ${props.isLike && classes.likedCircle}`}
    >
      <p
        className={`${classes.icon} ${!isNewUser && classes.liked}`}
        onClick={onLikeClick}
      >
        {props.icon}
      </p>

      <p className={classes.countTxt}> {props.isLike ? likes : props.count} </p>

      <p className={classes.labelTxt}>{props.label}</p>
    </Container>
  );
};

export default StatCountCircle;
