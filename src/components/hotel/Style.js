import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  hotelContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "21px 80px",
    [theme.breakpoints.down("sm")]: {},
    "&>h2": {
      fontSize: 18,
      marginBottom: 16,
    },
  },
  hotelBrief: {
    display: "flex",
    marginBottom: 16,
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        marginRight: 4,
      },
      "& p": {
        margin: 0,
        fontSize: 12,
        color: "#424242",
      },
      "&:nth-child(1)": {
        "& svg": {
          color: "#FF5A5F",
        },
      },
      "&:nth-child(2)": {
        margin: "0 16px",
        "& svg": {
          color: "#BDBDBD",
        },
      },
      "&:nth-child(3)": {
        "& svg": {
          color: "#BDBDBD",
        },
      },
    },
  },
  hotelBriefGallery: {
    position: "relative",
    display: "flex",
    borderRadius: 16,
    overflow: "hidden",
    "&>div": {
      display: "flex",
      width: "100%",
      "&>div": {
        flex: 1,
        height: 456,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        //make grid for images
        "& img": {
          flex: 1,
          width: "100%",
          padding: 4,
          objectFit: "cover",
          height: "100%",
        },
      },
    },
  },
  seeAllBtn: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#fff",
    border: "1px solid #525252",
    borderRadius: 8,
    color: "#707070",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& svg": {
      color: "#343434",
    },
  },
  hotelDestInfo: {
    paddingBottom: 24,
    borderBottom: "1px solid #e0e0e0",
    "&>p": {
      fontSize: 18,
      margin: "32px 0 16px",
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      "&>div": {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        "& p": {
          margin: 0,
          "&:nth-child(2)": {
            fontSize: 12,
            color: "#9e9e9e",
            margin: "4px 0",
            lineHeight: "22px",
          },
          "&:nth-child(3)": {
            fontSize: 14,
          },
        },
        "& img": {
          width: 40,
        },
        "&:nth-child(2)": {
          padding: "0 56px",
          margin: "0 56px",
          borderLeft: "1px solid #e0e0e0",
          borderRight: "1px solid #e0e0e0",
        },
      },
    },
  },
  hotelInfo: {
    padding: "24px 0",
    borderBottom: "1px solid #e0e0e0",
    "&>p": {
      fontSize: 18,
      margin: "0 0 16px",
    },
    "&>div": {
      "& p": {
        margin: "8px 0",
      },
    },
  },
  hotelNotes:{
    padding: "24px 0",
    "&>p": {
      fontSize: 18,
      margin: "0 0 16px",
    },
    "&>div": {
      "& p": {
        margin: "8px 0",
      },
    },
  },
  hotelServices: {
    padding: "24px 0",
    borderBottom: "1px solid #e0e0e0",
    "&>p": {
      fontSize: 18,
      margin: "0 0 16px",
    },
   
  },
  hotelServiceContainer:{
    display: "flex",
    flexWrap: "wrap",
    '&>div':{
      '&:nth-child(1)':{
        marginRight:108
      },
      '&>div':{
        display: "flex",
        alignItems: "center",
        '&>p':{
          marginLeft:16,
          fontSize:14,
        }
      }
    }
  },
  seeAllServices: {
    backgroundColor: "#fff",
    border: "1px solid #525252",
    marginTop:24,
    width:148,
    height:40,
    borderRadius: 8,
    color: "#707070",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& svg": {
      color: "#343434",
    },
  },
  map:{
    width:"100%",
    height:300
  },
  addressMap:{
    display:"flex",
    width:"100%",
    alignItems:"center",
    marginTop:12,
    '&>p':{
      marginLeft:8
    }
  }
}));
