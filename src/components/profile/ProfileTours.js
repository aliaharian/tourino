import { Button, Menu, MenuItem, useMediaQuery } from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";
import dateTime from "../../utilities/dateTime";
import { numberFormat } from "../../utilities";
import ProfileTourItem from "./ProfileTourItem";
const ProfileTours = ({ profile, tours, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  console.log("tours", tours);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={classes.profileTours}>
      {!isMobile && (
        <table className={classes.profileToursTable}>
          <thead>
            <tr>
              <th style={{ width: 96 }}>شماره تور</th>
              <th style={{ width: 89 }}>مبدا/مقصد</th>
              <th style={{ width: 208 }}>تاریخ و ساعت</th>
              <th style={{ width: 105 }}>مبلغ کل(تومان)</th>
              <th style={{ width: 154 }}>وضعیت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <ProfileTourItem key={index} tour={tour} />
            ))}
          </tbody>
        </table>
      )}
      {isMobile && <p className={classes.mobileTableTitle}>تور های من</p>}
      {isMobile && (
        <div className={classes.tableMobile}>
          {tours.map((item, index) => (
            <div className={classes.tableMobileItem}>
              <div>
                <div>
                  <p>شماره تور</p>
                  <p>{item.id}</p>
                </div>
                <div>
                  <p>مبدا/مقصد</p>
                  <p>
                    {item.from_city.title} / {item.to_city.title}
                  </p>
                </div>
                <div>
                  <p>تاریخ و ساعت</p>
                  <p>
                    {
                      dateTime.dateTimeCustom(item.departure_date_time / 1000)
                        .dateDate
                    }
                    {" - "}
                    {
                      dateTime.dateTimeCustom(item.departure_date_time / 1000)
                        .dateTime
                    }
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>مبلغ کل(تومان)</p>

                  <p>
                    {numberFormat.toPersianSeprateTomanCommas(
                      item.payablePrice
                    )}
                  </p>
                </div>
                <div>
                  <p>وضعیت</p>
                  <p>
                    <div
                      className={classes.statusLabel}
                      style={{
                        backgroundColor: item.status.color + "29",
                        color: item.status.color,
                      }}
                    >
                      {item.status.slug}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileTours;
