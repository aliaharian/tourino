import moment from 'moment';
import momentJalali from 'moment-jalali-date';

export default function isBeforeDay(a, b) {
    if (moment.locale() == 'fa') {
        if (!momentJalali.isMoment(a) || !momentJalali.isMoment(b)) return false;
    }
    else {
        if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    }
    // if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    var aYear, aMonth, bYear, bMonth;

    // aYear = moment.locale()=='fa'? a.jYear(): a.year();
    // aMonth = moment.locale()=='fa'? a.jMonth(): a.month();
    //
    // bYear = moment.locale()=='fa'? b.jYear(): b.year();
    // bMonth = moment.locale()=='fa'? b.jMonth(): b.month();

    aYear = a.year();
    aMonth =  a.month();

    bYear = b.year();
    bMonth = b.month();

    const isSameYear = aYear === bYear;
    const isSameMonth = aMonth === bMonth;

    if (isSameYear && isSameMonth) return a.date() < b.date();
    if (isSameYear) return aMonth < bMonth;
    return aYear < bYear;
}
