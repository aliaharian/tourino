import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  profileSidebar: {
    width: "100%",
    border: "1px solid #D9D9D9",
    minHeight: 500,
    borderRadius: 24,
  },
  userInfo: {
    width: "100%",
    height: 149,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "24px 24px 0 0",
    backgroundColor: "#F5F5F5",
    flexDirection:'column'
  },
  walletInfo: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 48,
    borderTop: "1px solid #D9D9D9",
    borderBottom: "1px solid #D9D9D9",
  },
}));
