Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = getVisibleDays;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentJalaliDate = require('moment-jalali-date');

var _momentJalaliDate2 = _interopRequireDefault(_momentJalaliDate);

var _toISOMonthString = require('./toISOMonthString');

var _toISOMonthString2 = _interopRequireDefault(_toISOMonthString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getVisibleDays(month, numberOfMonths, enableOutsideDays) {
    if (_moment2['default'].locale() == 'fa') {
        if (!_momentJalaliDate2['default'].isMoment(month)) return {};
    } else if (!_moment2['default'].isMoment(month)) return {};
    var format = _moment2['default'].locale() == 'fa' ? 'jMonth' : 'month';
    var visibleDaysByMonth = {};
    var currentMonth = month.clone().subtract(1, format);
    for (var i = 0; i < numberOfMonths + 2; i += 1) {
        // account for transition months
        var visibleDays = [];

        // set utc offset to get correct dates in future (when timezone changes)
        var baseDate = currentMonth.clone();
        var firstOfMonth = baseDate.clone().startOf(format).hour(12);
        var lastOfMonth = baseDate.clone().endOf(format).hour(12);

        var currentDay = firstOfMonth.clone();

        // days belonging to the previous month
        if (enableOutsideDays) {
            for (var j = 0; j < currentDay.weekday(); j += 1) {
                var prevDay = currentDay.clone().subtract(j + 1, 'day');
                visibleDays.unshift(prevDay);
            }
        }

        while (currentDay < lastOfMonth) {
            visibleDays.push(currentDay.clone());
            currentDay.add(1, 'day');
        }

        if (enableOutsideDays) {
            // weekday() returns the index of the day of the week according to the locale
            // this means if the week starts on Monday, weekday() will return 0 for a Monday date, not 1
            if (currentDay.weekday() !== 0) {
                // days belonging to the next month
                for (var k = currentDay.weekday(), count = 0; k < 7; k += 1, count += 1) {
                    var nextDay = currentDay.clone().add(count, 'day');
                    visibleDays.push(nextDay);
                }
            }
        }

        visibleDaysByMonth[(0, _toISOMonthString2['default'])(currentMonth)] = visibleDays;
        currentMonth = currentMonth.clone().add(1, format);
    }

    return visibleDaysByMonth;
}