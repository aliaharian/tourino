Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isSameDay;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentJalaliDate = require('moment-jalali-date');

var _momentJalaliDate2 = _interopRequireDefault(_momentJalaliDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isSameDay(a, b) {
    if (_moment2['default'].locale() == 'fa') {
        if (!_momentJalaliDate2['default'].isMoment(a) || !_momentJalaliDate2['default'].isMoment(b)) return false;

        var aa = (0, _momentJalaliDate2['default'])(a);
        var bb = (0, _momentJalaliDate2['default'])(b);
        return aa.jDate() === bb.jDate() && aa.jMonth() === bb.jMonth() && aa.jYear() === bb.jYear();
    } else {
        if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
        return a.date() === b.date() && a.month() === b.month() && a.year() === b.year();
    }
    // Compare least significant, most likely to change units first
    // Moment's isSame clones moment inputs and is a tad slow

}