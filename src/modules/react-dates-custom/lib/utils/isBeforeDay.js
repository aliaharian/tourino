Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isBeforeDay;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentJalaliDate = require('moment-jalali-date');

var _momentJalaliDate2 = _interopRequireDefault(_momentJalaliDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isBeforeDay(a, b) {
    if (_moment2['default'].locale() == 'fa') {
        if (!_momentJalaliDate2['default'].isMoment(a) || !_momentJalaliDate2['default'].isMoment(b)) return false;
    } else {
        if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
    }
    // if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    var aYear, aMonth, bYear, bMonth;

    // aYear = moment.locale()=='fa'? a.jYear(): a.year();
    // aMonth = moment.locale()=='fa'? a.jMonth(): a.month();
    //
    // bYear = moment.locale()=='fa'? b.jYear(): b.year();
    // bMonth = moment.locale()=='fa'? b.jMonth(): b.month();

    aYear = a.year();
    aMonth = a.month();

    bYear = b.year();
    bMonth = b.month();

    var isSameYear = aYear === bYear;
    var isSameMonth = aMonth === bMonth;

    if (isSameYear && isSameMonth) return a.date() < b.date();
    if (isSameYear) return aMonth < bMonth;
    return aYear < bYear;
}