import { Button } from "@material-ui/core";
import { Add, MoreVertRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";
import dateTime from "../../utilities/dateTime";
import { numberFormat } from "../../utilities";
const ProfileTransactions = ({ transactions, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  console.log("tours", transactions);

  return (
    <div className={classes.profileTours}>
      <div>
        <div className={classes.walletTopperContainer}>
          <Button className={classes.addButton} startIcon={<Add />}>
            افزودن مسافر
          </Button>
          <Button className={classes.addButton} startIcon={<Add />}>
            افزودن مسافر
          </Button>
        </div>
        <div>
          <p>1200 tomans</p>
        </div>
      </div>
      <table className={classes.profileToursTable}>
        <thead>
          <tr>
            <th style={{ width: 122 }}>تاریخ و ساعت</th>
            <th style={{ width: 163 }}>مبلغ (ریال)</th>
            <th style={{ width: 109 }}>نوع تراکنش</th>
            <th style={{ width: 258 }}>توضیحات</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr>
              <td>
                {dateTime.dateTimeCustom(item.dateTime).dateDate}
                {" - "}
                {dateTime.dateTimeCustom(item.dateTime).dateTime}
              </td>
              <td>{numberFormat.toPersianSeprateTomanCommas(item.amount)}</td>
              <td>
                {" "}
                <div
                  className={classes.statusLabel}
                  style={{
                    backgroundColor: item.transactionType.color + "29",
                    color: item.transactionType.color,
                  }}
                >
                  {item.transactionType.slug}
                </div>
              </td>
              <td>{item.description}</td>

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

export default ProfileTransactions;
