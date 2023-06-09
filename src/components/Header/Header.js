import {
  ClickAwayListener,
  DialogContent,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import useStyles from "./Style";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchSection from "./SearchSection";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Auth from "../auth/Auth";
import logo from "../../assets/icon/logoP.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuthOpen, setAuthStep, getUserProfile, logout } from "../../../redux/user";
import { useRouter } from "next/router";

const Header = () => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = React.useState(false);
  const authStep = useSelector((state) => state.user.authStep);
  const authOpen = useSelector((state) => state.user.authOpen);
  const userProfile = useSelector((state) => state.user.userProfile);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter()

  const Dispatch = useDispatch();
  const [scrollPos, setScrollPos] = useState(false);
  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;
    setScrollPos(window.pageYOffset > 0);
  };
  console.log("userProfile", userProfile)
  useEffect(() => {
    // if (localStorage.getItem("isAuth") && !userProfile) {
    //   Dispatch(getUserProfile());
    // }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleLogout = () => {
    Dispatch(logout())
    setAnchorEl(null)
  }

  return (
    <>
      <Auth
        step={authStep}
        open={authOpen}
        onClose={() => {
          Dispatch(setAuthOpen(false));
          Dispatch(setAuthStep("enterNumber"));
        }}
      />
      <ClickAwayListener
        onClickAway={(e) => {
          // setShowSearch(false);
        }}
      >
        <div
          className={clsx(
            classes.headerGrandContainer,
            scrollPos && classes.headerContainerShadow,
            scrollPos && showSearch && classes.headerContainerTall
          )}
          style={scrollPos ? { backgroundColor: "#fff" } : {}}
        >
          <Grid className={clsx(classes.headerContainer)}>
            <div
              className={scrollPos ? classes.siteNameDark : classes.siteName}
            >
              <Link href="/">
                <a>
                  <img className={classes.logoImg} src={logo}/>
                  {/* <div
                    className={
                      scrollPos ? classes.siteLogoDark : classes.siteLogo
                    }
                  ></div>
                  <Typography>تورینو</Typography> */}
                </a>
              </Link>
            </div>
            <SearchSection
              showSearch={showSearch}
              homepage={true}
              setShowSearch={(e) => {
                setShowSearch(e);
              }}
              scrollPos={scrollPos}
            />
            <div
              className={clsx(classes.profileMenu , !userProfile && classes.loginContainer)}
              aria-haspopup="true"
              aria-controls="menu"
              onClick={(e) => {
                if (!userProfile) {
                  Dispatch(setAuthOpen(true));
                  Dispatch(setAuthStep("enterNumber"));
                } else {
                  setAnchorEl(e.currentTarget);
                }
              }}
            >
              
              {userProfile ? (
                <>
                  {" "}
                  <div className={classes.menuIconContainer}>
                    <MenuIcon />
                  </div>
                  <div className={classes.avatarContainer}>
                    <AccountCircleIcon />
                  </div>
                </>
              ) : (
                <div>
                  <Typography>ورود / ثبت نام</Typography>
                </div>
              )}
            </div>
            {userProfile && (
              <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem key={0} onClick={() => {
                  setAnchorEl(null)
                  router.push({
                    pathname: "/profile/info",
                  });
                }}>
                  پروفایل کاربری
                </MenuItem>
                <MenuItem key={1} onClick={handleLogout}>
                  خروج
                </MenuItem>
              </Menu>
            )}
          </Grid>
        </div>
      </ClickAwayListener>

      <div
        style={showSearch ? { display: "block" } : {}}
        className={classes.overlay}
        onClick={() => setShowSearch(false)}
      ></div>
    </>
  );
};

export default Header;
