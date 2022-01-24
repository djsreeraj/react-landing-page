import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "80px",
  },

  // title: {
  //   color: "#fff",
  //   fontFamily: "LibreBaskerville",
  //   fontWeight: 400,
  //   fontSize: "32px",
  //   lineHeight: "40px",
  // },
  // titleAddon: {
  //   marginTop: "5px",
  //   width: "40px",
  //   border: "1.5px solid #0259eb",
  //   backgroundColor: "#0259eb",
  // },
  // rightAction: {},
}));
export const ReviewCard = () => {
  const classes = useStyle();

  return (
    <div>
      Card <p></p>
    </div>
  );
};
