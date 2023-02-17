import { Button, useMediaQuery } from "@material-ui/core";
import { Add, MoreVertRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import useStyles from "./Style";
import dateTime from "../../utilities/dateTime";
import { numberFormat } from "../../utilities";
import AddPassengerDialog from "./dialogs/AddPassengerDialog";
const ProfilePassengers = ({ passengers, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  console.log("tours", passengers);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className={classes.profileTours}>
 
      {!isMobile && (
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
                <td>
                  {item.name} {item.last_name}
                </td>
                <td>{item.male ? "مرد" : "زن"}</td>
                <td>{item.national_code}</td>
                <td>{item.year + "-" + item.month + "-" + item.day}</td>

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
      {isMobile && <p className={classes.mobileTableTitle}>مسافر های من</p>}
      {isMobile && (
        <div className={classes.tableMobile}>
          {passengers.map((item, index) => (
            <div className={classes.tableMobileItem}>
              <div>
                <div>
                  <p>نام و نام خانوادگی</p>
                  <p>
                    {item.name} {item.last_name}
                  </p>
                </div>
                <div>
                  <p>جنسیت</p>
                  <p> {item.male ? "مرد" : "زن"} </p>
                </div>
              </div>
              <div>
                <div>
                  <p>کد ملی</p>
                  <p>{item.national_code}</p>
                </div>
                <div>
                  <p>تاریخ تولد</p>
                  <p>{item.year + "-" + item.month + "-" + item.day}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={classes.addCuttonContainer}>
        <Button
          onClick={() => setOpenDialog(true)}
          className={classes.addButton}
          startIcon={<Add />}
        >
          افزودن مسافر
        </Button>
      </div>
      
      <AddPassengerDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </div>
  );
};

export default ProfilePassengers;
