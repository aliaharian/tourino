import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Slider,
  Typography,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import HotelItem from "./HotelItem";
import useStyles from "./Style";
import hotelImg from "../../assets/img/hotelFeatured.png";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { numberFormat } from "../../utilities";
import { setLoading } from "../../../redux/user";
import { useDispatch } from "react-redux";
var _ = require("lodash");

const AirbnbSlider = withStyles({
  root: {
    color: "#3d6b92",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "currentColor",
    border: "1px solid currentColor",
    marginTop: -5,
    marginLeft: -6,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);
// function AirbnbThumbComponent(props) {
//     return (
//         <span {...props}>
//             <span className="bar" />
//             <span className="bar" />
//             <span className="bar" />
//         </span>
//     );
// }

const Sidebar = ({
  price,
  hotelTypes,
  stars,
  selectedStar,
  setSelectedStar,
  handleChangePrice,
  handleChangeDepartureType,
  handleChangeArrivalType,
  selectedArrivalType,
  selectedDepartureType,
  handleSubmitPrice,
}) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const handleChangeStars = (star) => {
    setSelectedStar(star);
    Dispatch(setLoading(true));
  };

  const vehicleTypes = [
    {
      title: "اتوبوس",
      value: "bus",
    },
    {
      title: "قطار",
      value: "train",
    },
    {
      title: "هواپیما",
      value: "airplane",
    },
  ];

  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.sidebarItem}>
        <Typography>محدوده قیمت (تومان)</Typography>
        <AirbnbSlider
          valueLabelDisplay="off"
          defaultValue={price}
          value={price}
          onChange={handleChangePrice}
          onChangeCommitted={handleSubmitPrice}
          min={50000}
          step={50000}
          max={4000000}
        />
        <div className={classes.priceText}>
          <Typography>{`${numberFormat.toPersianSeprateTomanCommas(
            price[0]
          )} تومان`}</Typography>
          <Typography>{`${numberFormat.toPersianSeprateTomanCommas(
            price[1]
          )} تومان`}</Typography>
        </div>
      </div>

      <div className={classes.sidebarItem}>
        <Typography>ستاره هتل</Typography>
        <div className={classes.starSlider}>
          {stars.map((star) => (
            <div
              className={clsx(selectedStar === star && classes.activeStar)}
              onClick={() => handleChangeStars(star)}
            >
              <div></div>
              <Typography>{star}</Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.sidebarItem}>
        <Typography>وسیله نقلیه رفت</Typography>
        <div className={classes.hotelTypeContainer}>
          {vehicleTypes &&
            vehicleTypes.map((type) => {
              return (
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          selectedDepartureType.indexOf(type.value) !== -1
                        }
                        onChange={() => handleChangeDepartureType(type.value)}
                        name={type.id}
                        icon={<div className={classes.notCheckedIcon}></div>}
                        checkedIcon={
                          <div className={classes.checkedIcon}></div>
                        }
                        color="primary"
                      />
                    }
                    label={type.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className={classes.sidebarItem}>
        <Typography>وسیله نقلیه برگشت</Typography>
        <div className={classes.hotelTypeContainer}>
          {vehicleTypes &&
            vehicleTypes.map((type) => {
              return (
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedArrivalType.indexOf(type.value) !== -1}
                        onChange={() => handleChangeArrivalType(type.value)}
                        name={type.id}
                        icon={<div className={classes.notCheckedIcon}></div>}
                        checkedIcon={
                          <div className={classes.checkedIcon}></div>
                        }
                        color="primary"
                      />
                    }
                    label={type.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
