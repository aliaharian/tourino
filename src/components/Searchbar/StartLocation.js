import {
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import useStyles from "./Style";
import locationIcon from "../../assets/img/location.png";
import clsx from "clsx";
import HistoryIcon from "@material-ui/icons/History";
const StartLocation = (props) => {
  const classes = useStyles();
  const anchorEl = useRef(null);
  const [gps, setGps] = useState();
  const [recent, setRecent] = useState();
  const [cities, setCities] = useState();

  const handleToggle = () => {
    props.onClick();
  };

  useEffect(() => {
    if (!recent) {
      if (localStorage.getItem("recentCities")) {
        setRecent(JSON.parse(localStorage.getItem("recentCities")));
      }
    }
  }, [recent]);
  useEffect(() => {
    if (!cities && props.cities) {
      setCities([...props.cities]);
    }
  }, [props.cities]);

  // function getLocation() {
  //     if (navigator.geolocation) {
  //         console.log(navigator.geolocation)
  //         navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //         console.log("Geolocation is not supported by this browser.");
  //     }
  // }

  // function showPosition(position) {
  //     console.log('lla',position.coords)
  //     setGps(position.coords)
  // }

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
  return (
    <>
      <div
        className={clsx(
          classes.searchbarItem,
          classes.noAfter,
          props.selected && classes.searchbarItemActive
        )}
        ref={anchorEl}
        aria-controls={props.selected ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={(event) => {
          handleToggle();
        }}
      >
        <Typography> مبدا </Typography>
        <Typography noWrap>
          {" "}
          {props.startLocation?.city?.title || "کجا هستید؟"}{" "}
        </Typography>
      </div>

      <Popper
        className={classes.locationMenu}
        open={props.selected}
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
                <MenuList autoFocusItem={props.selected} id="menu-list-grow">
                  <div className={classes.locationMenuInside}>
                    <div className={classes.selectFromLocation}>
                      <img src={locationIcon} />
                      <Typography>
                        {" "}
                        انتخاب شهر بر اساس موقعیت مکانی شما{" "}
                      </Typography>
                    </div>
                    {recent && (
                      <div className={classes.locationHistoryContainer}>
                        <Typography>جست و جو های اخیر </Typography>

                        {recent &&
                          recent.map((item) => (
                            <div
                              className={classes.locationHistoryItem}
                              onClick={() => {
                                props.handleChange(item);
                                // setOpen(false)
                              }}
                            >
                              <div className={classes.locationHistoryIcon}>
                                <HistoryIcon />
                              </div>
                              <Typography>{item.name}</Typography>
                            </div>
                          ))}
                      </div>
                    )}

                    <div className={classes.locationOfferContainer}>
                      <Typography>شهر های پیشنهادی </Typography>

                      <div className={classes.locationOfferItemContainer}>
                        {cities &&
                          cities.map((city) => (
                            <div
                              key={city.city_id}
                              onClick={() => {
                                props.handleChange(city);
                              }}
                              className={clsx(
                                classes.locationOfferItem,
                                props.startLocation?.city_id === city.city_id &&
                                  classes.selectedCity
                              )}
                            >
                              <Typography>{city.city.title}</Typography>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default StartLocation;
