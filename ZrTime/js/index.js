// 目标时间
var endDate = new Date('2020/04/22 23:00:00');
var startDate = new Date('2015/12/12 23:00:00');
// 获取span
var spantogetherDay = my$('togetherDay');
var spantogetherHour = my$('togetherHour');
var spantogetherMinute = my$('togetherMinute');
var spantogetherSecond = my$('togetherSecond');

var spanDay = my$('day');
var spanHour = my$('hour');
var spanMinute = my$('minute');
var spanSecond = my$('second');
setInterval(countdown, 100);
setInterval(countdownTogether, 100);
countdown();
countdownTogether();
// 倒计时
function countdown() {
    // 计算时间差
    // 当前时间
    var startDate = new Date();
    // 计算两个日期差
    var interval = getInterval(startDate, endDate);
    setInnerText(spanDay, interval.day);
    setInnerText(spanHour, interval.hour);
    setInnerText(spanMinute, interval.minute);
    setInnerText(spanSecond, interval.second);
}

function countdownTogether() {
    // 计算时间差
    // 当前时间
    var endDate = new Date();
    // 计算两个日期差
    var interval = getInterval(startDate, endDate);
    setInnerText(spantogetherDay, interval.day);
    setInnerText(spantogetherHour, interval.hour);
    setInnerText(spantogetherMinute, interval.minute);
    setInnerText(spantogetherSecond, interval.second);
}