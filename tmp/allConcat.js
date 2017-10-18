import { Mortal } from './../js/solarCalc.js';

$(document).ready(function(){
  $('#c_time').text(moment().format('MM / DD / YYYY'));

  $('#input').submit(function(event){
    event.preventDefault();
    let day = parseInt($('#day').val());
    let month = parseInt($('#month').val());
    let year = parseInt($('#year').val());
    let age = ($('#age').val());
    let gender = ($('#gender').val());
    let user = new Mortal(day, month, year, age, gender);

    user.ageToSeconds();
    user.calcDiff();

    let mercury = user.mercury().toFixed(2);
    let venus = user.venus().toFixed(2);
    let mars = user.mars().toFixed(2);
    let jupiter = user.jupiter().toFixed(2);

    $("#results").html(`<h1>You Are ${user.seconds} seconds old!</h1>`);
    $("#mercury").html(`<h1>You Are ${mercury} years old on Mercury...</h1>`);
    $("#venus").html(`<h1>You Are ${venus} years old on Venus...</h1>`);
    $("#mars").html(`<h1>You Are ${mars} years old on Mars...</h1>`);
    $("#jupiter").html(`<h1>You Are ${jupiter} years old on Jupiter...</h1>`);

  });
});
