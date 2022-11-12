import moment from 'moment';
import momentJalali from 'moment-jalali-date';

import toMomentObject from './toMomentObject';

import {DISPLAY_FORMAT} from '../../constants';

export default function toLocalizedDateString(date, currentFormat) {
    var dateObj;
    if (moment.locale() == 'fa')
        dateObj = momentJalali.isMoment(date) ? date : toMomentObject(date, currentFormat);
    else
        dateObj = moment.isMoment(date) ? date : toMomentObject(date, currentFormat);

    if (!dateObj) return null;

    return dateObj.format(DISPLAY_FORMAT);
}
