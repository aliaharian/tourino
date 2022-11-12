Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isDayVisible;

var _isBeforeDay = require('./isBeforeDay');

var _isBeforeDay2 = _interopRequireDefault(_isBeforeDay);

var _isAfterDay = require('./isAfterDay');

var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  var format_m = 'month';
  var format_w = 'week';
  if (_moment2['default'].locale() == 'fa') {
    format_m = 'jMonth';
    format_w = 'jWeek';
  }
  var firstDayOfFirstMonth = month.clone().startOf(format_m);
  if (enableOutsideDays) firstDayOfFirstMonth = firstDayOfFirstMonth.startOf(format_w);
  if ((0, _isBeforeDay2['default'])(day, firstDayOfFirstMonth)) return false;

  var lastDayOfLastMonth = month.clone().add(numberOfMonths - 1, _moment2['default'].locale() == 'fa' ? 'jMonths' : 'months').endOf(format_m);
  if (enableOutsideDays) lastDayOfLastMonth = lastDayOfLastMonth.endOf(format_w);
  return !(0, _isAfterDay2['default'])(day, lastDayOfLastMonth);
}