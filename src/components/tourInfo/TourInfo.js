import { Button } from "@material-ui/core";
import { useState } from "react";
import Lottie from "react-lottie";
import HotelItem from "../SearchTour/HotelItem";
import PassengerInfo from "./PassengerInfo";
import useStyles from "./Style";
import animationData from "../../assets/icon/loading.json";
import { errorSnackbar } from "../../../redux/user";
import { useDispatch } from "react-redux";
import PassengersDialog from "./PassengersDialog";
import axios from "axios";
import { GroupOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";

const TourInfo = ({ tour, userPassengers }) => {
  console.log("tour", tour);
  const classes = useStyles();
  const Router = useRouter();
  const [startSearch, setStartSearch] = useState(false);
  const Dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [passengers, setPassengers] = useState([
    ...Array.from(Array(parseInt(tour.tour.adult_count)).keys()).map(
      (item, index) => {
        return {
          name: "",
          lastName: "",
          nationalCode: "",
          mobile: "",
          birthDate: ["", "", ""],
          gender: "",
          type: index == 0 ? "leader" : "adult",
        };
      }
    ),
    ...Array.from(Array(parseInt(tour.tour.teen_count)).keys()).map(
      (item, index) => {
        return {
          name: "",
          lastName: "",
          nationalCode: "",
          mobile: "",
          birthDate: ["", "", ""],
          gender: "",
          type: "teen",
        };
      }
    ),
    ...Array.from(Array(parseInt(tour.tour.kid_count)).keys()).map(
      (item, index) => {
        return {
          name: "",
          lastName: "",
          nationalCode: "",
          mobile: "",
          birthDate: ["", "", ""],
          gender: "",
          type: "kid",
        };
      }
    ),
    ...Array.from(Array(parseInt(tour.tour.infant_count)).keys()).map(
      (item, index) => {
        return {
          name: "",
          lastName: "",
          nationalCode: "",
          mobile: "",
          birthDate: ["", "", ""],
          gender: "",
          type: "infant",
        };
      }
    ),
  ]);
  const handleSavePassengers = async () => {
    //check if all fields of all passengers are filled
    let allFilled = true;
    setStartSearch(true);
    passengers.forEach((passenger) => {
      Object.keys(passenger).forEach((key) => {
        if (passenger[key] === "") {
          allFilled = false;
        }
      });
    });
    if (allFilled) {
      //save passengers
      //axios
      try {
        const response = await axios.post("/tours/savePassengers", {
          passengers,
          tourId: tour.tour.id,
        });
        Router.push({
          pathname: "/profile/tours",
        });
      } catch (err) {
        Dispatch(errorSnackbar(err));
        setStartSearch(false);
      }
    } else {
      //enque snackbar
      Dispatch(
        errorSnackbar({
          response: { data: { message: "لطفا تمامی فیلد ها را پر کنید" } },
        })
      );
      setStartSearch(false);
    }
  };
  console.log("userPassengers", userPassengers);
  const handleReplacePassenger = (passenger, index) => {
    let tmp = [...passengers];
    tmp[index] = {
      name: passenger.name,
      lastName: passenger.last_name,
      nationalCode: passenger.national_code,
      mobile: passenger.phone,
      birthDate: [passenger.day, passenger.month, passenger.year],
      gender: passenger.male === 1 ? "male" : "female",
    };
    setPassengers([...tmp]);
    setOpenDialog(false);
    setSelectedIndex();
  };
  const parseType = (type) => {
    switch (type) {
      case "leader":
        return "بزرگسال(سرپرست)";
      case "adult":
        return "بزرگسال";
      case "teen":
        return "نوجوان";
      case "kid":
        return "کودک";
      case "infant":
        return "نوزاد";
      default:
        return "بزرگسال";
    }
  };
  return (
    <div className={classes.container}>
      <PassengersDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        index={selectedIndex}
        handleChange={handleReplacePassenger}
        passengers={userPassengers.data}
      />
      {/* <div className={classes.tourHeader}>
        <p>تور انتخابی شما</p>
      </div> */}
      <div className={classes.tourItemContainer}>
        <HotelItem
          data={tour.tour}
          from_city={tour.tour.from_city}
          to_city={tour.tour.to_city}
          info
        />
      </div>
      <div className={classes.tourHeader}>
        <p>اطلاعات مسافران</p>
      </div>
      <div className={classes.passengersContainer}>
        {passengers.map((passenger, index) => {
          return (
            <div className={classes.passengerItemContainer}>
              <div className={classes.selectFromBtn}>
                <p>{parseType(passenger.type)}</p>
                <Button
                  onClick={() => {
                    setSelectedIndex(index);
                    setOpenDialog(true);
                  }}
                  startIcon={<GroupOutlined />}
                >
                  انتخاب از لیست همسفران
                </Button>
              </div>
              <PassengerInfo
                info={passenger}
                lg
                setInfo={(info) => {
                  console.log(info);
                  let tmp = [...passengers];
                  tmp[index] = info;
                  setPassengers([...tmp]);
                }}
                error={false}
              />
            </div>
          );
        })}
      </div>
      <div className={classes.submitBtn}>
        <Button onClick={handleSavePassengers} disabled={startSearch}>
          {startSearch ? (
            <Lottie
              options={defaultOptions}
              height={48}
              width={48}
              isStopped={false}
              isPaused={false}
            />
          ) : (
            " تایید و پرداخت"
          )}
        </Button>
      </div>
    </div>
  );
};

export default TourInfo;
