import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import toMomentObject from './toMomentObject';

import {ISO_FORMAT} from '../../constants';

export default function toISODateString(date, currentFormat) {
    var dateObj;
    if (moment.locale() == 'fa')
        dateObj = momentJalali.isMoment(date) ? date : toMomentObject(date, currentFormat);
    else
        dateObj = moment.isMoment(date) ? date : toMomentObject(date, currentFormat);

    if (!dateObj) return null;
    if (moment.locale() == 'fa')
        return dateObj.format('jYYYY/jMM/jDD');
    else
        return dateObj.format(ISO_FORMAT);
}
