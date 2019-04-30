let anchorSelector = document.querySelectorAll('.homeheader a');

anchorSelector.forEach(a => a.addEventListener('mouseover', 
(e) => {
    e.target.style.color = 'white';
}));

let anchorSelectorAlert = [];
anchorSelectorAlert.push(anchorSelector[2]);
anchorSelectorAlert.push(anchorSelector[3]);
anchorSelectorAlert.push(anchorSelector[4]);
console.log(anchorSelectorAlert);
anchorSelectorAlert.map(a => {
    a.addEventListener('click', e => alert('You do not have permission to access this part of the site.  Boolean thunder error 55-63d.  Contact adminstration for further assistance.'))
})

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


class PlaceButton {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;
        this.placeData = this.buttonElement.dataset.place;

        if (this.placeData === 'all') {
            this.maps = document.querySelectorAll('.map');
        } else {
            this.maps = document.querySelectorAll(`.map[data-place='${this.placeData}']`);
        }
        
        this.maps = Array.from(this.maps).map(map => new PlaceMap(map));
        this.buttonElement.addEventListener('click', this.handleClick.bind(this));
    }
        handleClick() {
            const buttons = document.querySelectorAll('.button');
            buttons.forEach(button => button.classList.remove('active-button'));
            const maps = document.querySelectorAll('.map');
            maps.forEach(map => map.style.display = 'none');
            this.buttonElement.classList.add('active-button');
            this.maps.forEach(map => map.selectMap());
        }

}

class PlaceMap {
    constructor(mapElement) {
        this.mapElement = mapElement;
    }
    selectMap() {
        this.mapElement.style.display = 'flex';
    }
}



let buttonSelector = document.querySelectorAll('.button');
buttonSelector.forEach(button => new PlaceButton(button));























