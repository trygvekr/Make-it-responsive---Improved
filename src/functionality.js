$(document).ready(function () {
    $('#calendar').eCalendar({
    weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    textArrows: {previous: '<', next: '>'},
    eventTitle: 'Events',
    url: '',
    firstDayOfWeek: 0,
    events: [
      {title: 'Event 1', description: 'Innovation Camp Berlin', datetime: new Date(2021, 0 , 15, 17)},
      {title: 'Event 2', description: 'InovaCamp Oslo', datetime: new Date(2020, 11, 4 , 16)},
      {title: 'Event 3', description: 'UN innovation challenge', datetime: new Date(2020, 10, 10, 16)}
    ]});
    });