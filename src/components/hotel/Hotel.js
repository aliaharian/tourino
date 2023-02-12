import {
  Flag,
  FlagOutlined,
  LocationCityOutlined,
  LocationOnOutlined,
  Star,
  StarRounded,
} from "@material-ui/icons";
import HotelBriefImages from "./HotelBriefImages";
import useStyles from "./Style";
import haram from "../../assets/icon/haram.svg";
import train from "../../assets/icon/train.svg";
import bus from "../../assets/icon/bus.svg";
import { Button } from "@material-ui/core";

const Hotel = ({ hotel }) => {
  const classes = useStyles();
  console.log(hotel);
  return (
    <div className={classes.hotelContainer}>
      <h2>هتل {hotel.name}</h2>
      <div className={classes.hotelBrief}>
        <div>
          <StarRounded />
          <p>{hotel.stars}</p>
        </div>
        <div>
          <FlagOutlined />
          <p>رتبه بندی هتل : {hotel.rate}</p>
        </div>
        <div>
          <LocationOnOutlined />
          <p>
            {hotel.city_place.title} {hotel.address}
          </p>
        </div>
      </div>
      <div>
        <HotelBriefImages images={hotel.hotel_images} />
      </div>
      <div className={classes.hotelDestInfo}>
        <p>اطلاعات هتل</p>
        <div>
          <div>
            <img src={haram} />
            <p>فاصله تا حرم</p>
            <p>{hotel.distance_to_haram} دقیقه</p>
          </div>
          <div>
            <img src={train} />
            <p>فاصله تا ایستگاه قطار</p>
            <p>{hotel.distance_to_train} دقیقه</p>
          </div>
          <div>
            <img src={bus} />
            <p>فاصله تا ایستگاه اتوبوس</p>
            <p>{hotel.distance_to_bus} دقیقه</p>
          </div>
        </div>
      </div>
      <div className={classes.hotelInfo}>
        <p>درباره هتل</p>
        <div dangerouslySetInnerHTML={{ __html: hotel.description }}></div>
      </div>
      <div className={classes.hotelServices}>
        <p>امکانات هتل</p>
        <div className={classes.hotelServiceContainer}>
          {/* first 4 items */}
          <div>
            {hotel.hotel_services.slice(0, 4).map((service) => (
              <div>
                <Star />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
          {/* first 4 items */}
          <div>
            {hotel.room_services.slice(0, 4).map((service) => (
              <div>
                <Star />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Button className={classes.seeAllServices}>
          نمایش همه {hotel.hotel_services.length + hotel.room_services.length}{" "}
          امکانات
        </Button>
      </div>
      <div className={classes.hotelServices}>
        <p>جایی که خواهید بود</p>
        <div className={classes.hotelServiceContainer}>
              
        </div>
    
      </div>
    </div>
  );
};
export default Hotel;
