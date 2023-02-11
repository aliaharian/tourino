import { Button } from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";
import dateTime from "../../utilities/dateTime";
import { numberFormat } from "../../utilities";
const ProfileTours = ({ profile, tours, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  console.log("tours", tours);

  return (
    <div className={classes.profileTours}>
      <table className={classes.profileToursTable}>
        <thead>
          <tr>
            <th style={{ width: 96 }}>شماره تور</th>
            <th style={{ width: 89 }}>مبدا/مقصد</th>
            <th style={{ width: 208 }}>تاریخ و ساعت</th>
            <th style={{ width: 105 }}>مبلغ کل(ریال)</th>
            <th style={{ width: 154 }}>وضعیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr>
              <td>{tour.id}</td>
              <td>
                {tour.from_city.title} / {tour.to_city.title}
              </td>
              <td>
                {
                  dateTime.dateTimeCustom(tour.departure_date_time / 1000)
                    .dateDate
                }
                {" - "}
                {
                  dateTime.dateTimeCustom(tour.departure_date_time / 1000)
                    .dateTime
                }
              </td>
              <td>
                {numberFormat.toPersianSeprateTomanCommas(tour.payablePrice)}
              </td>
              <td>
                <div
                  className={classes.statusLabel}
                  style={{ backgroundColor: tour.status.color + "29" , color: tour.status.color }}
                >
                  {tour.status.slug}
                </div>
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
    </div>
  );
};

export default ProfileTours;
