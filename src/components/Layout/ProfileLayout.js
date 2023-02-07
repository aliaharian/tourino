import { useSelector } from "react-redux";
import ProfileSidebar from "../profile/ProfileSidebar";
import Layout from "./Layout";
import useStyles from "./Style";
const ProfileLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.profileContainer}>
        <div className={classes.profileSidebarContainer}>
          <ProfileSidebar />
        </div>
        <div className={classes.profileContent}>{children}</div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
