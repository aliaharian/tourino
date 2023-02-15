import {
  Button,
  ClickAwayListener,
  Dialog,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import useStyles from "./Style";
import locationIcon from "../../assets/img/location.png";
import clsx from "clsx";
import HistoryIcon from "@material-ui/icons/History";
import DatePicker from "../datepicker/DateRangePickerWrapper";
import { dateTime } from "../../utilities";
import CloseIcon from "@material-ui/icons/Close";
import { Close } from "@material-ui/icons";
const SelectDate = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  gotoNext,
  ...props
}) => {
  const classes = useStyles();
  const [focusedInput, setFocusedInput] = useState();
  const [startDateStr, setStartDateStr] = useState();
  const [endDateStr, setEndDateStr] = useState();
  const [startDateBck, setStartDateBck] = useState();
  const [endDateBck, setEndDateBck] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  const anchorEl = useRef(null);
  const anchorEl2 = useRef(null);
  const handleToggle = () => {
    props.onClick();
  };

  const handleClose = (event) => {
    if (
      (anchorEl.current && anchorEl.current.contains(event.target)) ||
      (props.anchorElGlobal.current &&
        props.anchorElGlobal.current.contains(event.target))
    ) {
      return;
    }
    props.onClose();
  };
  // return focus to the button when we transitioned from !open -> open

  useEffect(() => {
    if (props.selected) {
      setFocusedInput("startDate");
    }
    // setStartDate(startDateBck)
    // setEndDate(endDateBck)
  }, [props.selected]);

  useEffect(() => {
    console.log("miam");
    if (startDate) {
      setStartDateStr(
        dateTime.dateTimeCustom(new Date(startDate).getTime() / 1000).day +
          " " +
          dateTime.dateTimeCustom(new Date(startDate).getTime() / 1000).month +
          " "
      );
      setStartDateBck(startDate);
    }
    if (endDate) {
      setEndDateStr(
        dateTime.dateTimeCustom(new Date(endDate).getTime() / 1000).day +
          " " +
          dateTime.dateTimeCustom(new Date(endDate).getTime() / 1000).month +
          " "
      );
      setEndDateBck(endDate);
    }
  }, [startDate, endDate]);

  const renderContent = () => {
    return (
      <DatePicker
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        setStartDate={(e) => setStartDate(e)}
        setEndDate={(e) => setEndDate(e)}
        setFocusedInput={(e) => setFocusedInput(e)}
      />
    );
  };

  return (
    <>
      <div
        className={clsx(
          classes.searchbarItem,
          classes.noAfter,

          props.selected && classes.searchbarItemActive
        )}
        // style={focusedInput ? { maxWidth: 210 } : { maxWidth: 210 }}
        ref={anchorEl}
        aria-controls={props.selected ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={(event) => {
          handleToggle();
        }}
      >
        <Typography> تاریخ سفر </Typography>
        <Typography noWrap style={{ maxWidth: "calc(100% - 20px)" }}>
          {startDateStr
            ? endDateStr
              ? startDateStr + " - " + endDateStr
              : startDateStr
            : `تاریخ رفت و برگشت`}
        </Typography>
        {(startDate || endDate) && (
          <Button
            className={classes.deleteDate}
            onClick={() => {
              setStartDate();
              setEndDate();
              setStartDateStr();
              setEndDateStr();
            }}
          >
            <CloseIcon />
          </Button>
        )}{" "}
      </div>
      {isMobile ? (
        <Dialog fullScreen open={props.selected} onClose={() => handleToggle()}>
          {/* {renderContent()} */}
          <div className={classes.datepickerHeader}>
            <p>انتخاب تاریخ</p>
            <Close onClick={(e) => handleClose(e)} />
          </div>
          <div>{renderContent()}</div>
          <div className={classes.checkDatesContainer}>
            <div>
              <p>رفت</p>
              <p>{startDateStr}</p>
            </div>
            <div>
              <p>برگشت</p>
              <p>{endDateStr}</p>
            </div>
          </div>
          <div className={classes.submitDateBtn}>
            <Button onClick={(e) => {gotoNext()}} >تایید تاریخ</Button>
          </div>
        </Dialog>
      ) : (
        <Popper
          className={classes.dateMenu}
          open={props.selected}
          anchorEl={anchorEl.current}
          role={undefined}
          transition
          disablePortal
        >
          <Paper>
            <ClickAwayListener
              onClickAway={(e) => {
                // console.log('clickaway')
                handleClose(e);
              }}
            >
              <MenuList autoFocusItem={props.selected} id="menu-list-grow">
                {renderContent()}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      )}
    </>
  );
};

export default SelectDate;
