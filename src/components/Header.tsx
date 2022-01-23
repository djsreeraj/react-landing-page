import { makeStyles } from "@material-ui/styles";
import NavBar from "./NavBar";

const useStyle = makeStyles((theme) => ({
  headerWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  logo: {},
}));

const Header = () => {
  const classes = useStyle();

  return (
    <div className={classes.headerWrapper}>
      <NavBar />
      <h1>Cari Cari</h1>
      <p>
        Live from their sofa to yours. Get closer to your favorite artists, and
        never miss out.
      </p>
    </div>
  );
};

export default Header;
