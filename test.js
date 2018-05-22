function month (year,monthNumber) {
    //дни недели
    var days = ['Sun','Mon','Tue','Wed','Thu','Fr','Sat'];
    var dayofWeek = new Date (year,monthNumber,1).getDay();

    //условие для перехода к дням предыдущего месяца
    if (dayofWeek===0) {
        dayofWeek = 5
    }
    else {
        dayofWeek = dayofWeek - 2
    }

    //переход к дням предыдущего месяца
    var lastDayPreviousMonth = new Date (year,monthNumber-1,0).getDate();
    var startDayPreviousMonth = lastDayPreviousMonth - dayofWeek;
    var previousMonth = new Date (year,monthNumber-1,startDayPreviousMonth).getDate();

    //полное заполнение месяца
    for (var i=7; i<49; i++) {
        days.push (new Date(previousMonth));
        previousMonth.setDate(previousMonth.getDate()+1)
    }







}