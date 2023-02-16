import HotelItem from "../SearchTour/HotelItem";
import PassengerInfo from "./PassengerInfo";
import useStyles from "./Style";

const TourInfo = ({ tour }) => {
  console.log("tour", tour);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.tourHeader}>
        <p>تور انتخابی شما</p>
      </div>

      <HotelItem
        data={tour.tour}
        from_city={tour.tour.from_city}
        to_city={tour.tour.to_city}
        info
      />
      <div className={classes.tourHeader}>
        <p>اطلاعات مسافران</p>
      </div>
      <div className={classes.passengersContainer}>
        <div className={classes.passengerItemContainer}>
          <PassengerInfo info={{}} setInfo={() => {}} error={false} />
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
