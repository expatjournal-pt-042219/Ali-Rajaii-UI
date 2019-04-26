let anchorSelector = document.querySelectorAll('.homeheader a');

anchorSelector.forEach(a => a.addEventListener('mouseover', 
(e) => {
    e.target.style.color = 'white';
}));

let aboveParaSelector = document.querySelector('.abovepara');
aboveParaSelector.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#060089';
    TweenMax.to(e.target, 5,{marginRight: 0});
    TweenMax.to(e.target, 5, {marginLeft: 550});
    e.target.style.color = 'black';
});

aboveParaSelector.addEventListener('click', (e) => {
    e.target.style.backgroundColor = ' #ffd700';
    TweenMax.to(e.target, 5, {marginLeft: 0});
    TweenMax.to(e.target, 5, {marginRight: 550});
    e.target.style.color = 'purple';
});

let modoSelector = document.querySelector('.modo')
modoSelector.addEventListener('mouseover', (e) => {
    TweenMax.to(e.target, 5,{marginRight: 0});
    TweenMax.to(e.target, 5, {marginLeft: 300});
    
});
modoSelector.addEventListener('click', (e) => {
    TweenMax.to(e.target, 5,{marginLeft: 0});
    TweenMax.to(e.target, 5, {marginRight: 300});
   
});

let midSelector = document.querySelector('.midsect');
midSelector.addEventListener('mouseover', e => e.target.style.color = '#ffd700');

let picparaSelector = document.querySelector('.picpara');
picparaSelector.addEventListener('mouseover', e => e.target.style.cursor = 'pointer');

function sweepstakes () {
let sweepstakesMother = document.querySelector('.picpara p');
let sweepstakesForm = document.createElement('form');
sweepstakesMother.appendChild(sweepstakesForm);
let input = document.createElement('input');
let inputType = document.createAttribute('type');
inputType.value = 'text';
let inputPlaceholder = document.createAttribute('placeholder');
inputPlaceholder.value = 'Enter name and email';
input.setAttributeNode(inputType);
input.setAttributeNode(inputPlaceholder);
sweepstakesForm.appendChild(input);
sweepStakesOnce();
}

function sweepStakesOnce() {
    
    picparaSelector.removeEventListener('click', sweepstakes);
}

picparaSelector.addEventListener('click', sweepstakes)































