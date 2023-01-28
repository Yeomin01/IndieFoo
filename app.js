const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#fffff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/* sm image slider start */
'use strict'

let imgWrapper = document.querySelectorAll('.img-wrapper'),
    i = 0

function showSlide() {
  if(i >= imgWrapper.length) {
    i = 0
    for(let i = 0; i < imgWrapper.length; i++) {
      imgWrapper[i].style.left = '100%'
      imgWrapper[i].style.transition = '0s'
    }
  }

  setTimeout(function() {
     for(let i = 0; i < imgWrapper.length; i++) {
      imgWrapper[i].style.transition = '2s'
    }
      imgWrapper[i - 1].style.left = '0' 
  }, 1)
  setTimeout(function() {
      imgWrapper[i - 1].style.left = '-100%'
  }, 4000)
  setTimeout(showSlide, 4000)
  i++
}
showSlide()


/* sm image slider end */