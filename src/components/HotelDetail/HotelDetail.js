import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  FlagOutlined,
  LocationOnOutlined,
  StarRounded,
} from "@material-ui/icons";
import useStyles from "./Style";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import TransportCard from "./TransportCard";
import { numberFormat } from "../../utilities";
import ChangeTransportDialog from "./ChangeTransportDialog";
import axios from "axios";
import { BASE_URL } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { errorSnackbar, setAuthOpen, setAuthStep } from "../../../redux/user";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import animationData from "../../assets/icon/loading.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2xjb2ltbHh3MWd1dTNvcnlseDQwYjM3MyJ9.004s4ZJVDeXZgb_VLqePrA";

const HotelDetail = ({
  hotel,
  query,
  origin,
  dest,
  info,
  tourServices,
  departureVehicles,
  arrivalVehicles,
}) => {
  const profile = useSelector((state) => state.user.userProfile);
  const classes = useStyles();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(hotel.longitude);
  const [lat, setLat] = useState(hotel.latitude);
  const [zoom, setZoom] = useState(12);
  const [startSearch, setStartSearch] = useState(false);
  const [departureVehicle, setDepartureVehicle] = useState(
    info.departureVehicle
  );
  const Router = useRouter();
  const [arrivalVehicle, setArrivalVehicle] = useState(info.arrivalVehicle);
  const [selectedServices, setSelectedServices] = useState([]);
  const [price, setPrice] = useState(info.payable_price);
  const [openDepartureDialog, setOpenDepartureDialog] = useState(false);
  const [openArrivalDialog, setOpenArrivalDialog] = useState(false);
  const [departureVehiclesState, setDepartureVehiclesState] = useState(
    departureVehicles.vehicles
  );
  const [arrivalVehiclesState, setArrivalVehiclesState] = useState(
    arrivalVehicles.vehicles
  );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Dispatch = useDispatch();
  const [tourServicesState, setTourServicesState] = useState([
    {
      id: 99991,
      name: "نرخ فول برد",
      price:
        hotel.fullboard_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)),
      payable_price:
        hotel.fullboard_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)) *
        1.09,
    },
    {
      id: 99992,
      name: "صبحانه آزاد",
      price:
        hotel.free_breakfast_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)),
      payable_price:
        hotel.free_breakfast_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)) *
        1.09,
    },
    {
      id: 99993,
      name: "ناهار آزاد",
      price:
        hotel.free_lunch_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)),
      payable_price:
        hotel.free_lunch_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)) *
        1.09,
    },
    {
      id: 99994,
      name: "شام آزاد",
      price:
        hotel.free_dinner_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)),
      payable_price:
        hotel.free_dinner_price *
        (parseInt(info.adult) + parseInt(info.teens) + parseInt(info.kids)) *
        1.09,
    },
    ...tourServices.services,
  ]);
  //lat and long state
  const [latlng, setLatlng] = useState({
    lng: null,
    lat: null,
  });
  const bounds = [
    [44.410799, 24.231581], // Southwest coordinates
    [61.62452, 41.805653], // Northeast coordinates
  ];
  console.log("tourServicesState", tourServicesState);
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
  const handleChangeServices = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((item) => item !== id));
      //change price
      setPrice(
        price - tourServicesState.find((item) => item.id === id).payable_price
      );
    } else {
      setSelectedServices([...selectedServices, id]);
      //change price
      setPrice(
        price + tourServicesState.find((item) => item.id === id).payable_price
      );
    }
  };
  const handleChangeVehicle = (vehicle, type) => {
    if (type === "departure") {
      setDepartureVehicle(vehicle);
      setOpenDepartureDialog(false);
      //update price_differences in departureVehiclesState and arrivalVehiclesState
      setDepartureVehiclesState(
        departureVehiclesState.map((item) => {
          return {
            ...item,
            price_difference: item.price_difference - vehicle.price_difference,
          };
        })
      );
    } else {
      setArrivalVehicle(vehicle);
      setOpenArrivalDialog(false);
      //update price_differences in departureVehiclesState and arrivalVehiclesState
      setArrivalVehiclesState(
        arrivalVehiclesState.map((item) => {
          return {
            ...item,
            price_difference: item.price_difference - vehicle.price_difference,
          };
        })
      );
    }

    //update price
    setPrice(price + vehicle.price_difference);
  };

  const handleSaveTour = async () => {
    console.log("profile", profile);
    //check if user logged in
    if (!profile?.user) {
      //open login dialog
      Dispatch(setAuthOpen(true));
      Dispatch(setAuthStep("enterNumber"));
      console.log("here opened!");
    } else {
      setStartSearch(true);
      const tourParams = {
        from_city: info.from_city.id,
        to_city: info.to_city.id,
        departure_date_time: query.startDate * 1000,
        arrival_date_time: query.endDate * 1000,
        adult_count: info.adult,
        teen_count: info.teens,
        kid_count: info.kids,
        infant_count: info.infants,
        hotel_id: hotel.id,
        departure_vehicle_id: departureVehicle.id,
        arrival_vehicle_id: arrivalVehicle.id,
        fullboard: selectedServices.indexOf(99991) !== -1 ? 1 : 0,
        breakfast: selectedServices.indexOf(99992) !== -1 ? 1 : 0,
        lunch: selectedServices.indexOf(99993) !== -1 ? 1 : 0,
        dinner: selectedServices.indexOf(99994) !== -1 ? 1 : 0,
        //remove fullboard and meals and return string seperate by ,
        services: selectedServices
          .filter(
            (item) =>
              item !== 99991 &&
              item !== 99992 &&
              item !== 99993 &&
              item !== 99994
          )
          .join(","),
      };
      console.log(tourParams);

      //axios
      try {
        const response = await axios.post(`${BASE_URL}/tours/save`, tourParams);
        Router.push({
          pathname: "/tour/" + response.data.tour.id + "/passengers",
        });
      } catch (err) {
        //snackbar
        console.log(err);
        Dispatch(errorSnackbar(err));
        setStartSearch(false);
      }
    }
  };

  return (
    <div className={classes.container}>
      {openDepartureDialog && (
        <ChangeTransportDialog
          open={openDepartureDialog}
          onClose={() => setOpenDepartureDialog(false)}
          allVehicles={departureVehiclesState}
          type={"departure"}
          vehicleType={departureVehicle.transport_type}
          handleChange={handleChangeVehicle}
          title={"تغییر وسیله نقلیه رفت"}
        />
      )}
      {openArrivalDialog && (
        <ChangeTransportDialog
          open={openArrivalDialog}
          onClose={() => setOpenArrivalDialog(false)}
          allVehicles={arrivalVehiclesState}
          type={"arrival"}
          vehicleType={arrivalVehicle.transport_type}
          handleChange={handleChangeVehicle}
          title={"تغییر وسیله نقلیه برگشت"}
        />
      )}

      <div className={classes.tourHeader}>
        <p>هتل منتخب شما</p>
      </div>
      <div className={classes.hotelInfo}>
        <div>
          <div className={classes.hotelImage}>
            <img src={hotel.image.url} />
          </div>
          <div className={classes.hotelDetail}>
            <p>{hotel.name}</p>
            <div className={classes.stars}>
              <StarRounded />
              <p>{hotel.stars}</p>
            </div>
            <div className={classes.rate}>
              <FlagOutlined />
              <p>رتبه بندی هتل: {hotel.rate}</p>
            </div>
            <div className={classes.address}>
              <LocationOnOutlined />
              <p>
                {dest.title} {hotel.address}
              </p>
            </div>
            <div className={classes.divider120}></div>
            <div className={classes.eghamat}>
              <p>اقامت:</p>
              <p>
                {info.nights} شب و {info.days} روز
              </p>
            </div>
          </div>
        </div>
        <div className={classes.hotelMap}>
          <div ref={mapContainer} className={classes.map}></div>
          <div className={classes.gotoHotel}>
            <Button href={"/hotel/" + hotel.id}>مشاهده اطلاعات هتل</Button>
          </div>
        </div>
      </div>
      <div className={classes.tourHeader}>
        <p>بلیت رفت و برگشت</p>
      </div>
      <div className={classes.transportContainer}>
        <TransportCard
          onClick={() => setOpenDepartureDialog(true)}
          vehicle={departureVehicle}
          title="رفت"
        />
        <TransportCard
          onClick={() => setOpenArrivalDialog(true)}
          vehicle={arrivalVehicle}
          title="برگشت"
        />
      </div>
      <div className={classes.tourHeader}>
        <p>امکانات تور</p>
      </div>

      <div className={classes.servicesContainer}>
        {tourServicesState.map((item) => {
          return (
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedServices.indexOf(item.id) !== -1}
                    onChange={() => handleChangeServices(item.id)}
                    name={item.id}
                    icon={<div className={classes.notCheckedIcon}></div>}
                    checkedIcon={<div className={classes.checkedIcon}></div>}
                    color="primary"
                  />
                }
                label={
                  <div className={classes.checkboxLabel}>
                    <p>{item.name}</p>
                    {item.payable_price == 0 && (
                      <div className={classes.freeBadge}>رایگان</div>
                    )}
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
      <div className={classes.priceContainer}>
        <div className={classes.price}>
          <p>قیمت تور (تومان)</p>
          <p>{numberFormat.toPersianSeprateTomanCommas(Math.ceil(price))}</p>
        </div>
      </div>

      <div className={classes.submitBtn}>
        <Button onClick={handleSaveTour} disabled={startSearch}>
          {startSearch ? (
            <Lottie
              options={defaultOptions}
              height={48}
              width={48}
              isStopped={false}
              isPaused={false}
            />
          ) : (
            " تایید و ورود اطلاعات مسافران"
          )}
        </Button>
      </div>
    </div>
  );
};

export default HotelDetail;
