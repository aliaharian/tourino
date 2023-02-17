import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  dialogContainer: {
    width: 600,
    height: 600,
    borderRadius: 16,
    padding: "0",
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
  },
  formContainer:{
    padding: "13px 32px",
  },
  submitBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:32,
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
