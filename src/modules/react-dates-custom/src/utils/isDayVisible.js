import isBeforeDay from './isBeforeDay';
import isAfterDay from './isAfterDay';
import moment from 'moment';
export default function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  var format_m='month';
  var format_w='week';
  if(moment.locale()=='fa') {
      format_m = 'jMonth';
      format_w='jWeek';
  }
  let firstDayOfFirstMonth = month.clone().startOf(format_m);
  if (enableOutsideDays) firstDayOfFirstMonth = firstDayOfFirstMonth.startOf(format_w);
  if (isBeforeDay(day, firstDayOfFirstMonth)) return false;

  let lastDayOfLastMonth = month.clone().add(numberOfMonths - 1,moment.locale()=='fa'?'jMonths':'months').endOf(format_m);
  if (enableOutsideDays) lastDayOfLastMonth = lastDayOfLastMonth.endOf(format_w);
  return !isAfterDay(day, lastDayOfLastMonth);
}
