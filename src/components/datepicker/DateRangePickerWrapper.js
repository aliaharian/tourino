import "react-dates/initialize";
import { SingleDatePicker, DateRangePicker } from "react-dates-jalali";

import "react-dates-jalali/lib/css/_datepicker.css";
import { useEffect, useState } from "react";
import jMoment from "moment-jalaali";
import useStyles from "./Style";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";
jMoment.locale("fa");
jMoment.loadPersian();

const DatePicker = ({ startDate, endDate, ...props }) => {
  // console.log('ifna', startDate?._d)
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  return (
    <div className={classes.root}>
      <DateRangePicker
        isRTL={true}
        // orientation={isMobile ? "vertical" : "horizontal"}
        renderCalendarDay={undefined}
        verticalHeight={568}
        hideKeyboardShortcutsPanel
        noBorder
        onClose={({ startDate }) => {
          // console.log(startDate)
        }}
        daySize={48}
        numberOfMonths={isMobile ? 1 : 2}
        customArrowIcon={() => <KeyboardArrowLeftIcon />}
        startDatePlaceholderText={
          <div>
            <p>تاریخ شروع</p>
            <p>تاریخ حرکت شما از مبدا</p>
          </div>
        }
        endDatePlaceholderText={
          <div>
            <p>تاریخ پایان</p>
            <p>تاریخ اتمام سفر</p>
          </div>
        }
        monthFormat={"jMMMM jYYYY"} //for persian:'jMMMM jYYYY', for english :'MMMM YYYY'
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        keepOpenOnDateSelect={true}
        minimumNights={2}
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          if (props.focusedInput === "startDate") {
            props.setStartDate(startDate);
            // props.setFocusedInput('endDate')
          } else {
            props.setEndDate(endDate);
            // props.setFocusedInput('startDate')
          }
        }} // PropTypes.func.isRequired,
        focusedInput={props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={(focusedInput) => {
          // Do not apply if it is null
          if (focusedInput) {
            props.setFocusedInput(focusedInput);
          }
        }}
      />
    </div>
  );
};

export default DatePicker;
