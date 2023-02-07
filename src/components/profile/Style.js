import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  profileSidebar: {
    width: "100%",
    border: "1px solid #D9D9D9",
    minHeight: 700,
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
    flexDirection: "column",
    "& svg": {
      color: theme.textColor.avatarBg,
      fontSize: 48,
      marginBottom: 12,
    },
    "& p": {
      fontSize: 15,
    },
  },
  walletInfo: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 48,
    borderTop: "1px solid #D9D9D9",
    borderBottom: "1px solid #D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    "& p": {
      "&:nth-child(1)": {
        fontSize: 12,
        color: theme.textColor.secondary,
      },
      "&:nth-child(2)": {
        fontSize: 15,
        color: theme.textColor.primary,
      },
    },
  },
  nav: {
    width: "100%",
    padding: "14px 16px",
  },
  navItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 40,
    margin: "23px 0",
    padding: "10px 12px",
    borderRadius: 8,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#E8EDF3",
      "& svg": {
        color: theme.textColor.avatarBg,
      },
    },

    "&:nth-child(1)": {
      marginTop: 0,
    },
  },
  navItemTitle: {
    color: "#424242",
    marginLeft: 8,
    fontSize: 15,
  },
  navItemActive: {
    backgroundColor: "#E8EDF3",
    "& svg": {
      color: theme.textColor.avatarBg,
    },
  },
  profileInfo: {
    maxWidth: 534,
    margin: "48px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mb24px: {
    marginBottom: 24,
    width: "100%",
  },
  submitBtn: {
    width: 136,
    height: 40,
    backgroundColor: "#FF5A5F",
    color: "#fff",
    margin: "40px auto 0",
    "&:hover": {
      backgroundColor: "#FF5A5F",
    },
  },
  profileTours: {
    width: "100%",
  },
  profileToursTable: {
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& thead": {
      height: 54,
      "& tr": {
        backgroundColor: "#fafafa",
        "&>th": {
          "&:nth-child(1)": {
            borderRadius: " 12px 0 0 12px",
          },
          "&:last-child": {
            borderRadius: "0 12px 12px 0",
            minWidth: 96,
          },
        },
      },
    },
    "& tbody": {
      marginTop: 3,
      "& tr": {
        height: 68,
        "&:nth-child(1)": {
          height: 72,
        },
        "&>td": {
          textAlign: "center",
          "&:nth-child(1)": {
            borderRadius: " 12px 0 0 12px",
          },
          "&:last-child": {
            borderRadius: "0 12px 12px 0",
          },
        },
      },
    },
  },
  profileToursTableBtn: {
    width: "24px !important",
    height: "24px !important",
    minWidth: "24px !important",
    maxWidth: "24px !important",
    padding: "0 !important",
    backgroundColor: "#fafafa",
    "& svg": {
      fontSize: "20px !important",
      color: "#BDBDBD",
    },
  },
}));
