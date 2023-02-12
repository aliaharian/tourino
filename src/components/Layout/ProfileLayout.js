import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../../redux/user";
import ProfileSidebar from "../profile/ProfileSidebar";
import Layout from "./Layout";
import useStyles from "./Style";
const ProfileLayout = ({ children }) => {
  const classes = useStyles();
  //useMediaQuery
  const sidebarRef = useRef();
  const isMobile = useMediaQuery("(max-width: 768px)");
  //dispatch
  const Dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.user.openMenu);
  const closeSidebar = () => {
    Dispatch(openMenu(false));
  };

  console.log("sidebarOpen", sidebarOpen);
  return (
    <Layout>
      <div className={classes.profileContainer}>
        <div
          className={clsx(
            classes.profileSidebarContainer,
            sidebarOpen && classes.sidebarOpen
          )}
          ref={sidebarRef}
          onClick={closeSidebar}
        >
          <ProfileSidebar />
        </div>
        <div className={classes.profileContent}>{children}</div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
