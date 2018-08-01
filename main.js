const nameInput = document.getElementById('name');
const selectJobRole = document.getElementById('title');
const emailInput = document.getElementById('mail');
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
const checkbox = document.querySelectorAll('#registration legend')[0];
const nameLabel = document.querySelectorAll('fieldset label')[0];
const emailLabel = document.querySelectorAll('fieldset label')[1];
const cardNumber = document.getElementsByClassName('col-6 col')[0];
const paypal = document.querySelectorAll('div p')[0];
const bitcoin = document.querySelectorAll('div p')[1];
const creditCard = document.getElementById('credit-card');
const activities = document.getElementById('registration');
const totalLabel = document.createElement('label');
const paymentType = document.getElementById('payment');
const selectPayment = document.querySelectorAll('#payment option')[0];
const button = document.getElementsByTagName('button')[0];
const ccNumber = document.getElementById('cc-num');
const zipNumber = document.getElementById('zip');
const cvvNumber = document.getElementById('cvv');
const fieldSet = document.getElementsByTagName('fieldset')[0];
var value = 0;


//Dynamically appends "Total:" label to page
function appendTotal (){
  activities.appendChild(totalLabel);
}

//Adds text and value to "Total:" label
function calcTotal (){
  totalLabel.innerHTML = 'Total: $' + value;
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

//Appends error messages if none are present
function error(parent, defaultSiblings, trueFalse) {
  if (parent.children.length == defaultSiblings){
    let error = document.createElement('h5');
    error.innerHTML = "*Required";
    error.setAttribute('class', 'error');
    parent.appendChild(error);
    if (trueFalse){
      error.innerHTML = "*Must select at least one event";
    }
  }
}

//Removes error message if present
function removeError(parent, defaultSiblings) {
  if (parent.children.length == defaultSiblings){
    let error = parent.getElementsByTagName('h5')[0];
    parent.removeChild(error);
  }
}

paymentType.addEventListener('change', payment);

//Controls error messages for name, email, activities
function errorMessages (buttonFunction, ifStatement, errorPar, errorDefSib, trueFalse){
  if (ifStatement){
    buttonFunction.preventDefault();
      if (trueFalse){
        error(errorPar, errorDefSib, true);
      } else {
        error(errorPar, errorDefSib);
      }
  } else {removeError(errorPar, (errorDefSib + 1))}
}


//Adds error border for CC, zip, and CVV
function errorBorder (buttonFunction, payment, input, firstArg, secondArg){
  if (payment.style.display !== 'none'
      && (isNaN(input.value.replace(/ +/g, '')) == true
      ||  firstArg
      ||  secondArg)) {
        buttonFunction.preventDefault();
        input.style.borderColor = 'red';
  } else {input.style.borderColor = '';}
}

//Checks to see if input fields are input incorrectly
button.addEventListener('click', (e) => {
  let less13 = ccNumber.value.replace(/ +/g, '').length < 13;
  let great16 = ccNumber.value.replace(/ +/g, '').length > 16;
  let not5 = zipNumber.value.replace(/ +/g, '').length !==5;
  let not3 = cvvNumber.value.replace(/ +/g, '').length !==3;
  let nameIf = nameInput.value == false;
  let emailIf = emailInput.value.includes('@') == false || emailInput.value.includes('.') == false;
  let regButtonIf = registerButton0.checked == false
      && registerButton1.checked == false
      && registerButton2.checked == false
      && registerButton3.checked == false
      && registerButton4.checked == false
      && registerButton5.checked == false
      && registerButton6.checked == false;
  errorMessages(e, nameIf, nameLabel, 0);
  errorMessages(e, emailIf, emailLabel, 0);
  errorMessages(e, regButtonIf, checkbox, 0, true)
  errorBorder(e, creditCard, ccNumber, less13, great16);
  errorBorder(e, creditCard, zipNumber, not5);
  errorBorder(e, creditCard, cvvNumber, not3);
});

//Called functions on pageload
appendTotal();
calcTotal();
addAttributes();
defaultPayment(1);
