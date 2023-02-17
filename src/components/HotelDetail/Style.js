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
  hotelInfo: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    border: "1px solid #E0E0E0",
    borderRadius: 24,
    minHeight: "294px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "&>div": {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: "100%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
  },
  hotelImage: {
    height: "244px",
    marginRight: 24,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: 24,
    },
    "&>img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  hotelDetail: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      marginBottom: 24,
    },
    "&>p": {
      fontSize: 18,
      borderBottom: "1px solid #E0E0E0",
      marginBottom: 16,
      paddingBottom: 16,
      marginTop: 0,
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      "&>p": {
        margin: 0,
      },
    },
  },
  stars: {
    backgroundColor: "#FFEBEC80",
    alignItems: "center",
    justifyContent: "center",
    width: 54,
    borderRadius: 4,
    height: 32,
    marginBottom: 16,
    "& svg": {
      color: "#FF5A5F",
      fontSize: 16,
      marginRight: 4,
    },
  },
  rate: {
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    width: 154,
    borderRadius: 4,
    height: 32,
    marginBottom: 16,
    "& svg": {
      color: "#BDBDBD",
      fontSize: 16,
      marginRight: 4,
    },
    "&>p": {
      color: "#757575",
      fontSize: 12,
    },
  },
  address: {
    "& svg": {
      color: "#BDBDBD",
      fontSize: 16,
      marginRight: 4,
    },
    "&>p": {
      color: "#424242",
      fontSize: 14,
    },
  },
  divider120: {
    width: 120,
    height: 1,
    backgroundColor: "#E0E0E0",
    margin: "16px 0",
  },
  eghamat: {
    "&>p": {
      "&:nth-child(1)": {
        fontSize: 12,
        color: "#757575",
        marginRight: 4,
      },
    },
  },
  hotelMap: {
    width: "278px !important",
    flexDirection: "column",
  },
  map: {
    width: 278,
    height: 182,
  },
  gotoHotel: {
    marginTop: 24,
    "&>a": {
      width: 157,
      height: 40,
      borderRadius: 20,
      border: "1px solid #707070",
      color: "#707070",
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
  transportContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridGap: 24,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1,1fr)",
    },
  },
  transportCard: {
    display: "flex",
    cursor: "pointer",
    border: "1px solid #E0E0E0",
    borderRadius: 24,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    "&>div": {
      display: "flex",
      "&>img": {
        marginRight: 20,
        minHeight: 80,
        maxHeight: 80,
      },
      "&>div": {
        "&>p": {
          margin: 0,
          "&:nth-child(1)": {
            color: "#ACACAC",
            fontSize: 14,
          },
          "&:nth-child(2)": {
            color: "#0f0f0f",
            fontSize: 16,
            margin: "12px 0",
          },
          "&:nth-child(3)": {
            color: "#757575",
            fontSize: 16,
          },
        },
      },
    },
    "& svg": {
      fontSize: 40,
      color: "#757575",
    },
  },
  notCheckedIcon: {
    width: 16,
    height: 16,
    borderRadius: 4,
    border: "1px solid #E0E0E0",
  },
  checkedIcon: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: "#406D97",
  },
  servicesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: 24,
    marginBottom: 72,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2,1fr)",
    },
  },
  checkboxLabel: {
    display: "flex",
    "& p": {
      fontSize: 12,
    },
  },
  freeBadge: {
    backgroundColor: "#FF5A5F",
    color: "#fff",
    borderRadius: 16,
    width: 57,
    height: 24,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 9,
  },
  priceContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 65,
  },
  price: {
    width: 511,
    height: 80,
    borderRadius: 16,
    backgroundColor: "#EEEEEE",
    border: "1px solid #E0E0E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    "& p": {
      fontSize: 20,
      margin: 0,
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
    "& p": {
      fontSize: 18,
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "18px 16px",
    },
  },
  transportSelector: {
    width: "100%",
    padding: "13px 80px 0",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    backgroundColor: "#F5F5F5",
    marginBottom: 32,
    [theme.breakpoints.down("sm")]: {
      padding: "13px 24px 0",
      marginBottom: 24,
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      "&>p": {
        margin: 0,
        marginBottom: 11,
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
    padding: "12px 40px 12px 32px",
    borderBottom: "1px solid #E0E0E0",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "12px 24px 12px 16px",
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
}));
