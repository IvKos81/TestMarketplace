/*ДВОЙНЫЕ СЛАЙДЕРЫ*/

/*PRICE SLIDER*/
var priceSlider = document.getElementById('price-slider');

noUiSlider.create(priceSlider, {
    start: [1000, 5000],
    connect: true,
    tooltips: { to: function(numericValue) {
                    return numericValue.toFixed(0);
                }
              }, 
    range: {
        'min': 0,
        'max': 9999
    }
});

var sliderValues = [
  document.querySelector('.range1'),
  document.querySelector('.range2')
];


priceSlider.noUiSlider.on('update', function (values, handle) {
  sliderValues[handle].innerHTML = Math.floor(values[handle]);
});

/*THC SLIDER*/
var thcSlider = document.getElementById('thc-slider');

noUiSlider.create(thcSlider, {
    start: [0, 65],
    connect: true,
    tooltips: { to: function(numericValue) {
                    return numericValue.toFixed(0);
                }
              }, 
    range: {
        'min': 0,
        'max': 100
    }
});

var sliderThcValues = [
  document.querySelector('.thc__range1'),
  document.querySelector('.thc__range2')
];


thcSlider.noUiSlider.on('update', function (values, handle) {
  sliderThcValues[handle].innerHTML = Math.floor(values[handle]);
});

/*CBD SLIDER*/
var cbdSlider = document.getElementById('cbd-slider');

noUiSlider.create(cbdSlider, {
    start: [0, 65],
    connect: true,
    tooltips: { to: function(numericValue) {
                    return numericValue.toFixed(0);
                }
              }, 
    range: {
        'min': 0,
        'max': 100
    }
});

var sliderCbdValues = [
  document.querySelector('.cbd__range1'),
  document.querySelector('.cbd__range2')
];


cbdSlider.noUiSlider.on('update', function (values, handle) {
  sliderCbdValues[handle].innerHTML = Math.floor(values[handle]);
});

/*Выпадающие списки*/

let classificationList = document.querySelector('.classification__list');
let productionList = document.querySelector('.production__list');
let sizeList = document.querySelector('.size__list');
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');

let handler = function(event) {
  
  if (event.target.classList.contains('classification__list')) {
    if (classificationList.classList.contains('active')) {
      arrow1.style.transform = 'rotate(0deg)';
      classificationList.classList.remove('active');
    } else {
      arrow1.style.transform = 'rotate(180deg)';
      classificationList.classList.add('active');
    }
    
    let li = document.querySelectorAll('.classification__point');
    for (let i=0; i<li.length; i++) {
      if (li[i].classList.contains('hidden')){
        li[i].classList.remove('hidden');
      } else {
        li[i].classList.add('hidden');
      }
    }
  } else if (event.target.classList.contains('production__list')) {
    if (productionList.classList.contains('active')) {
      arrow2.style.transform = 'rotate(0deg)';
      productionList.classList.remove('active');
    } else {
      arrow2.style.transform = 'rotate(180deg)';
      productionList.classList.add('active');
    }

    let li = document.querySelectorAll('.production__point');
    for (let i=0; i<li.length; i++) {
      if (li[i].classList.contains('hidden')){
        li[i].classList.remove('hidden');
      } else {
        li[i].classList.add('hidden');
      }
    }
  }else if (event.target.classList.contains('size__list')) {
    if (sizeList.classList.contains('active')) {
      arrow3.style.transform = 'rotate(0deg)';
      sizeList.classList.remove('active');
    } else {
      arrow3.style.transform = 'rotate(180deg)';
      sizeList.classList.add('active');
    }

    let li = document.querySelectorAll('.size__point');
    for (let i=0; i<li.length; i++) {
      if (li[i].classList.contains('hidden')){
        li[i].classList.remove('hidden');
      } else {
        li[i].classList.add('hidden');
      }
    }
  }
}

classificationList.addEventListener('click', handler);
productionList.addEventListener('click', handler);
sizeList.addEventListener('click', handler);

/*Инпуты и тэги */

let tags = document.querySelectorAll('.tag');

let closeTags = document.querySelectorAll('.close__tag');
console.log(closeTags);

let checkboxList = document.querySelectorAll('.filter__checkbox');
console.log(checkboxList);

for (let j=0; j<20; j++) {

  checkboxList[j].addEventListener('click', function(event){
    console.log(event.target);
    if (checkboxList[j].checked) {
      tags[j].classList.remove('hidden');
    } else {
      tags[j].classList.add('hidden');
    }
  })

  closeTags[j].addEventListener('click', function(event){
    checkboxList[j].checked = false;
    tags[j].classList.add('hidden');
  })
}


/*Панель сортировки*/

let sortList = document.querySelector('.sort__list');
let sortLabel = document.querySelector('.sort__label');

sortHandler = function(event) {
  if (sortLabel.classList.contains('active')) {
    sortList.classList.add('hidden');
    sortLabel.classList.remove('active');
  } else {
      sortList.classList.remove('hidden');
      sortLabel.classList.add('active');
    }
}

sortLabel.addEventListener('click', sortHandler);