import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import toMomentObject from './toMomentObject';

import {ISO_MONTH_FORMAT} from '../../constants';

export default function toISOMonthString(date, currentFormat) {
    var dateObj;
    if (moment.locale() == 'fa')
        dateObj = momentJalali.isMoment(date) ? date : toMomentObject(date, currentFormat);
    else
        dateObj = moment.isMoment(date) ? date : toMomentObject(date, currentFormat);
    if (!dateObj) return null;
    if (moment.locale() == 'fa')
        return dateObj.format('jYYYY-jMM');
    else
        return dateObj.format(ISO_MONTH_FORMAT);
}
