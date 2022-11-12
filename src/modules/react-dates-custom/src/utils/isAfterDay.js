import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import isBeforeDay from './isBeforeDay';
import isSameDay from './isSameDay';

export default function isAfterDay(a, b) {
  //if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    if(moment.locale()=='fa') {
        if (!momentJalali.isMoment(a) || !momentJalali.isMoment(b)) return false;
    }
    else {
        if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    }
  return !isBeforeDay(a, b) && !isSameDay(a, b);
}
