import { ArrowDownward, ArrowDropDown, ArrowDropDownRounded } from "@material-ui/icons";
import { dateTime } from "../../utilities";
import useStyles from "./Style";
const TransportCard = ({ vehicle, title,onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.transportCard} onClick={onClick}>
      <div>
        <img src={vehicle?.transport_company?.logo?.url} />
        <div>
          <p>{title}</p>
          <p>{vehicle.name}</p>
          <p> {dateTime.dateTimeCustom(
                vehicle.departure_date_time / 1000
              ).weekDay +
                " " +
                dateTime.dateTimeCustom(
                  vehicle.departure_date_time / 1000
                ).dateDate +
                " | " +
                dateTime.dateTimeCustom(
                  vehicle.departure_date_time / 1000
                ).dateTime}</p>
        </div>
      </div>
      <ArrowDropDownRounded />
    </div>
  );
};
export default TransportCard;
