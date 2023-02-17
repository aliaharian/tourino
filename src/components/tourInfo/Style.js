import { makeStyles } from "@material-ui/styles";
import bg from "../../assets/img/bg.png";
export default makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "21px 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "21px 16px",
    },
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
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
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
    marginBottom: 24,
  },
  passengerInfo: {},
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 24,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gridGap: 24,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  nationalCodeContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
  submitBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>button": {
      width: "220px",
      height: "56px",
      borderRadius: "20px",
      backgroundColor: "#FF5A5F",
      color: "#fff",
      fontSize: 16,
      "&:hover": {
        backgroundColor: "#FF5A5F",
      },
    },
  },
  selectFromBtn: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    "&>button": {
      width: "220px",
      height: "56px",
      color: "#406D97",
      borderRadius: "20px",
      "& svg": {
        color: "#406D97",
      },
      // border: "1px solid #e0e0e0",
    },
  },
  transportDialog: {
    width: 600,
    height: 600,
    borderRadius: 16,
    padding: "0",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
  },
  dialogTitle: {
    display: "flex",
    padding: "28px 32px",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: "16px 16px",
    },
    "& p": {
      fontSize: 18,
      margin: 0,
    },
  },
  transportSelector: {
    width: "100%",
    padding: "13px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    marginBottom: 32,
    [theme.breakpoints.down("sm")]: {
      padding: "13px 16px",
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "&>p": {
        margin: 0,
        fontSize: 16,
      },
    },
  },
  selectedType: {
    borderBottom: "2px solid #406D97",
  },
  vehiclesContainer: {
    width: "100%",
    height: "calc(100% - 160px)",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100% - 200px)",
    },
  },
  vehicleItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 32px",
    borderBottom: "1px solid #E0E0E0",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "12px 16px",
    },
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      "&:nth-child(1)": {
        "& p": {
          margin: 0,
          fontSize: 16,
        },
      },
    },
  },
  dialogAgencyLogoContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    border: "1px solid #E0E0E0",
    padding: 14,
    marginRight: 16,
    "&>img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  dialogTransportName: {
    fontSize: 14,
    marginBottom: "12px !important",
  },
  dialogTransportDate: {
    fontSize: 14,
    color: "#757575",
  },
  dialogTransportPrice: {
    fontSize: 16,
    direction: "rtl",
  },
  tourItemContainer: {
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    padding: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "24px",
    },
    "&>div": {
      borderBottom: "none !important",
      padding: "0 !important",
    },
  },
}));
