import {
  ClickAwayListener,
  Grid,
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
import { useDispatch } from "react-redux";
import { openMenu } from "../../../redux/user";

const SmallHeader = ({ dest, origin }) => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = React.useState(false);
  const Dispatch = useDispatch();
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
                    <div className={classes.siteLogoDark}></div>
                    <Typography>تورینو</Typography>
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
            <div className={classes.profileMenu}>
              <div className={classes.menuIconContainer}>
                <MenuIcon />
              </div>
              <div className={classes.avatarContainer}>
                <AccountCircleIcon />
              </div>
            </div>
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
