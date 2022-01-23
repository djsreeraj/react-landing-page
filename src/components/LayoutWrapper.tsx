import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
  wrapper: {
    width: "80%",
    margin: "0 auto",
  },
  logo: {},
}));

const LayoutWrapper: React.FC = (props) => {
  const classes = useStyle();
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default LayoutWrapper;
