import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  container: {
    maxWidth: 750,
    margin: "0 auto",
    padding: "21px 0",
    [theme.breakpoints.down("sm")]: {},
    "&>h2": {
      fontSize: 18,
      marginBottom: 16,
    },
  },
  mainWatcher: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    // minHeight: 500,
    borderRadius: 8,
    overflow: "hidden",
    // [theme.breakpoints.down("sm")]: {
    //   gridTemplateColumns: "1fr",

    // },

    "& p": {
      fontSize: 10,
      margin: 0,
    },
  },
  mb4: {
    marginBottom: "4px !important",
  },
  mt8: {
    marginTop: "8px !important",
  },
  mb16: {
    marginBottom: "16px !important",
  },
  textBold: {
    fontFamily: theme.font.bold,
    fontSize: "11px !important",
  },
  passengerInfoContainer: {
    // backgroundColor: "red",
    display: "grid",
    gridTemplateColumns: "2fr 10fr",
    border: "1px solid #E5E5E5",
    borderRadius: 8,
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom:16

    // },
  },
  passengerInfo: {
    padding: "8px",
  },
  supportContact: {
    backgroundColor: "#406D97",
    padding: "8px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRight: "1px solid #E5E5E5",
    "&>p": {
      writingMode: "vertical-rl",
      color: "#fff",
    },
  },
  tourInfoContainer: {
    border: "1px solid #E5E5E5",
    borderRadius: 8,
    // backgroundColor: "blue",
  },
  tourId: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #E5E5E5",
    "&>div": {
      display: "flex",
      alignItems: "center",
      "&>p": {
        "&:nth-child(1)": {
          marginRight: "4px !important",
        },
      },
    },
  },
  tourDetail: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    height: "100%",
  },
  tourPrice: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px",
    borderLeft: "1px solid #E5E5E5",
    height: "100%",
  },
  agencyContainer: {
    marginBottom: 32,
    "&>p": {
      textAlign: "center",
      fontFamily: theme.font.bold,
      fontSize: 12,
    },
  },
  tourDetailInner: {},
  tourDuration: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 8,
    width: "100%",
    padding: "8px",
    borderBottom: "1px solid #E5E5E5",
  },
  hotelInfo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 8,
    width: "100%",
    padding: "8px",
  },
  roomInfo: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: 8,
    width: "100%",
    padding: "0 8px 8px",
    borderBottom: "1px solid #E5E5E5",
  },
  hotelStars: {
    display: "inline-flex",
    backgroundColor: "#FF5A5F50",
    borderRadius: 4,
    padding: "4px",
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: 8,
      color: "#FF5A5F",
    },
    "& span": {
      fontSize: 8,
      lineHeight: "8px",
      marginLeft: 4,
    },
  },
  transportInfo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 8,
    width: "100%",
    borderBottom: "1px solid #E5E5E5",
    "&>div": {
      padding: "8px",
      "&:nth-child(1)": {
        borderRight: "1px solid #E5E5E5",
      },
    },
  },
  transportItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transportCompany: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "&>p": {
      marginTop: 4,
      fontSize: "9px !important",
    },
  },
  transportLogo: {
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    border: "1px solid #E5E5E5",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  transportVehicle: {
    // marginLeft: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "calc(100% - 64px)",
    "&>p": {
      "&:nth-child(1)": {},
      "&:nth-child(2)": {
        fontFamily: theme.font.bold,
      },
      "&:nth-child(3)": {
        fontSize: "18px !important",
        fontFamily: theme.font.bold,
      },
      "&:nth-child(4)": {
        fontSize: "14px !important",
        fontFamily: theme.font.bold,
      },
    },
  },
  servicesInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    padding: "8px",
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginRight: 8,
      marginBottom: 8,
      "&>svg": {
        fontSize: 12,
        color: "#406D97",
        marginRight: 2,
      },
    },
  },
  passengersContainer: {
    width: "100%",
    border: "1px solid #E5E5E5",
    marginTop: 16,
    borderRadius: 8,
    "& p": {
      fontSize: 10,
      margin: 0,
    },
  },
  passengerTitle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #E5E5E5",
  },
  passengersList: {
    width: "100%",
    "&>div": {
      "&:last-child": {
        borderBottom: "none",
      },
    },
  },
  passengerItem: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridGap: 8,
    padding: "8px",
    borderBottom: "1px solid #E5E5E5",
  },
  terms: {
    padding: "8px",
    "&>p": {
      marginBottom: "4px !important",
    },
  },
  paymentBadge: {
    padding: "8px 16px",
    borderRadius: 8,
    transform:"rotateZ(-45deg) translate(-35px,35px)",
    "&>p": {
      margin: 0,
      fontSize: 12,
      fontFamily: theme.font.bold,

    },
  },
}));
