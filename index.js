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

function month(monthNumber,year) {
var table = '<table>' + row(1,monthNumber,year) +
 row(2,monthNumber,year) +
 row(3,monthNumber,year) +
 row(4,monthNumber,year) +
 row(5,monthNumber,year) +
 row(6,monthNumber,year) +
 row(7,monthNumber,year) +
'</table>';
   
    console.log(table)
return table;
}

function buildMonth(monthNumber,year) {
    document.getElementById('1').innerHTML = month(monthNumber,year);
    document.getElementById('2').innerHTML = month(monthNumber,year);
    document.getElementById('3').innerHTML = month(monthNumber,year);
    document.getElementById('4').innerHTML = month(monthNumber,year);
    document.getElementById('5').innerHTML = month(monthNumber,year);
    document.getElementById('6').innerHTML = month(monthNumber,year);
    document.getElementById('7').innerHTML = month(monthNumber,year);
    document.getElementById('8').innerHTML = month(monthNumber,year);
    document.getElementById('9').innerHTML = month(monthNumber,year);
    document.getElementById('10').innerHTML = month(monthNumber,year);
    document.getElementById('11').innerHTML = month(monthNumber,year);
    document.getElementById('12').innerHTML = month(monthNumber,year);
    document.getElementById('13').innerHTML = month(monthNumber,year);

}