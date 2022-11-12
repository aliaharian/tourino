Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = toISODateString;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentJalaliDate = require('moment-jalali-date');

var _momentJalaliDate2 = _interopRequireDefault(_momentJalaliDate);

var _toMomentObject = require('./toMomentObject');

var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toISODateString(date, currentFormat) {
    var dateObj;
    if (_moment2['default'].locale() == 'fa') dateObj = _momentJalaliDate2['default'].isMoment(date) ? date : (0, _toMomentObject2['default'])(date, currentFormat);else dateObj = _moment2['default'].isMoment(date) ? date : (0, _toMomentObject2['default'])(date, currentFormat);

    if (!dateObj) return null;
    if (_moment2['default'].locale() == 'fa') return dateObj.format('jYYYY/jMM/jDD');else return dateObj.format(_constants.ISO_FORMAT);
}