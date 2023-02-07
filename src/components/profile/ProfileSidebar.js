import { Typography } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import useStyles from "./Style";
const ProfileSidebar = () => {
  const classes = useStyles();
  const profile = useSelector((state) => state.user.userProfile);
  console.log("profile",profile)
  return (
    <div className={classes.profileSidebar}>
      <div className={classes.userInfo}>
        <AccountCircle />
        <Typography>{profile.user.name} {profile.user.last_name}</Typography>
      </div>
      <div className={classes.walletInfo}></div>
    </div>
  );
};

export default ProfileSidebar;
