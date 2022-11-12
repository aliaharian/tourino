import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import isBeforeDay from './isBeforeDay';

export default function isInclusivelyAfterDay(a, b) {
    if(moment.locale()=='fa') {
        if (!momentJalali.isMoment(a) || !momentJalali.isMoment(b)) return false;
    }
    else {
        if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    }

  return !isBeforeDay(a, b);
}
