import {
  Button,
  CircularProgress,
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
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
  return (
    <>
      <div
        className={clsx(
          classes.searchbarItem,
          open && classes.searchbarItemActive,
          classes.searchBtnContainer
        )}
      >
        <div
          className={clsx(classes.searchbarItemChild)}
          ref={anchorEl}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={(event) => {
            handleToggle();
          }}
        >
          <Typography> مسافران </Typography>
          <Typography style={{ maxWidth: 130 }} noWrap>
            {infants === 0
              ? `${adults} بزرگسال`
              : `${adults} بزرگسال، ${infants} نوزاد`}
          </Typography>
        </div>

        <Button onClick={props.handleSearchTour} disabled={props.beginSearch}>
          {props.beginSearch ? (
            <Lottie
              options={defaultOptions}
              height={50}
              width={50}
              isStopped={false}
              isPaused={false}
            />
          ) : (
            <IoSearch />
          )}
        </Button>
      </div>
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
                    {rooms.map((room, index) => (
                      <RoomInfo
                        key={index}
                        roomCount={rooms.length}
                        roomNumber={index + 1}
                        roomInfo={room}
                        handleChange={(type, count) =>
                          handleChangeRoom(index, type, count)
                        }
                        handleRemove={() => handleRemoveRoom(index)}
                      />
                    ))}
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
    </>
  );
};

export default PeopleCount;
