import { Button } from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";

const ProfileTours = ({ profile, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();

  return (
    <div className={classes.profileTours}>
      <table className={classes.profileToursTable}>
        <thead>
          <tr>
            <th>شماره تور</th>
            <th>مبدا/مقصد</th>
            <th>تاریخ و ساعت</th>
            <th>مبلغ کل(ریال)</th>
            <th>وضعیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 96 }}>1</td>
            <td style={{ width: 89 }}>تهران/مشهد</td>
            <td style={{ width: 208 }}> 1399/12/12</td>
            <td style={{ width: 105 }}>1000000</td>
            <td style={{ width: 154 }}>
              <div className={classes.statusLabel}>پرداخت شده</div>
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
          <tr>
            <td>1</td>
            <td>تهران/مشهد</td>
            <td>1399/12/12</td>
            <td>1000000</td>
            <td>
              <div className={classes.statusLabel}>پرداخت شده</div>
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
          <tr>
            <td>1</td>
            <td>تهران/مشهد</td>
            <td>1399/12/12</td>
            <td>1000000</td>
            <td>
              <div className={classes.statusLabel}>پرداخت شده</div>
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
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTours;
