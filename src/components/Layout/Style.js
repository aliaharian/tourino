import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  profileContainer: {
    display: "grid",
    //978px and 242px from 1040px grid template
    gridTemplateColumns: "242px calc(100% - 266px)",
    gridGap: "24px",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "21px 80px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
      padding: "21px 16px",

      "&>div": {
        // width: '100%',
      },
    },
  },
  sidebarOpen: {
    [theme.breakpoints.down("sm")]: {
      left: 0 + " !important",
      "&>div": {
        left: 0 + " !important",
      },
    },
  },
  profileSidebarContainer: {
    // backgroundColor: "red",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: 0,
      left: "-100%",
      zIndex: 999,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      "&>div": {
        width: "75%",
        backgroundColor: "white",
        height: "100%",
        borderRadius: 0,
        position: "absolute",
        left: "-100%",
        transition: "all 150ms ease",
      },
    },
  },
  profileContent: {
    width: "100%",
    border: "1px solid #D9D9D9",
    minHeight: 500,
    borderRadius: 24,
    padding: 16,
    //breakpoint 768px
    [theme.breakpoints.down("sm")]: {
      border: "none",
      padding: 0,
    },
  },
}));
