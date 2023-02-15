import {
  Button,
  CircularProgress,
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
import { useEffect, useRef } from "react";
import useStyles from "./Style";
import locationIcon from "../../assets/img/location.png";
import clsx from "clsx";
import HistoryIcon from "@material-ui/icons/History";
import { IoSearch } from "react-icons/io5";
import RoomInfo from "./RoomInfo";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "../../../redux/user";
import { Scrollbars } from "react-custom-scrollbars";
import Lottie from "react-lottie";
import animationData from "../../assets/icon/loading.json";
import { Close } from "@material-ui/icons";

const PeopleCount = ({
  adults,
  setAdults,
  infants,
  setInfants,
  rooms,
  setRooms,
  ...props
}) => {
  const classes = useStyles();
  const anchorEl = useRef(null);
  const [open, setOpen] = React.useState(false);
  const Dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleToggle = () => {
    setOpen(!open);
    props.onClick();
  };
  useEffect(() => {
    if (props.selected) {
      setOpen(true);
    }
  }, [props.selected]);
  console.log("selected", props.selected);

  const handleClose = (event) => {
    setOpen(false);
    if (anchorEl.current && anchorEl.current.contains(event.target)) {
      return;
    }
  };

  const handleRemoveRoom = (roomIndex) => {
    let tmp = rooms;
    tmp.splice(roomIndex, 1);
    setRooms([...tmp]);
  };
  const handleAddRoom = () => {
    let tmp = rooms;
    tmp.push({
      adult: 1,
      teen: 0,
      child: 0,
      infant: 0,
    });
    setRooms([...tmp]);
  };

  const handleChangeRoom = (roomIndex, peopleType, count) => {
    let tmp = rooms;
    if (peopleType === "adult") {
      if (count > 0 && count < 6) {
        tmp[roomIndex][peopleType] = count;
      }
    } else {
      if (count > -1 && count < 6) {
        tmp[roomIndex][peopleType] = count;
      }
    }
    setRooms([...tmp]);
  };
  useEffect(() => {
    let adultTmp = 0;
    let infantTmp = 0;
    rooms.map((room) => {
      adultTmp =
        parseInt(adultTmp) +
        parseInt(room.adult) +
        parseInt(room.teen) +
        parseInt(room.child);
      infantTmp = parseInt(infantTmp) + parseInt(room.infant);
    });
    setAdults(adultTmp);
    setInfants(infantTmp);
  }, [rooms]);

  const renderContent = () => {
    return rooms.map((room, index) => (
      <RoomInfo
        key={index}
        roomCount={rooms.length}
        roomNumber={index + 1}
        roomInfo={room}
        handleChange={(type, count) => handleChangeRoom(index, type, count)}
        handleRemove={() => handleRemoveRoom(index)}
      />
    ));
  };
  return (
    <>
      <div
        className={clsx(
          classes.searchbarItem,
          classes.noAfter,

          open && classes.searchbarItemActive,
          classes.searchBtnContainer
        )}
        onClick={(event) => {
          console.log(event.target.id);
          if (event.target.id !== "submitBtn") handleToggle();
        }}
      >
        <div
          className={clsx(classes.searchbarItemChild)}
          ref={anchorEl}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
        >
          <Typography> مسافران </Typography>
          <Typography style={{ maxWidth: 130 }} noWrap>
            {infants === 0
              ? `${adults} بزرگسال`
              : `${adults} بزرگسال، ${infants} نوزاد`}
          </Typography>
        </div>

        <Button
          onClick={(e) => {
            setTimeout(() => {
              setOpen(false);
              handleClose(e);
              props.handleSearchTour();
            }, 10);
          }}
          id="submitBtn"
          disabled={props.beginSearch}
        >
          {props.beginSearch ? (
            <Lottie
              options={defaultOptions}
              height={50}
              width={50}
              isStopped={false}
              isPaused={false}
            />
          ) : isMobile ? (
            "جستجو"
          ) : (
            <IoSearch />
          )}
        </Button>
      </div>
      {isMobile ? (
        <Dialog fullScreen open={open} onClose={(e) => handleClose(e)}>
          <div className={classes.datepickerHeader}>
            <p>انتخاب تعداد نفرات</p>
            <Close onClick={(e) => handleClose(e)} />
          </div>
          <div className={classes.mobileContentContainer}>
            {renderContent()}
          </div>
          <div className={classes.submitDateBtn}>
            <Button
              onClick={(e) => {
                setTimeout(() => {
                  setOpen(false);
                  handleClose(e);
                  props.handleSearchTour();
                }, 10);
              }}
            >
              تایید تعداد نفرات
            </Button>
          </div>
        </Dialog>
      ) : (
        <Popper
          className={classes.countMenu}
          open={open}
          anchorEl={anchorEl.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener
                  onClickAway={(e) => {
                    handleClose(e);
                  }}
                >
                  <Scrollbars>
                    <MenuList autoFocusItem={open} id="menu-list-grow">
                      {renderContent()}
                      {/* <div className={classes.addRoomContainer}>
                                        <Button onClick={handleAddRoom}>
                                            <AddIcon />
                                        </Button>
                                    </div> */}
                    </MenuList>
                  </Scrollbars>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </>
  );
};

export default PeopleCount;
