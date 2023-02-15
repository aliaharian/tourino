import { Button, ListItemSecondaryAction, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import EndLocation from "./EndLocation";
import PeopleCount from "./PeopleCount";
import SelectDate from "./SelectDate";
import StartLocation from "./StartLocation";
import useStyles from "./Style";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar, setLoading } from "../../../redux/user";
import { useRouter } from "next/dist/client/router";
import moment from "moment-jalaali";
import axios from "axios";
import { dateTime } from "../../utilities";
import { getAvailableCities } from "../../../redux/area";
moment.locale("fa");
moment.loadPersian();

const Searchbar = ({
  scrollPos,
  showSearch,
  setShowSearch,
  transport,
  query,
  dest,
  origin,
  homepage,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState();
  const [startLocation, setStartlocation] = useState(origin);
  const [endLocation, setEndlocation] = useState(dest);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adults, setAdults] = useState(1);
  const [startDateStr, setStartDateStr] = useState();
  const [endDateStr, setEndDateStr] = useState();
  const [infants, setInfants] = useState(0);
  const anchorElGlobal = useRef(null);
  const Dispatch = useDispatch();
  const Router = useRouter();
  const [roomLoad, setRoomLoad] = useState(false);
  const [beginSearch, setBeginSearch] = useState(false);
  const [rooms, setRooms] = React.useState([
    {
      adult: 1,
      teen: 0,
      child: 0,
      infant: 0,
    },
  ]);

  const cities = useSelector((state) => state.area.availableCities);
  useEffect(() => {
    !cities && Dispatch(getAvailableCities());
  }, [cities]);

  useEffect(() => {
    let flag = true;
    //redirect to home if query params not valid
    if (
      (query.origin && query.dest && query.origin === query.dest) ||
      (query.startDate && query.endDate && query.endDate === query.startDate)
    ) {
      Router.push("/", undefined, { shallow: true });
      Dispatch(
        enqueueSnackbar({
          message: "پارامتر های ارسالی صحیح نیست",
          options: {
            variant: "error",
          },
        })
      );
      flag = false;
      return;
    }
    if (query.startDate && query.endDate) {
      var today = new Date().setHours(0, 0, 0, 0);
      var startTmp = new Date(query.startDate * 1000).setHours(0, 0, 0, 0);
      var endTmp = new Date(query.endDate * 1000).setHours(0, 0, 0, 0);
      if (
        startTmp < today ||
        endTmp < today ||
        startTmp > endTmp ||
        Math.round((endTmp - startTmp) / (1000 * 60 * 60 * 24)) < 2
      ) {
        Router.push("/", undefined, { shallow: true });
        Dispatch(
          enqueueSnackbar({
            message: "پارامتر های ارسالی صحیح نیست",
            options: {
              variant: "error",
            },
          })
        );
        flag = false;

        return;
      }
    }

    query.startDate && setStartDate(moment.unix(query.startDate));
    query.endDate && setEndDate(moment.unix(query.endDate));
    if (query.startDate && query.endDate) {
      setStartDateStr(
        dateTime.dateTimeCustom(query.startDate).day +
          " " +
          dateTime.dateTimeCustom(query.startDate).month +
          " "
      );
      setEndDateStr(
        dateTime.dateTimeCustom(query.endDate).day +
          " " +
          dateTime.dateTimeCustom(query.endDate).month +
          " "
      );
    }
    if (query.rooms) {
      let tmp = query.rooms;
      let roomsArray = [];
      let adultsTmp = 0;
      let infantsTmp = 0;

      tmp = tmp.split(",");
      tmp.map((item) => {
        let singleRoom = item.split("_");
        adultsTmp =
          parseInt(adultsTmp) +
          parseInt(singleRoom[0]) +
          parseInt(singleRoom[1]) +
          parseInt(singleRoom[2]);
        infantsTmp = parseInt(infantsTmp) + parseInt(singleRoom[3]);
        if (
          singleRoom[0] > 5 ||
          singleRoom[1] > 5 ||
          singleRoom[2] > 5 ||
          singleRoom[3] > 5
          // ((parseInt(singleRoom[0]) + parseInt(singleRoom[1]) + parseInt(singleRoom[2])) < 2)
        ) {
          Router.push("/", undefined, { shallow: true });
          Dispatch(
            enqueueSnackbar({
              message: "پارامتر های ارسالی صحیح نیست",
              options: {
                variant: "error",
              },
            })
          );
          flag = false;

          return;
        }
        roomsArray.push({
          adult: singleRoom[0],
          teen: singleRoom[1],
          child: singleRoom[2],
          infant: singleRoom[3],
        });
      });

      if (adultsTmp + infantsTmp > 10 || adultsTmp + infantsTmp < 2) {
        Router.push("/", undefined, { shallow: true });
        Dispatch(
          enqueueSnackbar({
            message: "پارامتر های ارسالی صحیح نیست",
            options: {
              variant: "error",
            },
          })
        );
        flag = false;

        return;
      }

      setRooms(roomsArray);
      setAdults(adultsTmp);
      setInfants(infantsTmp);
      setRoomLoad(true);
    }
  }, [query]);
  useEffect(() => {
    if (startDate) {
      setStartDateStr(
        dateTime.dateTimeCustom(new Date(startDate).getTime() / 1000).day +
          " " +
          dateTime.dateTimeCustom(new Date(startDate).getTime() / 1000).month +
          " "
      );
    }
    if (endDate) {
      setEndDateStr(
        dateTime.dateTimeCustom(new Date(endDate).getTime() / 1000).day +
          " " +
          dateTime.dateTimeCustom(new Date(endDate).getTime() / 1000).month +
          " "
      );
    }
  }, [startDate, endDate]);

  const handleSelect = (item) => {
    selected === item ? setSelected(null) : setSelected(item);
  };
  const handleChangeStartLocation = (e) => {
    setStartlocation(e);
    setSelected("endLocation");
  };
  const handleChangeEndLocation = (e) => {
    setEndlocation(e);
    setSelected("selectDate");
  };

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setBeginSearch(false);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleSearchTour = () => {
    let text = "";
    if (!startLocation) {
      text = "شهر مبدا را انتخاب کنید";
    } else if (!endLocation) {
      text = "شهر مقصد را انتخاب کنید";
    } else if (startLocation.id === endLocation.id) {
      text = "شهر مبدا  و مقصد نمیتواند یکی باشد";
    } else if (!startDate || !endDate) {
      text = "تاریخ رفت و برگشت خود را انتخاب کنید";
    } else if (adults + infants < 2) {
      text = "حداقل تعداد مسافران باید دو نفر باشد";
    } else if (adults + infants > 10) {
      text = "حداکثر تعداد مسافران باید کمتر از ۱۰ نفر باشد";
    }

    if (text !== "") {
      Dispatch(
        enqueueSnackbar({
          message: text,
          options: {
            variant: "error",
          },
        })
      );
    } else {
      setBeginSearch(true);
      setShowSearch(false);
      let recent = [];
      if (localStorage.getItem("recentCities")) {
        recent = JSON.parse(localStorage.getItem("recentCities"));
      }
      if (recent.findIndex((x) => x.id === startLocation.id) === -1) {
        recent.push(startLocation);
        localStorage.setItem("recentCities", JSON.stringify(recent));
      }
      let roomsStr = "";
      rooms.map((room) => {
        roomsStr +=
          room.adult +
          "_" +
          room.teen +
          "_" +
          room.child +
          "_" +
          room.infant +
          ",";
      });
      roomsStr = roomsStr.substring(0, roomsStr.length - 1);

      Router.push(
        `/tour/search?departure_type=${transport}&arrival_type=${transport}&origin=${
          startLocation.city_id
        }&dest=${endLocation.city_id}&startDate=${
          new Date(startDate).getTime() / 1000
        }&endDate=${
          new Date(endDate).getTime() / 1000
        }&rooms=${roomsStr}&sort=price`
      );
      Dispatch(setLoading(true));
    }
  };

  console.log("start", startLocation);
  console.log("end", endLocation);
  return (
    <div
      ref={anchorElGlobal}
      className={clsx(
        classes.searchbar,
        !homepage && showSearch && classes.searchbarOther,
        scrollPos && !showSearch && classes.searchbarSm
      )}
    >
      {!scrollPos || showSearch ? (
        <>
          <StartLocation
            anchorElGlobal={anchorElGlobal}
            handleChange={handleChangeStartLocation}
            startLocation={startLocation}
            onClose={() => setSelected(null)}
            onClick={() => handleSelect("startLocation")}
            selected={selected === "startLocation"}
            cities={cities}
          />
          <EndLocation
            anchorElGlobal={anchorElGlobal}
            handleChange={handleChangeEndLocation}
            endLocation={endLocation}
            onClose={() => setSelected(null)}
            onClick={() => handleSelect("endLocation")}
            selected={selected === "endLocation"}
            cities={cities}
          />
          <SelectDate
            anchorElGlobal={anchorElGlobal}
            startDate={startDate}
            endDate={endDate}
            gotoNext={() => {
              console.log("okkkk");
              setSelected("pepoleCount");
            }}
            onClose={() => setSelected(null)}
            setStartDate={(e) => {
              // console.log('changed')
              setStartDate(e);
            }}
            setEndDate={(e) => setEndDate(e)}
            onClick={() => handleSelect("selectDate")}
            selected={selected === "selectDate"}
          />
          <PeopleCount
            adults={parseInt(adults)}
            infants={parseInt(infants)}
            rooms={rooms}
            setAdults={(e) => setAdults(e)}
            setInfants={(e) => setInfants(e)}
            setRooms={(e) => setRooms(e)}
            onClick={() => handleSelect("pepoleCount")}
            selected={selected === "pepoleCount"}
            beginSearch={beginSearch}
            handleSearchTour={() => handleSearchTour()}
          />
        </>
      ) : (
        <div
          className={clsx(
            classes.searchbarPlaceholder,
            !(query && startLocation && endLocation && startDateStr) &&
              classes.emptyPlaceholder
          )}
          onClick={() => setShowSearch(true)}
        >
          {query && startLocation && endLocation && startDateStr ? (
            <Typography>
              {startLocation?.title || startLocation?.city?.title}
              <span> | </span>
              {endLocation?.title || endLocation?.city?.title}
              <span> | </span>
              {startDateStr} _ {endDateStr}
              <span> | </span>
              {parseInt(adults) + parseInt(infants)} نفر
            </Typography>
          ) : (
            <Typography>جستجو کنید</Typography>
          )}

          <div>
            <IoSearch />
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
