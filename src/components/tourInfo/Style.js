import { makeStyles } from "@material-ui/styles";
import bg from "../../assets/img/bg.png";
export default makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "21px 80px",
    [theme.breakpoints.down("sm")]: {},
    "&>h2": {
      fontSize: 18,
      marginBottom: 16,
    },
  },
  tourHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4px",
    margin: "24px 0",
    "&>p": {
      fontSize: 24,
      margin: 0,
    },
  },
  passengersContainer: {
    width: "100%",
  },
  passengerItemContainer: {
    width: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: 8,

    padding: "16px 24px",
  },
  passengerInfo: {},
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 24,
  },
  nationalCodeContainer:{
    marginTop:24,
    marginBottom:24,
  }
}));
