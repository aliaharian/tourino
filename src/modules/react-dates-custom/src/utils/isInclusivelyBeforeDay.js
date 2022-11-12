import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import isAfterDay from './isAfterDay';

export default function isInclusivelyBeforeDay(a, b) {
 // if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    if(moment.locale()=='fa') {
        if (!momentJalali.isMoment(a) || !momentJalali.isMoment(b)) return false;
    }
    else {
        if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    }
  return !isAfterDay(a, b);
}
