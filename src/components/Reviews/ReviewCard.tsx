import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
const useStyle = makeStyles((theme) => ({
  card: {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    columnGap: "10px",
    background: "#0a0b1a",
    color: "#fff",
    justifyContent: "space-around",
    marginTop: "50px",
    border: "2px solid gold",
    borderRadius: "8px",
    boxShadow: "8px -8px #0277bd",
    padding: "20px 5px",
  },
  cardHeader: {
    color: "#fff",
  },
  cardTitle: {
    color: "#fff",
  },
  cardSubTitle: {
    color: "#E5C558",
  },
  cardContent: {
    color: "#fff",
  },
  userIcon: {},
}));

interface IProps {
  user: string;
  img: string;
  location: string;
  reviewTxt: string;
}

export const ReviewCard: React.FC<IProps> = (props) => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="user"
            className={classes.userIcon}
            src={require(`../../images/thumbnails/${props.img}`)}
          ></Avatar>
        }
        classes={{
          title: classes.cardTitle,
          subheader: classes.cardSubTitle,
        }}
        title={props.user}
        subheader={props.location}
        className={classes.cardHeader}
      />
      <CardContent>
        <Typography
          className={classes.cardContent}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.reviewTxt}
        </Typography>
      </CardContent>
    </Card>
  );
};
