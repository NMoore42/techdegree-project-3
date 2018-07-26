const selectJobRole = document.getElementById('title');
const otherTitleInput = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const designPuns = document.querySelectorAll('.puns');
const designLove = document.querySelectorAll('.love');
//const registerButtons = document.querySelectorAll('.activities label input')[1];




//Shows other-title only if "Other" is selected in "Job Role" menu
const showOther = function () {
  let clickedJobRole = selectJobRole.options[selectJobRole.selectedIndex].innerHTML;
  if (clickedJobRole == "Other") {
    otherTitleInput.style.display = 'block';
  } else {
      otherTitleInput.style.display = 'none';
  }
};


const showColorOptions = function (){
  let clickedDesign = shirtDesign.options[shirtDesign.selectedIndex].value;
  if (clickedDesign == "js puns"){
    for (i = 0; i < designLove.length; i += 1) {
      designLove[i].style.display = 'none';
    }
    for (i = 0; i < designPuns.length; i += 1) {
      designPuns[i].style.display = 'block';
    }
  }
  if (clickedDesign == "heart js"){
    for (i = 0; i < designLove.length; i += 1) {
      designLove[i].style.display = 'block';
    }
    for (i = 0; i < designPuns.length; i += 1) {
      designPuns[i].style.display = 'none';
    }
  }
};

// const registerCalc = function (){
//   for (let i = 0; i < registerButtons.length; i += 1){
//     registerButtons[i].addEventListener('click', function(){
//       alert( registerButtons[i].index)
//     });
//   }
// }

selectJobRole.addEventListener('click', showOther);
shirtDesign.addEventListener('click', showColorOptions);
//registerButtons.addEventListener('click', registerCalc);
