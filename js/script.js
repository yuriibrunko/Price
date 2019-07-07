var resul = document.querySelector('.result');

var tota = document.querySelector('.total')
var total = document.addEventListener('click', function() {
  var drin_pr = document.querySelector('.drink-price');
var drink_price = document.getElementById('drink-price').value;

var drin_amo = document.querySelector('.drink-amount');
var drink_amount = document.getElementById('drink-amount').value;

var bred_pr = document.querySelector('.bred-price');
var bred_price = document.getElementById('bred-price').value;

var bred_amo = document.querySelector('.bred-amount');
var bred_amount = document.getElementById('bred-amount').value;

var fruit_pr = document.querySelector('.fruit-price');
var fruit_price = document.getElementById('fruit-price').value;

var fruit_amo = document.querySelector('.fruit-amount');
var fruit_amount = document.getElementById('fruit-amount').value;
  var drink = drink_price * drink_amount;
  var bred = bred_price * bred_amount;
  var fruit = fruit_price * fruit_amount;
  var result = drink + bred + fruit;
  document.getElementById("res").innerHTML = result;
});