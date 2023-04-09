import {
  ClickAwayListener,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./SmallHeaderStyle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchSection from "./SearchSection";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import logo from "../../assets/icon/logoP.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  openMenu,
  setAuthOpen,
  setAuthStep,
} from "../../../redux/user";
import { useRouter } from "next/router";
import Auth from "../auth/Auth";

const SmallHeader = ({ dest, origin }) => {
  const classes = useStyles();
  const router = useRouter();
  const [showSearch, setShowSearch] = React.useState(false);
  const Dispatch = useDispatch();
  const authStep = useSelector((state) => state.user.authStep);
  const authOpen = useSelector((state) => state.user.authOpen);
  const userProfile = useSelector((state) => state.user.userProfile);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleLogout = () => {
    Dispatch(logout());
    setAnchorEl(null);
  };
  //useMediaQuery
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [scrollPos, setScrollPos] = useState(false);
  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;
    setScrollPos(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleOpenMenu = () => {
    Dispatch(openMenu(true));
  };

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
          // console.log('sdvsdvdvdsvdsvsdvdsvdsvdsv')
          // setShowSearch(false);
        }}
      >
        <div
          className={clsx(
            classes.headerGrandContainer,
            classes.headerContainerShadow,
            showSearch && classes.headerContainerTall
          )}
          style={{ backgroundColor: "#fff" }}
        >
          <Grid className={clsx(classes.headerContainer)}>
            {isMobile ? (
              <div className={classes.openMenu} onClick={handleOpenMenu}>
                <MenuIcon />
              </div>
            ) : (
              <div className={classes.siteNameDark}>
                <Link href="/">
                  <a>
                    {/* <div className={classes.siteLogoDark}></div>
                    <Typography>تورینو</Typography> */}
                    <img className={classes.logoImg} src={logo} />
                  </a>
                </Link>
              </div>
            )}
            <SearchSection
              dest={dest}
              origin={origin}
              showSearch={showSearch}
              setShowSearch={(e) => {
                setShowSearch(e);
              }}
              scrollPos={true}
            />
            <div
              className={clsx(
                classes.profileMenu,
                !userProfile && classes.loginContainer
              )}
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
                <MenuItem
                  key={0}
                  onClick={() => {
                    setAnchorEl(null);
                    router.push({
                      pathname: "/profile/info",
                    });
                  }}
                >
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

export default SmallHeader;
