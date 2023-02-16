import { Button, Dialog } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { dateTime, numberFormat } from "../../utilities";
import useStyles from "./Style";

const ChangeTransportDialog = ({
  open,
  onClose,
  handleChange,
  title,
  allVehicles,
  type,
  vehicleType,
}) => {
  const [selectedType, setSelectedType] = useState(vehicleType);
  const [vehicles, setVehicles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    //filter vehicles by type
    if (selectedType === "all") {
      setVehicles(allVehicles);
    } else {
      setVehicles(
        allVehicles.filter((vehicle) => vehicle.transport_type === selectedType)
      );
    }
  }, [selectedType]);
  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        style: { borderRadius: 16 },
      }}
    >
      <div className={classes.transportDialog}>
        <div className={classes.dialogTitle}>
          <p>{title}</p>
          <Button onClick={onClose}>
            <Close />
          </Button>
        </div>
        <div className={classes.transportSelector}>
          <div
            onClick={() => setSelectedType("all")}
            className={selectedType === "all" ? classes.selectedType : ""}
          >
            <p>همه</p>
          </div>
          <div
            onClick={() => setSelectedType("AIRPLANE")}
            className={selectedType === "AIRPLANE" ? classes.selectedType : ""}
          >
            <p>هواپیما</p>
          </div>
          <div
            onClick={() => setSelectedType("TRAIN")}
            className={selectedType === "TRAIN" ? classes.selectedType : ""}
          >
            <p>قطار</p>
          </div>
          <div
            onClick={() => setSelectedType("BUS")}
            className={selectedType === "BUS" ? classes.selectedType : ""}
          >
            <p>اتوبوس</p>
          </div>
        </div>
        <div className={classes.vehiclesContainer}>
          {vehicles.map((vehicle, index) => (
            <div
              onClick={() => {
                handleChange(vehicle, type);
              }}
              key={index}
              className={classes.vehicleItem}
            >
              <div>
                <div className={classes.dialogAgencyLogoContainer}>
                  <img src={vehicle?.transport_company?.logo?.url} />
                </div>
                <div>
                  <p className={classes.dialogTransportName}>{vehicle.name}</p>
                  <p className={classes.dialogTransportDate}>
                    {dateTime.dateTimeCustom(vehicle.departure_date_time / 1000)
                      .weekDay +
                      " " +
                      dateTime.dateTimeCustom(
                        vehicle.departure_date_time / 1000
                      ).dateDate +
                      " | " +
                      dateTime.dateTimeCustom(
                        vehicle.departure_date_time / 1000
                      ).dateTime}
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dialogTransportPrice}>
                  {numberFormat.toPersianSeprateTomanCommas(
                    vehicle.price_difference
                  )}{" "}
                  تومان
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};
export default ChangeTransportDialog;
