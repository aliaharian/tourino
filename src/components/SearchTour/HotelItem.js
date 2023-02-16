import { Button, Typography } from "@material-ui/core";
import useStyles from "./Style";
import StarRateIcon from "@material-ui/icons/StarRate";
import { dateTime, numberFormat } from "../../utilities";
import { FlagOutlined, FlagRounded, StarRateRounded } from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/icon/loading2.json";

const HotelItem = ({ data, from_city, to_city, info }) => {
  const classes = useStyles();
  const unixToPersian = (unix) => dateTime.dateTimeCustom(unix);
  const router = useRouter();
  const [startSearch, setStartSearch] = useState(false);
  console.log(router.query);
  const [link, setLink] = useState(
    `/tour/search/${data.hotel.id}?arrival_type=${router.query.arrival_type}&departure_type=${router.query.departure_type}&dest=${router.query.dest}&endDate=${router.query.endDate}&origin=${router.query.origin}&rooms=${router.query.rooms}&startDate=${router.query.startDate}&curr_arrival_cehicle=${data.arrival_vehicle.id}&curr_departure_cehicle=${data.departure_vehicle.id}`
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
              <a>{data.hotel.name}</a>
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
            {!info && <Typography>شروع قیمت از</Typography>}

            <Typography className={info ? classes.largeText:""}>
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
              {!info && (
                <Link href={link}>
                  <Button
                    href="#"
                    onClick={() => {
                      setStartSearch(true);
                    }}
                    disabled={startSearch}
                  >
                    {startSearch ? (
                      <Lottie
                        options={defaultOptions}
                        height={35}
                        width={80}
                        isStopped={false}
                        isPaused={false}
                      />
                    ) : (
                      "جستجو"
                    )}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
