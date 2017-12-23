countItt();

function countItt() {
  yearr = 1986;
  monthh = 01;
  dayy = 01;
  hourss = 00;
  minuitess = 00;
  secondss = 00;

  setTimeout(function() {
    endDatee = new Date(yearr, (monthh + 1), dayy, hourss, minuitess, secondss, 00);
    thisDatee = new Date();
    thisDatee = new Date(thisDatee.getFullYear(), thisDatee.getMonth(), thisDatee.getDate(), thisDatee.getHours(), thisDatee.getMinutes(), thisDatee.getSeconds(), 00, 00);

    var daysLeftt = parseInt((endDatee - thisDatee) / 86400000);
    var hoursLeftt = parseInt((endDatee - thisDatee) / 3600000);
    var minutsLeftt = parseInt((endDatee - thisDatee) / 60000);
    var secondsLeftt = parseInt((endDatee - thisDatee) / 1000);
    var yearsLeftt = parseInt(yearr - thisDatee.getFullYear());

    secondss= minutsLeftt * 60;
    secondss = secondsLeftt - secondss;

    minutess = hoursLeftt * 60;
    minutess = minutsLeftt - minutess;

    hourss = daysLeftt * 24;
    hourss = (hoursLeftt - hourss) < 0 ? 0 : hoursLeftt - hourss;

    dayss = daysLeftt;

    yearss = yearsLeftt;
    // console.log(yearss);

    startCountt(dayss, hourss, minutess, secondss);

  }, 1000);
}

function startCountt(dayss, hourss, minutess, secondss) {
  document.getElementById('countUp').innerHTML =yearss;
  countItt();
}
