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
import { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2xjb2ltbHh3MWd1dTNvcnlseDQwYjM3MyJ9.004s4ZJVDeXZgb_VLqePrA";

const Hotel = ({ hotel }) => {
  const classes = useStyles();
  console.log(hotel);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  const [lng, setLng] = useState(hotel.longitude);
  const [lat, setLat] = useState(hotel.latitude);
  const [zoom, setZoom] = useState(12);
  //lat and long state
  const [latlng, setLatlng] = useState({
    lng: null,
    lat: null,
  });
  const bounds = [
    [44.410799, 24.231581], // Southwest coordinates
    [61.62452, 41.805653], // Northeast coordinates
  ];
  //load and update mapbox map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "/map/street.json", // style URL
      center: [lng, lat], // starting position
      zoom: zoom,
      maxBounds: bounds,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on("load", () => {
      //   setMapLoaded(true);
      marker.current = new mapboxgl.Marker({
        color: "red",
        draggable: true,
        scale: 1,
      })
        .setLngLat([hotel.longitude, hotel.latitude])
        .addTo(map.current);

      marker.current.on("dragend", () => {
        //   setMapLoaded(true);
        // setData("latitude", marker.current.getLngLat().lat);
        // setData("longitude", marker.current.getLngLat().lng);
        console.log(marker.current.getLngLat().lat);
        console.log(marker.current.getLngLat().lng);
        setLatlng(marker.current.getLngLat());
      });
    });
  });

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
          <div ref={mapContainer} className={classes.map}></div>
        </div>
      </div>
    </div>
  );
};
export default Hotel;
