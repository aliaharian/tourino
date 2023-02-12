import { Button, useMediaQuery } from "@material-ui/core";
import { Add, MoreVertRounded, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";
import dateTime from "../../utilities/dateTime";
import { numberFormat } from "../../utilities";
const ProfileTransactions = ({ transactions, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const profile = useSelector((state) => state.user.userProfile);
  //useMediaQuery
  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log("profile", profile);

  return (
    <div className={classes.profileTours}>
      <div className={classes.walletTopperContainer}>
        <div>
          <Button className={classes.addButton} startIcon={<Add />}>
            شارژ حساب
          </Button>
          <Button className={classes.addOutlinedButton} startIcon={<Remove />}>
            برداشت وجه
          </Button>
        </div>
        <div className={classes.walletPrice}>
          <p>موجودی(تومان):</p>
          <p>
            {numberFormat.toPersianSeprateTomanCommas(
              profile.user.wallet?.amount
            )}
          </p>
        </div>
      </div>
      {!isMobile && (
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
      )}

      {isMobile && <p className={classes.mobileTableTitle}>تراکنش های من</p>}

      {isMobile && (
        <div className={classes.tableMobile}>
          {transactions.map((item, index) => (
            <div className={classes.tableMobileItem}>
              <div>
                <div>
                  <p>تاریخ و ساعت</p>
                  <p>
                    {dateTime.dateTimeCustom(item.dateTime).dateDate}
                    {" - "}
                    {dateTime.dateTimeCustom(item.dateTime).dateTime}
                  </p>
                </div>
                <div>
                  <p>مبلغ (ریال)</p>
                  <p>{numberFormat.toPersianSeprateTomanCommas(item.amount)}</p>
                </div>
                <div>
                  <p>نوع تراکنش</p>
                  <p>
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
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>توضیحات</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileTransactions;
