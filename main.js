const nameInput = document.getElementById('name');
const selectJobRole = document.getElementById('title');
const otherTitleInput = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const designAll = document.querySelectorAll('#color option');
const registerButton0 = document.querySelectorAll('#registration label input')[0];
const registerButton1 = document.querySelectorAll('#registration label input')[1];
const registerButton2 = document.querySelectorAll('#registration label input')[2];
const registerButton3 = document.querySelectorAll('#registration label input')[3];
const registerButton4 = document.querySelectorAll('#registration label input')[4];
const registerButton5 = document.querySelectorAll('#registration label input')[5];
const registerButton6 = document.querySelectorAll('#registration label input')[6];
const paypal = document.querySelectorAll('div p')[0];
const bitcoin = document.querySelectorAll('div p')[1];
const creditCard = document.getElementById('credit-card');
const activities = document.getElementById('registration');
const totalLabel = document.createElement('label');
const paymentType = document.getElementById('payment');
const selectPayment = document.querySelectorAll('#payment option')[0];
var value = 0;

//Dynamically appends "Total:" label to page
function appendTotal (){
  activities.appendChild(totalLabel);
}

//Adds text and value to "Total:" label
function calcTotal (){
  totalLabel.innerHTML = 'Total: ' + value;
}

//Dynamically adds attributes and to page
function addAttributes (){
  for (i = 0; i < designAll.length; i += 1){
    if (designAll[i].innerHTML.includes("JS Puns shirt only")){
      designAll[i].setAttribute('class', 'puns');
    }
    if (designAll[i].innerHTML.includes("JS shirt only")){
      designAll[i].setAttribute('class', 'love');
    }
  }
  nameInput.focus();
  otherTitleInput.style.display = 'none';
}


//Shows other-title only if "Other" is selected in "Job Role" menu
const showOther = function () {
  let clickedJobRole = selectJobRole.options[selectJobRole.selectedIndex].innerHTML;
  if (clickedJobRole == "Other") {
    otherTitleInput.style.display = 'block';
  } else {
      otherTitleInput.style.display = 'none';
  }
};

//Displays appropriate amount of color options depending on t-shrit design selected
const showColorOptions = function (){
  const designPuns = document.querySelectorAll('.puns');
  const designLove = document.querySelectorAll('.love');
  let clickedDesign = shirtDesign.options[shirtDesign.selectedIndex];
  if (clickedDesign.value == "js puns"){
    for (i = 0; i < designLove.length; i += 1) {
      designLove[i].style.display = 'none';
    }
    for (i = 0; i < designPuns.length; i += 1) {
      designPuns[i].style.display = 'block';
    }
    shirtColor.selectedIndex = 0;
  }
  if (clickedDesign.value == "heart js"){
    for (i = 0; i < designLove.length; i += 1) {
      designLove[i].style.display = 'block';
    }
    for (i = 0; i < designPuns.length; i += 1) {
      designPuns[i].style.display = 'none';
    }
    shirtColor.selectedIndex = 3;
  }
  if (clickedDesign.innerHTML == "Select Theme"){
    for (i = 0; i < designLove.length; i += 1) {
      designLove[i].style.display = 'block';
    }
    for (i = 0; i < designPuns.length; i += 1) {
      designPuns[i].style.display = 'block';
    }
  }
};


selectJobRole.addEventListener('change', showOther);

shirtDesign.addEventListener('change', showColorOptions);

registerButton0.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    value += 200
    calcTotal();
  } else {
    value -= 200
    calcTotal();
    }
});

//Registration buttons disable other options when checked, able when unchecked.  Also, add/subtract from total costs
registerButton1.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    registerButton3.disabled = true;
    registerButton5.disabled = true;
    value += 100
    calcTotal();
  } else {
    registerButton3.disabled = false;
    registerButton5.disabled = false;
    value -= 100
    calcTotal();
      }
});

registerButton2.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    registerButton4.disabled = true;
    registerButton6.disabled = true;
    value += 100
    calcTotal();
  } else {
    registerButton4.disabled = false;
    registerButton6.disabled = false;
    value -= 100
    calcTotal();
      }
});

registerButton3.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    registerButton1.disabled = true;
    registerButton5.disabled = true;
    value += 100
    calcTotal();
  } else {
    registerButton1.disabled = false;
    registerButton5.disabled = false;
    value -= 100
    calcTotal();
      }
});

registerButton4.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    registerButton2.disabled = true;
    registerButton6.disabled = true;
    value += 100
    calcTotal();
  } else {
    registerButton2.disabled = false;
    registerButton6.disabled = false;
    value -= 100
    calcTotal();
      }
});

registerButton5.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    registerButton1.disabled = true;
    registerButton3.disabled = true;
    value += 100
    calcTotal();
  } else {
    registerButton1.disabled = false;
    registerButton3.disabled = false;
    value -= 100
    calcTotal();
      }
});

registerButton6.addEventListener('change', (e) => {
  let isChecked = e.target.checked;
  if(isChecked) {
    registerButton2.disabled = true;
    registerButton4.disabled = true;
    value += 100
    calcTotal();
  } else {
    registerButton2.disabled = false;
    registerButton4.disabled = false;
    value -= 100
    calcTotal();
      }
});

//Makes creditcard default payment displayed
function defaultPayment (index){
  paymentType.selectedIndex = index
  bitcoin.style.display = 'none';
  paypal.style.display = 'none';
  selectPayment.disabled = true;
}

//Shows/hides payment info depending on option selected
const payment = function (){
  let clickedPayment = paymentType.options[paymentType.selectedIndex];
  if (clickedPayment.value == 'credit card'){
    creditCard.style.display = 'block';
    bitcoin.style.display = 'none';
    paypal.style.display = 'none';
  }
  if (clickedPayment.value == 'paypal'){
    creditCard.style.display = 'none';
    bitcoin.style.display = 'none';
    paypal.style.display = 'block';
  }
  if (clickedPayment.value == 'bitcoin'){
    creditCard.style.display = 'none';
    bitcoin.style.display = 'block';
    paypal.style.display = 'none';
  }
}

paymentType.addEventListener('change', payment);

//Called functions on pageload
appendTotal();
calcTotal();
addAttributes();
defaultPayment(1);
