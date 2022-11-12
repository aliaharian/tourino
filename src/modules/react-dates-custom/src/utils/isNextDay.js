import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import isSameDay from './isSameDay';

export default function isNextDay(a, b) {
    var nextDay;
    if(moment.locale()=='fa') {
        if (!momentJalali.isMoment(a) || !momentJalali.isMoment(b)) return false;
    }
    else {
        if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    }
    if(moment.locale()=='fa')
        nextDay=momentJalali(a).add(1, 'day');
    else
        nextDay = moment(a).add(1, 'day');

  return isSameDay(nextDay, b);
}
