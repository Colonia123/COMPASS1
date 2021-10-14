//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    stepsOrientation: "vertical",
    titleTemplate: '<span class="number">#index#</span>'
});

let actions = document.querySelector('.actions')
let overlay = document.querySelector('.overlay')

actions.style.display = 'none';

$(actions).on('change', function(e) {
  console.log('things changed')
});

$('.purpose-radio-input.covid').on('change', function(e) {
  console.log('clicked!')
  if(e.target.value === 'yes') {
    window.location.replace = 'https://columbus.applyforhope.com/cols_era_bspc#/'
    overlay.style.display = 'block';
  }
  else if(e.target.value === 'no') {
    actions.style.display = 'block';
  }
});

$('.purpose-radio-input.returning').on('change', function(e) {
  overlay.style.display = 'block';
  if(e.target.value === 'yes') {
    window.location.replace = 'https://cm2compass.neworg.com/Default.asp?PageNum=105'
  }
  else if(e.target.value === 'no') {
    window.location.replace = 'https://cm2compass.neworg.com/Default.asp?PageNum=94'
  }
});
