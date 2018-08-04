const nameInput = document.getElementById('name');
const selectJobRole = document.getElementById('title');
const emailInput = document.getElementById('mail');
const otherTitleInput = document.getElementById('other-title');
const colorSelect = document.getElementById('colors-js-puns');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const designAll = document.querySelectorAll('#color option');
const registerButton = document.querySelectorAll('#registration label input');
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
const paymentArray = ["credit card", "paypal", "bitcoin"];
const errors = ["Name required", "Please enter first and last name", "Must select at least one event", "Must be valid email format"];
var value = 0;

//Hides color option on page load
function hideColor (){
  colorSelect.style.display = 'none';
};

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
//Shows color label and menu only if design is selected
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
      colorSelect.style.display = 'none';
  } else {
      colorSelect.style.display = 'block';
  }
};

//Event listener for Job Role Dropdown
selectJobRole.addEventListener('change', showOther);

//Event listener for shirt design drop down
shirtDesign.addEventListener('change', showColorOptions);


//Checks if input 0 is checked, adjusts costs
function isChecked0 (buttonFunction, valueAdjust){
  let isChecked = buttonFunction.target.checked;
  if(isChecked) {
    value += valueAdjust
    calcTotal();
  } else {
    value -= valueAdjust
    calcTotal();
      }
}

//Checks if inputs 1-4 are checked, adjusts costs
function isChecked (buttonFunction, valueAdjust, bNum1){
  let isChecked = buttonFunction.target.checked;
  if(isChecked) {
    registerButton[bNum1].disabled = true;
    value += valueAdjust
    calcTotal();
  } else {
    registerButton[bNum1].disabled = false;
    value -= valueAdjust
    calcTotal();
      }
}

//Checks if inputs 5 nad 6 are checked, adjusts costs
function isChecked2 (buttonFunction, valueAdjust){
  let isChecked = buttonFunction.target.checked;
  if(isChecked) {
    value += valueAdjust
    calcTotal();
  } else {
    value -= valueAdjust
    calcTotal();
      }
}

//Registration buttons disable other options when checked, able when unchecked.  Also, add/subtract from total costs
registerButton[0].addEventListener('change', (e) =>{
  isChecked0(e, 200,);
});

registerButton[1].addEventListener('change', (e) =>{
  isChecked(e, 100, 3);
});

registerButton[2].addEventListener('change', (e) =>{
  isChecked(e, 100, 4);
});

registerButton[3].addEventListener('change', (e) =>{
  isChecked(e, 100, 1);
});

registerButton[4].addEventListener('change', (e) =>{
  isChecked(e, 100, 2);
});

registerButton[5].addEventListener('change', (e) =>{
  isChecked2(e, 100);
});

registerButton[6].addEventListener('change', (e) =>{
  isChecked2(e, 100);
});

//Makes creditcard default payment displayed
function defaultPayment (index){
  paymentType.selectedIndex = index
  bitcoin.style.display = 'none';
  paypal.style.display = 'none';
  selectPayment.disabled = true;
}

//Displays correct payment info depending on which selection is made
function payment (input1, input2, input3, input4){
  let clickedPayment = paymentType.options[paymentType.selectedIndex];
  if (clickedPayment.value == input1){
    input2.style.display = 'block';
    input3.style.display = 'none';
    input4.style.display = 'none';
  }
}

//Event listener for payment type drop down
paymentType.addEventListener('change', (e) => {
  payment (paymentArray[0], creditCard, bitcoin, paypal);
  payment (paymentArray[1], paypal, creditCard, bitcoin);
  payment (paymentArray[2], bitcoin, paypal, creditCard);

});

//Appends error messages if none are present
function error(parent, defaultSiblings, errorText) {
  if (parent.children.length == defaultSiblings){
    let error = document.createElement('h5');
    error.innerHTML = errorText;
    error.setAttribute('class', 'error');
    parent.appendChild(error);
  }
}

//Removes error message if present
function removeError(parent, defaultSiblings) {
  if (parent.children.length == defaultSiblings){
    let error = parent.getElementsByTagName('h5')[0];
    parent.removeChild(error);
  }
}

//Controls error messages for name, email, activities
function errorMessages (buttonFunction, ifStatement, errorPar, errorDefSib, errorText){
  if (ifStatement){
    buttonFunction.preventDefault();
        error(errorPar, errorDefSib, errorText);
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

//Checks to see if credit card number is input corectly and provides live feedback
ccNumber.addEventListener('keyup', (e) => {
  let less13 = ccNumber.value.replace(/ +/g, '').length < 13;
  let great16 = ccNumber.value.replace(/ +/g, '').length > 16;
  errorBorder(e, creditCard, ccNumber, less13, great16);
});

//Checks to see if zip number is input corectly and provides live feedback
zipNumber.addEventListener('keyup', (e) => {
  let not5 = zipNumber.value.replace(/ +/g, '').length !==5;
  errorBorder(e, creditCard, zipNumber, not5);
});

//Checks to see if zip number is input corectly and provides live feedback
cvvNumber.addEventListener('keyup', (e) => {
  let not3 = cvvNumber.value.replace(/ +/g, '').length !==3;
  errorBorder(e, creditCard, cvvNumber, not3);
});

//Checks to see if name, email, and registration input fields are input incorrectly
button.addEventListener('click', (e) => {
  let less13 = ccNumber.value.replace(/ +/g, '').length < 13;
  let great16 = ccNumber.value.replace(/ +/g, '').length > 16;
  let not5 = zipNumber.value.replace(/ +/g, '').length !==5;
  let not3 = cvvNumber.value.replace(/ +/g, '').length !==3;
  let nameIf = nameInput.value == false;
  let noSpace = nameInput.value !== false && nameInput.value.includes(' ') == false;
  let emailIf = emailInput.value.includes('@') == false || emailInput.value.includes('.') == false;
  let regButtonIf = document.querySelectorAll('input:checked').length === 0;
  errorMessages(e, nameIf, nameLabel, 0, errors[0]);
  errorMessages(e, emailIf, emailLabel, 0, errors[3]);
  errorMessages(e, regButtonIf, checkbox, 0, errors[2])
  errorMessages(e, noSpace, nameLabel, 0, errors[1]);
  errorBorder(e, creditCard, ccNumber, less13, great16);
  errorBorder(e, creditCard, zipNumber, not5);
  errorBorder(e, creditCard, cvvNumber, not3);
});

//Provides realtime error message on email input
emailInput.addEventListener('keyup', (e)=>{
  let emailIf = emailInput.value.includes('@') == false || emailInput.value.includes('.') == false;
  errorMessages(e, emailIf, emailLabel, 0, errors[3]);
});

//Called functions on pageload
hideColor();
appendTotal();
calcTotal();
addAttributes();
defaultPayment(1);
