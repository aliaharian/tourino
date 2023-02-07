import { Typography } from "@material-ui/core";
import {
  GroupOutlined,
  PermIdentityOutlined,
  BackpackOutlined,
  PaymentsOutlined,
} from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { numberFormat } from "../../utilities";
import useStyles from "./Style";
import Link from "next/link";
import clsx from "clsx";
const ProfileSidebar = () => {
  const classes = useStyles();
  const profile = useSelector((state) => state.user.userProfile);
  console.log("profile", profile);
  const [nav, setNav] = useState([
    {
      id: 1,
      title: "اطلاعات کاربری",
      link: "/profile/info",
      icon: <PermIdentityOutlined />,
      active: true,
    },
    {
      id: 2,
      title: "تور های من",
      link: "/profile/tours",
      icon: <BackpackOutlined />,
      active: false,
    },
    {
      id: 1,
      title: "مسافران",
      link: "/profile/passengers",
      icon: <GroupOutlined />,
      active: false,
    },
    {
      id: 1,
      title: "کیف پول و تراکنش ها",
      link: "/profile/wallet",
      icon: <PaymentsOutlined />,
      active: false,
    },
  ]);

  //change active of nav based on page url
  useEffect(() => {
    const url = window.location.pathname;
    const newNav = nav.map((item) => {
      if (url.includes(item.link)) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setNav(newNav);
  }, []);

  return (
    <div className={classes.profileSidebar}>
      <div className={classes.userInfo}>
        <AccountCircle />
        <Typography>
          {profile.user.name} {profile.user.last_name}
        </Typography>
      </div>
      <div className={classes.walletInfo}>
        <Typography>موجودی:</Typography>
        <Typography>
          {numberFormat.toPersianSeprateTomanCommas(
            profile.user.wallet?.amount
          )}{" "}
          ریال
        </Typography>
      </div>
      <div className={classes.nav}>
        {nav.map((item) => (
          <Link href={item.link}>
            <a>
              <div
                className={clsx(
                  classes.navItem,
                  item.active && classes.navItemActive
                )}
              >
                <div className={classes.navItemIcon}>{item.icon}</div>
                <div className={classes.navItemTitle}>{item.title}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
