import moment from 'moment';
import momentJalali from 'moment-jalali-date';
export default function isSameDay(a, b) {
    if (moment.locale() == 'fa') {
        if (!momentJalali.isMoment(a) || !momentJalali.isMoment(b)) return false;

       var aa= momentJalali(a);
       var bb=momentJalali(b);
        return aa.jDate() === bb.jDate() &&
            aa.jMonth() === bb.jMonth() &&
            aa.jYear() === bb.jYear();
    }
    else {
        if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
        return a.date() === b.date() &&
            a.month() === b.month() &&
            a.year() === b.year();
    }
    // Compare least significant, most likely to change units first
    // Moment's isSame clones moment inputs and is a tad slow


}
