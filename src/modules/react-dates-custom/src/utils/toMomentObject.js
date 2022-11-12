import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import {DISPLAY_FORMAT, ISO_FORMAT} from '../../constants';

export default function toMomentObject(dateString, customFormat) {
    const dateFormats = customFormat ?
        [customFormat, DISPLAY_FORMAT, ISO_FORMAT] :
        [DISPLAY_FORMAT, ISO_FORMAT];
    var date;
    if (moment.locale() == 'fa')
        date = momentJalali(dateString, 'jYYYY-jMM-jDD',true);
    else
        date = moment(dateString, dateFormats, true);
    return date.isValid() ? date.hour(12) : null;
}
