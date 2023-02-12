import { makeStyles } from "@material-ui/styles";
import bg from "../../assets/img/bg.png";
export default makeStyles((theme) => ({
  headerGrandContainer: {
    width: "100vw",
    margin: "0 auto",
    padding: "21px 80px",
    position: "absolute",
    zIndex: 12,
    height: 80,
    position: "fixed",
    top: 0,
    transition: "all 150ms ease",
    right: "50%",
    transform: "translateX(50%)",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1618,
    margin: "0 auto",
    padding: "16px 80px",
    position: "absolute",
    zIndex: 12,
    height: 80,
    margin: "0 auto",
    position: "fixed",
    top: 0,
    transition: "all 150ms ease",
    right: "50%",
    transform: "translateX(50%)",
    [theme.breakpoints.down(1200)]: {
      padding: "21px 40px",
    },
  },
  headerContainerShadow: {
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px !important;",
  },
  headerContainerTall: {
    transition: "all 150ms ease",
    height: 170,
  },
  siteName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "all 150ms ease",
    // paddingTop: 5,
    "&>a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textDecoration: "none !important",
      "&>p": {
        marginLeft: 10,
        color: "#fff",
        fontFamily: theme.font.bold,
      },
    },
  },
  siteNameDark: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "all 150ms ease",

    // paddingTop: 5,
    "&>a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textDecoration: "none !important",
      "&>p": {
        marginLeft: 10,
        color: theme.textColor.avatarBg,
        fontFamily: theme.font.bold,
      },
    },
  },

  siteLogo: {
    width: 31,
    height: 31,
    border: "1px solid #fff",
    borderRadius: 8,
    transition: "all 150ms ease",
  },
  siteLogoDark: {
    width: 31,
    height: 31,
    border: "1px solid " + theme.textColor.avatarBg,
    borderRadius: 8,
    transition: "all 150ms ease",
  },
  profileMenu: {
    width: 64,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 21,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    cursor: "pointer",
    minWidth: 64,
    border: "1px solid " + theme.textColor.border,
  },

  avatarContainer: {
    borderRadius: "50%",
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,

    "& svg": {
      fontSize: 26,
      color: theme.textColor.avatarBg,
    },
  },
  menuIconContainer: {
    height: 20,
    "& svg": {
      fontSize: 20,
      color: theme.textColor.avatarBg,
    },
  },
  loginContainer: {
    width: 100,
    "& p": {
      fontSize: 12,
    },
  },

  searchSectionContainer: {
    maxWidth: 860,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    //breakpoints
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  transportContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'space-between',
    // width: 182,
    // paddingTop: 7,

    "&>div": {
      position: "relative",
      cursor: "pointer",
      margin: "0 16px",
      "&:after": {
        position: "absolute",
        width: 0,
        height: 2,
        backgroundColor: "#fff",
        content: '""',
        bottom: -8,
        right: "50%",
        transform: "translateX(50%)",
        transition: "width 150ms ease",
        opacity: 0,
      },
      "&:hover": {
        "&:after": {
          opacity: 1,
          width: 5,
        },
      },
    },
    "& p": {
      color: "#fff",
      margin: 0,
    },
  },
  transportContainerDark: {
    transition: "all 150ms ease",
    "& p": {
      transition: "all 150ms ease",
      color: theme.textColor.avatarBg,
      margin: 0,
    },
    "&>div": {
      transition: "all 150ms ease",
      "&:after": {
        transition: "all 150ms ease",
        backgroundColor: theme.textColor.avatarBg,
      },
    },
  },
  transportActive: {
    "&:after": {
      width: "18px !important",
      opacity: "1 !important",
    },
  },
  searchbarContainer: {
    width: "100vw",
    marginTop: 33,
    position: "absolute",
    top: 26,
    transform: "translateX(-12px)",
    padding: "0 40px",
    transition: "all 150ms ease",
    [theme.breakpoints.down("sm")]: {
      position: "static",
      marginTop: 0,
      top: 0,
      padding: 0,
      transform: "translateX(0)",
    },
  },
  searchbarContainerSm: {
    width: "max-content",
    top: "-57px",
    transition: "all 150ms ease",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

}));
