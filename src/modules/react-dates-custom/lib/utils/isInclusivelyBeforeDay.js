Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isInclusivelyBeforeDay;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentJalaliDate = require('moment-jalali-date');

var _momentJalaliDate2 = _interopRequireDefault(_momentJalaliDate);

var _isAfterDay = require('./isAfterDay');

var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isInclusivelyBeforeDay(a, b) {
    // if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    if (_moment2['default'].locale() == 'fa') {
        if (!_momentJalaliDate2['default'].isMoment(a) || !_momentJalaliDate2['default'].isMoment(b)) return false;
    } else {
        if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
    }
    return !(0, _isAfterDay2['default'])(a, b);
}