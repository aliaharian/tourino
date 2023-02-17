import { Button, Dialog, useMediaQuery, useTheme } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { dateTime, numberFormat } from "../../utilities";
import useStyles from "./Style";

const PassengersDialog = ({
  open,
  onClose,
  handleChange,
  passengers,
  index,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        style: { borderRadius: isMobile ? 0 : 16 },
      }}
      fullScreen={isMobile}
    >
      <div className={classes.transportDialog}>
        <div className={classes.dialogTitle}>
          <p>انتخاب مسافر</p>
          <Button onClick={onClose}>
            <Close />
          </Button>
        </div>
        <div className={classes.transportSelector}>
          <div>
            <p>نام مسافر</p>
          </div>
          <div>
            <p>کد ملی</p>
          </div>
        </div>
        <div className={classes.vehiclesContainer}>
          {passengers?.map((item, index2) => (
            <div
              onClick={() => {
                handleChange(item, index);
              }}
              key={index2}
              className={classes.vehicleItem}
            >
              <div>
                <div>
                  <p className={classes.dialogTransportName}>
                    {item.name} {item.last_name}
                  </p>
                  <p className={classes.dialogTransportDate}>{item.phone}</p>
                </div>
              </div>
              <div>
                <p className={classes.dialogTransportDate}>
                  {item.national_code}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};
export default PassengersDialog;
