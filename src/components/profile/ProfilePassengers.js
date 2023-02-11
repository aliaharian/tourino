import { Button } from "@material-ui/core";
import { Add, MoreVertRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";
import dateTime from "../../utilities/dateTime";
import { numberFormat } from "../../utilities";
const ProfilePassengers = ({ passengers, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  console.log("tours", passengers);

  return (
    <div className={classes.profileTours}>
      <table className={classes.profileToursTable}>
        <thead>
          <tr>
            <th style={{ width: 139 }}>نام و نام خانوادگی</th>
            <th style={{ width: 180 }}>جنسیت</th>
            <th style={{ width: 84 }}>کد ملی</th>
            <th style={{ width: 301 }}>تاریخ تولد</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((item, index) => (
            <tr>
              <td>{item.name} {item.last_name}</td>
              <td>
                {item.male? "مرد" : "زن"}
              </td>
              <td>
                {item.national_code}
              </td>
              <td>
                {item.year+"-"+item.month+"-"+item.day}
              </td>
    
              <td>
                <Button
                  variant="contained"
                  className={classes.profileToursTableBtn}
                >
                  <MoreVertRounded />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.addCuttonContainer}>
        <Button className={classes.addButton} startIcon={<Add />}>افزودن مسافر</Button>
      </div>
    </div>
  );
};

export default ProfilePassengers;
