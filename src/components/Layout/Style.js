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
  },
  profileSidebarContainer: {
    // backgroundColor: "red",
  },
  profileContent: {
    width: "100%",
    border: "1px solid #D9D9D9",
    minHeight: 500,
    borderRadius: 24,
    padding: 16,
  },
}));
