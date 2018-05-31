function monthDates(monthNumber, year) {
    //7 элементов 
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'];
    var dayofWeek = new Date(year,monthNumber,1).getDay();
    // объявление чисел предыдущего месяца 
    if 
        (dayofWeek === 0) {
            dayofWeek = 5
        }
        else 
    {
        dayofWeek = dayofWeek -2
    }
    var prevMonthLastDate = new Date(year,monthNumber,0).getDate();

    var prevMonthMondayDate = prevMonthLastDate - dayofWeek;

    var previousMonth = new Date(year,monthNumber-1,prevMonthMondayDate);

 // вывод чисел предыдущего месяца
 for (var i = 7;i<49;i++) {
     days.push (new Date(previousMonth));
     previousMonth.setDate (previousMonth.getDate()+1);
 }
return days;
}



function row (rowNumber,monthNumber,year) {
    var array = monthDates(monthNumber,year);
    var dest = [];

    var start = rowNumber * 7 - 7;
    var end = start + 7;

  for (start; start < end; start++) {
    dest.push(array[start])
  }

  var res = dest.map(function(day) {
      if (rowNumber === 1) {
return '<td>'+day+'</td>'
      }
      else {
          var date = day.getDate()
return '<td>' + date + '</td>'
      }
  })

  res = res.toString();
  res = res.replace(/,/g, '');

res = '<tr>' + res + '</tr>';


  return res;
}


     var captions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     
function month(monthNumber,year) {
var table = '<div>'+'<table>'+'<th>' + captions[monthNumber] + '</th>' +
 row(1,monthNumber,year) +
 row(2,monthNumber,year) +
 row(3,monthNumber,year) +
 row(4,monthNumber,year) +
 row(5,monthNumber,year) +
 row(6,monthNumber,year) +
 row(7,monthNumber,year) +
'</table>'
'</div>';
   
    console.log(table)
return table;
}

function buildMonthDop (monthNumber,year) {
    document.getElementById('1').innerHTML = month(monthNumber,year);
}
function buildMonthOne (monthNumber,year) {
    document.getElementById('January').innerHTML = month(monthNumber,year);
}
function buildMonthTwo (monthNumber,year) {
    document.getElementById('February').innerHTML = month(monthNumber,year);
}
function buildMonthThree (monthNumber,year) {
    document.getElementById('March').innerHTML = month(monthNumber,year);
}
function buildMonthFour (monthNumber,year) {
    document.getElementById('April').innerHTML = month(monthNumber,year);
}
function buildMonthFive (monthNumber,year) {
    document.getElementById('May').innerHTML = month(monthNumber,year);
}
function buildMonthSix (monthNumber,year) {
    document.getElementById('June').innerHTML = month(monthNumber,year);
}
function buildMonthSeven (monthNumber,year) {
    document.getElementById('July').innerHTML = month(monthNumber,year);
}
function buildMonthEight (monthNumber,year) {
    document.getElementById('August').innerHTML = month(monthNumber,year);
}
function buildMonthNine (monthNumber,year) {
    document.getElementById('September').innerHTML = month(monthNumber,year);
}
function buildMonthTen (monthNumber,year) {
    document.getElementById('October').innerHTML = month(monthNumber,year);
}
function buildMonthEleven (monthNumber,year) {
    document.getElementById('November').innerHTML = month(monthNumber,year);
}
function buildMonthTwelve (monthNumber,year) {
    document.getElementById('December').innerHTML = month(monthNumber,year);
}
