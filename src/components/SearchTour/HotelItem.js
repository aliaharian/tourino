import { Button, Typography } from "@material-ui/core";
import useStyles from "./Style";
import StarRateIcon from "@material-ui/icons/StarRate";
import { dateTime, numberFormat } from "../../utilities";
import { FlagOutlined, FlagRounded, StarRateRounded } from "@material-ui/icons";
import Link from 'next/link'


const HotelItem = ({ data, from_city, to_city }) => {
  const classes = useStyles();
  const unixToPersian = (unix) => dateTime.dateTimeCustom(unix);
  const customDate = (date) => {
    return (
      unixToPersian(date).weekDay +
      " " +
      unixToPersian(date).year +
      "/" +
      unixToPersian(date).monthNum +
      "/" +
      unixToPersian(date).day +
      " | " +
      unixToPersian(date).hour +
      ":" +
      unixToPersian(date).minute
    );
  };
  return (
    <div className={classes.tourItem}>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${data.hotel.image?.url})` }}
      >
        {/* <img src={data.hotel.img}/> */}
      </div>

      <div className={classes.dataContainer}>
        <div className={classes.tourBaseInfo}>
          <div>
           <Link href={"/hotel/" + data.hotel.id}>
            <a>
              {data.hotel.name}
            </a>
            </Link>
            <div className={classes.starsContainer}>
              <Typography className={classes.stars}>
                <StarRateRounded />
                {data.hotel.stars}
              </Typography>
              <Typography className={classes.rate}>
                <FlagOutlined />
                {data.hotel.rate}
              </Typography>
            </div>
            <Typography>{to_city.title}</Typography>
            <Typography>{`${data.hotel.nights} شب و ${data.hotel.days} روز`}</Typography>
          </div>
          <div>
            <Typography>شروع قیمت از</Typography>

            <Typography>
              <span className={classes.tomanText}> تومان </span>

              {numberFormat.toPersianSeprateTomanCommas(
                data.hotel.payable_price
              )}
            </Typography>
          </div>
        </div>
        <div className={classes.tourTransfer}>
          <div>
            <Typography>رفت</Typography>
            <Typography style={{ maxWidth: 120 }} noWrap>
              {data.departure_vehicle.name}
            </Typography>
            <Typography noWrap>
              {dateTime.dateTimeCustom(
                data.departure_vehicle.departure_date_time / 1000
              ).weekDay +
                " " +
                dateTime.dateTimeCustom(
                  data.departure_vehicle.departure_date_time / 1000
                ).dateDate +
                " | " +
                dateTime.dateTimeCustom(
                  data.departure_vehicle.departure_date_time / 1000
                ).dateTime}
            </Typography>
          </div>
          <div>
            <Typography>برگشت</Typography>
            <Typography style={{ maxWidth: 120 }} noWrap>
              {data.arrival_vehicle.name}
            </Typography>
            <Typography noWrap>
              {dateTime.dateTimeCustom(
                data.arrival_vehicle.departure_date_time / 1000
              ).weekDay +
                " " +
                dateTime.dateTimeCustom(
                  data.arrival_vehicle.departure_date_time / 1000
                ).dateDate +
                " | " +
                dateTime.dateTimeCustom(
                  data.arrival_vehicle.departure_date_time / 1000
                ).dateTime}
            </Typography>
          </div>
          <div className={classes.tourActions}>
            <div>
              <Button>جزئیات تور</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
