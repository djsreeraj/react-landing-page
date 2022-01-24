import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
// import TrendingFlatOutlinedIcon from "@material-ui/icons/TrendingFlatOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: "40px",
    color: "#fff",
    width: "300px",
    borderRadius: "8px",
    boxShadow: "8px -8px #301a68",
    margin: "40px 0",
    marginRight: "35px",
    backgroundColor: "#111229",
    cursor: "pointer",
  },
  media: {
    height: 220,
  },
  tag: {
    padding: "1px 6px",
    width: "fit-content",
    color: "#682f26",
    backgroundColor: "#e5c558",
    fontFamily: "Nunito",
    fontSize: "12px",
    fontWeight: 600,
  },
  cardContent: {},
  cardtitle: {
    fontFamily: "LibreBaskerville",
    fontSize: "20px",
    lineHeight: "32px",
    margin: "10px 0 0 0",
  },
  cardAction: {
    textTransform: "none",
    color: "#0259EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
    fontSize: "16px",
  },
  tickets: {
    paddingLeft: "15px",
    borderLeft: "1px solid rgba(255,255,255,0.2)",
    color: "#8e24aa",
  },
  icon: {
    // background: "-moz-linear-gradient(top, #e72c83 0%, #a742c6 100%)",
    // background: "-webkit-linear-gradient(top, #e72c83 0%,#a742c6 100%)",
    // background: "linear-gradient(to bottom, #8e24aa 0%, #ab47bc 100%)",
    // backgroundClip: "text",
  },
  // iconActive: {
  //   display: "hidden",
  // },
  // iconInactive: {
  //   display: "block",
  // },
  actionsBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  moreTxt: {
    transition: "0.3s",
    "&:hover, &:focus": {
      marginRight: "20px",
    },
  },
  moreArrow: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    color: "#0259eb",
    paddingLeft: "15px",
    transition: "0.3s",
    "&:hover, &:focus": {
      paddingLeft: "25px",
    },
  },
});

interface IProps {
  title: string;
  img: string;
  category: string;
}

export const ShowCard: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [ticketFocus, setTicketFocus] = useState<boolean>(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../images/singers/${props.img}`)}
          title={props.title}
        />
        <CardContent>
          <Typography
            variant="body2"
            className={classes.tag}
            color="textSecondary"
            component="p"
          >
            {props.category}
          </Typography>
          <Typography
            className={classes.cardtitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.actionsBar}>
        <Button size="small" className={classes.cardAction}>
          <span className={classes.moreTxt}> More info </span>
          <span className={classes.moreArrow}>
            <ArrowForwardOutlinedIcon />
          </span>
        </Button>

        <Button
          className={classes.tickets}
          size="small"
          color="secondary"
          onMouseOver={() => setTicketFocus(true)}
          onMouseLeave={() => setTicketFocus(false)}
        >
          <span className={classes.icon}>
            {ticketFocus ? (
              <ConfirmationNumberIcon />
            ) : (
              <ConfirmationNumberOutlinedIcon />
            )}
          </span>
        </Button>
      </CardActions>
    </Card>
  );
};
