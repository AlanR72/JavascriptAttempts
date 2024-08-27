 To work with dates you create an instance of the Date object constructor

var today = new Date();

Once the date object is created the following methods let you 
set and retrieve the time and date that it represents
 
getDate()  returns the day of the month
setDate()  sets the day of the month

getDay()  returns the day of the week

getFullYear()  returns the year (4 digits)
setFullYear()  sets the year (4 digits)

getHours()  returns the hour (0-23)
setHours()  sets the hour (0-23)

getmilliseconds()  returns the milliseconds (0-999)
setMilliseconds()  sets the milliseconds (0-999)

getMinutes()  returns the minutes (0-59)
setMinutes()  sets the minutes (0-59)

getMonth()  returns the month (0-12)
setMonth()  sets the month (0-12)

getSeconds()  returns the seconds (0-59)
setSeconds()  sets the seconds (0-59)

getTime()  number of milliseconds since January 1, 1970,
            00:00:00 UTC (Coordinated Universal Time)
            and a negative number for any time before
setTime()  number of milliseconds since January 1, 1970,
            00:00:00 UTC (Coordinated Universal Time)
            and a negative number for any time before

getTimezoneOffset()  returns timezone offset in mins for locale.
                    A visitors location may affect time zones and language
                    spoken. Programmers use the term locale to refer to this
                    location-based type of information.

toDateString()  returns "date" as a human-readable string
                i.e Wed Apr 16 1975

toTimeString()  returns "time" as a human-readable string

toString()  returns a string representing the specified date

In the below example getFullYear() is used to return the year of the date
var year = today.getFullYear();

var el = document.getElementById('box');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>'; 

var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');New date is set in the past
var difference = today.getTime() - est.getTime();Difference will be in milliseconds
difference = (difference / 31556900000);  To get the difference in days/weeks/years,you divide
                                            this number by the number of milliseconds in a day/week/year.
                                            Here the number is divided by 31,556,900,000 - the number of milliseconds
                                            in a year (that is not a leap yeat)

el = document.getElementById('box');
el.innerHTML = Math.floor(difference) + ' years of online travel advice';







