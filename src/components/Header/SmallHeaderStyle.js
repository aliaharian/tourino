import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  headerGrandContainer: {
    width: "100%",
    margin: "0 auto",
    padding: "21px 80px",
    zIndex: 12,
    height: 80,
    position: "sticky",
    top: 0,
    transition: "all 150ms ease",
    zIndex: 200,
    //hide on print
    "@media print": {
      display: "none",
    },
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "21px 80px",
    position: "absolute",
    zIndex: 12,
    height: 80,
    margin: "0 auto",
    position: "fixed",
    top: 0,
    transition: "all 150ms ease",
    right: "50%",
    transform: "translateX(50%)",
    [theme.breakpoints.down("sm")]: {
      padding: "21px 16px",
    },
  },
  headerContainerShadow: {
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px !important;",
  },
  headerContainerTall: {
    transition: "all 150ms ease",
    height: 170,
    [theme.breakpoints.down("sm")]: {
      height: 535,
    },
  },
  siteName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "all 150ms ease",
    paddingTop: 5,

    "&>p": {
      marginLeft: 10,
      color: "#fff",
      fontFamily: theme.font.bold,
    },
  },
  siteNameDark: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "all 150ms ease",
    paddingTop: 5,
    [theme.breakpoints.down(1200)]: {
      display: "none",
    },
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
    width: 79,
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 21,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    cursor: "pointer",
    minWidth: 79,
    border: "1px solid " + theme.textColor.border,
    //breakpoints
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  avatarContainer: {
    borderRadius: "50%",
    width: 31,
    height: 31,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: 35,
      color: theme.textColor.avatarBg,
      marginLeft: 11,
    },
  },
  menuIconContainer: {
    height: 20,
    "& svg": {
      fontSize: 20,
      color: theme.textColor.avatarBg,
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
  },
  transportContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 172,
    paddingTop: 7,

    "&>div": {
      position: "relative",
      cursor: "pointer",
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
    marginTop: 30,
    position: "absolute",
    top: 30,
    transform: "translateX(-12px)",
    padding: "0 40px",
    transition: "all 150ms ease",
  },
  searchbarContainerSm: {
    width: "300px",
    top: "-57px",
    transition: "all 150ms ease",
    //breakpoints
    [theme.breakpoints.down("sm")]: {
      top: "0",
    },
  },
  overlay: {
    position: "fixed",
    display: "none",
    top: 0,
    zIndex: 99,
    right: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  openMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  loginContainer: {
    width: 100,
    "& p": {
      fontSize: 12,
    },
  },
  logoImg:{
    height:31
  }
}));
