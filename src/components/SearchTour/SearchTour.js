import {
  Button,
  Divider,
  Grid,
  Link,
  Slider,
  Typography,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import HotelItem from "./HotelItem";
import useStyles from "./Style";
import hotelImg from "../../assets/img/hotelFeatured.png";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getHotelTypes } from "../../../redux/hotel";
import { useRouter } from "next/dist/client/router";
import { enqueueSnackbar, openMenu, setLoading } from "../../../redux/user";
import TimeoutModal from "./TimeoutModal";
import LoadingModal from "./LoadingModal";
import noResult from "../../assets/icon/no_result_search.svg";

const stars = [5, 4, 3, 2, 1];
var timeout;

const SearchTour = ({
  roomsParam,
  query,
  error,
  //   startBusSuggest,
  //   endBusSuggest,
  loadingParam,
  hotelsSuggest,
}) => {
  const classes = useStyles();
  const [selectedSort, setSelectedSort] = useState("price");
  const [selectedStar, setSelectedStar] = useState("all");
  const [price, setPrice] = React.useState([50000, 4000000]);
  const [selectedDepartureType, setSelectedDepartureType] = useState([]);
  const [selectedArrivalType, setSelectedArrivalType] = useState([]);
  const [selectedRate, setSelectedRate] = useState([]);
  const [openTimeout, setOpenTimeout] = useState(false);
  const [ready, setReady] = useState(false);
  const Dispatch = useDispatch();
  const Router = useRouter();
  const loading = useSelector((state) => state.user.searchLoading);
  console.log("hotelSuggest", hotelsSuggest);
  console.log("roomsParam", roomsParam);
  let hotels = [];

  const hotelTypes = useSelector((state) => state.hotel.hotelTypes);

  console.log("loading", loading);

  useEffect(() => {
    if (!ready) {
      setReady(true);
      setSearchTimeout();
    }
  });
  const setSearchTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setOpenTimeout(true);
    }, 9999999999999999);
  };

  useEffect(() => {
    if (query.star && query.star > 0 && query.star < 6) {
      setSelectedStar(parseInt(query.star));
    }
    if (query.price) {
      let tmp = query.price.split(",");
      setPrice([parseInt(tmp[0]), parseInt(tmp[1])]);
    }
    if (query.departure_type) {
      let tmp = query.departure_type.split(",");
      setSelectedDepartureType(tmp);
    }
    if (query.arrival_type) {
      let tmp = query.arrival_type.split(",");
      setSelectedArrivalType(tmp);
    }
    if (query.rate) {
      let tmp = query.rate.split(",");
      setSelectedRate(tmp);
    }

    if (query.sort) {
      setSelectedSort(query.sort);
    }
  }, [query]);

  const handleChangeStar = (e) => {
    setSelectedStar(e);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "star") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    tmp += `star=${e}`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };
  const handleChangeSort = (e) => {
    setSelectedSort(e);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "sort") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    tmp += `sort=${e}`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  const handleChangePrice = (event, newValue) => {
    setPrice(newValue);
  };

  const handleSubmitPrice = (event, newValue) => {
    Dispatch(setLoading(true));
    setPrice(newValue);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "price") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    tmp += `price=${newValue[0]},${newValue[1]}`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  const handleChangeDepartureType = (type) => {
    let tmpType = selectedDepartureType;
    tmpType = _.xor(tmpType, [type]);
    setSelectedDepartureType([...tmpType]);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "departure_type") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    let tmpTxt = "";
    tmpType.map((item) => {
      tmpTxt += item + ",";
    });
    tmpTxt = tmpTxt.substring(0, tmpTxt.length - 1);
    if (tmpTxt == "") {
      tmpTxt = "all";
    }
    tmp += `departure_type=${tmpTxt}`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  const handleChangeArrivalType = (type) => {
    let tmpType = selectedArrivalType;
    tmpType = _.xor(tmpType, [type]);
    setSelectedArrivalType([...tmpType]);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "arrival_type") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    let tmpTxt = "";
    tmpType.map((item) => {
      tmpTxt += item + ",";
    });
    tmpTxt = tmpTxt.substring(0, tmpTxt.length - 1);

    if (tmpTxt == "") {
      tmpTxt = "all";
    }
    tmp += `arrival_type=${tmpTxt}`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  const handleChangeRate = (rate) => {
    let tmpRate = selectedRate;
    tmpRate = _.xor(tmpRate, [rate]);
    setSelectedRate([...tmpRate]);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "rate") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    let tmpTxt = "";
    tmpRate.map((item) => {
      tmpTxt += item + ",";
    });
    tmpTxt = tmpTxt.substring(0, tmpTxt.length - 1);

    // if (tmpTxt == "") {
    //   tmpTxt = "all";
    // }
    tmp += `rate=${tmpTxt}`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  if (Router.asPath.search("search?") === -1) {
    return (
      <div
        style={{ padding: "100px 0", margin: "0 auto", textAlign: "center" }}
      >
        <p> پارامتر های ارسالی صحیح نیست</p>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    );
  } else {
    if (
      query &&
      Object.keys(query).length === 0 &&
      query.constructor === Object
    ) {
      return (
        <div
          style={{ padding: "100px 0", margin: "0 auto", textAlign: "center" }}
        >
          <p> لطفا صبر کنید</p>
        </div>
      );
    } else if (
      !query.departure_type ||
      !query.arrival_type ||
      !query.origin ||
      !query.dest ||
      !query.startDate ||
      !query.endDate ||
      !query.rooms ||
      !query.sort
      // !query.star
    ) {
      return (
        <div
          style={{ padding: "100px 0", margin: "0 auto", textAlign: "center" }}
        >
          <p> پارامتر های ارسالی صحیح نیست</p>
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </div>
      );
    }
  }
  const handleLoading = (type) => {
    Dispatch(setLoading(type));
  };

  const handleClearArrivalType = () => {
    setSelectedArrivalType([]);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "arrival_type") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    tmp += `arrival_type=all`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  const handleClearDepartureType = () => {
    setSelectedDepartureType([]);
    let tmp = "?";
    query &&
      Object.keys(query).map((key) => {
        if (key !== "departure_type") {
          tmp += `${key}=${query[key]}&`;
        }
      });
    tmp += `departure_type=all`;
    Router.push(`/tour/search${tmp}`);
    setSearchTimeout();
  };

  const _openMenu = useSelector((state) => state.user.openMenu);
  const handleClose = () => {
    Dispatch(openMenu(false));
  };

  return (
    <div className={classes.searchTourContainer}>
      <div className={clsx(classes.FilterContainer , _openMenu && classes.openFilter)} onClick={handleClose}>
        <Sidebar
          stars={stars}
          selectedStar={selectedStar}
          setSelectedStar={(e) => handleChangeStar(e)}
          hotelTypes={hotelTypes}
          handleChangePrice={handleChangePrice}
          price={price}
          setPrice={setPrice}
          handleChangeDepartureType={handleChangeDepartureType}
          handleChangeArrivalType={handleChangeArrivalType}
          selectedDepartureType={selectedDepartureType}
          selectedArrivalType={selectedArrivalType}
          // selectedHotelType={selectedHotelType}
          handleSubmitPrice={handleSubmitPrice}
          selectedRate={selectedRate}
          handleChangeRate={handleChangeRate}
          handleClearArrivalType={handleClearArrivalType}
          handleClearDepartureType={handleClearDepartureType}
        />
      </div>
      <div className={classes.hotelsList}>
        <div>
          <div className={classes.sortSection}>
            <Typography>مرتب سازی بر اساس:</Typography>
            <div className={classes.sortButtons}>
              {/* <Button
                className={clsx(
                  selectedSort === "view" && classes.sortSelected
                )}
                onClick={() => {
                  handleChangeSort("view");
                  handleLoading(true);
                }}
              >
                بیشترین بازدید
              </Button> */}
              <Button
                className={clsx(
                  selectedSort === "price" && classes.sortSelected
                )}
                onClick={() => {
                  handleChangeSort("price");
                  handleLoading(true);
                }}
              >
                کمترین قیمت
              </Button>
              <Button
                className={clsx(
                  selectedSort === "departure_date" && classes.sortSelected
                )}
                onClick={() => {
                  handleChangeSort("departure_date");
                  handleLoading(true);
                }}
              >
                نزدیک ترین زمان حرکت
              </Button>
            </div>
          </div>

          <Divider className={classes.divider} />

          <div className={classes.hotelContainer}>
            {hotelsSuggest.hotels.length > 0 ? (
              hotelsSuggest.hotels.map((hotel, index) => (
                <HotelItem
                  key={index}
                  data={hotel}
                  from_city={hotelsSuggest.from_city}
                  to_city={hotelsSuggest.to_city}
                />
              ))
            ) : (
              <div className={classes.noResult}>
                <img src={noResult} />
                <Typography>هیج نتیجه ای یافت نشد</Typography>
              </div>
            )}
          </div>
        </div>
      </div>
      <TimeoutModal open={openTimeout} />
      <LoadingModal open={loading} />
    </div>
  );
};

export default SearchTour;
