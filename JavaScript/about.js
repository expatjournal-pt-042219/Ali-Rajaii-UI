
let anchorSelector1 = document.querySelectorAll('.homeheader1 a');

anchorSelector1.forEach(a => a.addEventListener('mouseover', 
(e) => {
    e.target.style.color = 'white';
}));

let anchorSelector1Alert = [];
anchorSelector1Alert.push(anchorSelector1[2]);
anchorSelector1Alert.push(anchorSelector1[3]);
anchorSelector1Alert.push(anchorSelector1[4]);
console.log(anchorSelector1Alert);
anchorSelector1Alert.map(a => {
    a.addEventListener('click', e => alert('You do not have permission to access this part of the site.  Boolean thunder error 55-63d.  Contact adminstration for further assistance.'))
})


let introSelector = document.querySelector('.teamIntro');
introSelector.addEventListener('mouseover', e => e.target.style.color = '#ffd700');

let tableSelector = document.querySelector('.teamTable')
let logo1Selector = document.querySelector('.lambda1');
logo1Selector.addEventListener('mouseover', (e) => {
    tableSelector.style.position = 'absolute';
    TweenMax.to(e.target, 5,{marginRight: 0});
    TweenMax.to(e.target, 5, {marginLeft: 550});
});

logo1Selector.addEventListener('mouseover', (e) => {
    tableSelector.style.position = 'absolute';
    TweenMax.to(e.target, 5, {marginLeft: 0});
    TweenMax.to(e.target, 5, {marginRight: 550});
});

let logo2Selector = document.querySelector('.lambda2');
logo2Selector.addEventListener('mouseover', (e) => {
    tableSelector.style.position = 'absolute';
    TweenMax.to(e.target, 5,{marginLeft: 0});
    TweenMax.to(e.target, 5, {marginRight: 550});
});

logo2Selector.addEventListener('mouseover', (e) => {
    tableSelector.style.position = 'absolute';
    TweenMax.to(e.target, 5, {marginRight: 0});
    TweenMax.to(e.target, 5, {marginLeft: 550});
});