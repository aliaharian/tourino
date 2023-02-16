import {
    FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import useStyles from "./Style";
import clsx from "clsx";
import { useRef, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function BirthdateInput(props) {
  const StyledSelect = withStyles((theme) => ({
    root: {
      width: 158,
      backgroundColor: "#fff !important",
      fontSize: 13,
      paddingBottom: 0,
      fontFamily: theme.font.medium,
      paddingTop: 0,
      paddingRight: "0 !important",
      [theme.breakpoints.down(550)]: {
        width: 78,
        textAlign: "center",
      },
      [theme.breakpoints.down(470)]: {
        width: 50,
      },
    },

    iconOpen: {
      transform: "rotateZ(180deg)",
    },
  }))(Select);

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      width: 178,
      height: 43,
      margin: "0 auto",
      backgroundColor: "#fff !important",
      fontSize: 13,
      padding: "13px 9px",
      fontFamily: theme.font.medium,
      color: theme.textColor.secondary,
      borderRadius: "8px !important",

      "&:hover": {
        color: theme.textColor.primary,
        // color: theme.buttonColor.normal,
        backgroundColor: "#f5f8fa !important",
      },
    },
  }))(MenuItem);

  const StyledFormControl = withStyles((theme) => ({
    root: {
      height: 40,
      width: 190,
      padding: "0 16px",
      border: "1px solid " + theme.textColor.border,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down(550)]: {
        width: 110,
      },
      [theme.breakpoints.down(470)]: {
        width: 70,
      },
      "&>label": {
        fontSize: 13,
        fontFamily: theme.font.regular,
        transform: "translate(0, 1.5px) scale(1) !important",
        color: theme.textColor.secondary,
      },
      "&>div": {
        "&:before": {
          display: "none !important",
          content: '""',
        },
        "&:after": {
          display: "none !important",
          content: '""',
        },
      },
      "& svg": {
        transition: "all 0.2s ease",
        color: theme.textColor.secondary,
        // top: '-8px'
        [theme.breakpoints.down(550)]: {
          display: "none",
        },
      },
    },
  }))(FormControl);

  const classes = useStyles();
  const [focusIndex, setFocusIndex] = useState(0);
  const selectRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Typography
        className={clsx(classes.label, props.required && classes.required)}
      >
        {props.label || ""}
      </Typography>
      <div className={classes.birthInputContainer}>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          displayEmpty
          //   variant="outlined"
          label={props.label}
          onChange={props.onChange}
          clFassName={clsx(classes.birthRoot, props.error && classes.error)}
          ref={selectRef}
          IconComponent={() => {
            return (
              <ExpandMoreIcon
                className={`MuiSvgIcon-root MuiSelect-icon ${
                  props.open && `MuiSelect-iconOpen`
                }`}
              />
            );
          }}
          MenuProps={{
            // anchorOrigin: {
            //     vertical: 'bottom',
            //     horizontal: 'right',
            // },
            // anchorEl:selectRef.current,
            // transformOrigin: {
            //     vertical: 'bottom',
            //     horizontal: 'right',
            // },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,

            style: {},
            PopoverProps: {
              style: {
                borderRadius: "8px !important",
              },
            },
            PaperProps: {
              style: {
                minWidth: 190,
                border: "none",
                boxShadow: "0 3px 10px #191a3212",
                borderRadius: "8px !important",
                transform: isMobile
                  ? "translate(-7px , 14px)"
                  : "translate(-18px , 14px)",
                // backgroundColor:'red',
              },
            },
          }}
        >
          {
            //menuItem from 1 to 31 in for loop
            Array.from(Array(31).keys()).map((item, index) => {
              return <StyledMenuItem value={item + 1}>{item + 1}</StyledMenuItem>;
            })
          }
        </StyledSelect>

        {/* <TextField
          className={clsx(classes.codeInputRoot, props.error && classes.error)}
          value={props.value[0]}
          onFocus={(event) => event.target.select()}
          onChange={(e) => {
            props.onChange(e, 0);
            setFocusIndex(1);
          }}
          inputRef={(input) => input && focusIndex === 0 && input.focus()}
          InputProps={{
            disableUnderline: true,
            className: props.ltr ? classes.ltr : "",
          }}
        /> */}
      </div>
    </>
  );
}

export default BirthdateInput;
