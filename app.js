const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_color = document.querySelector('.header .nav-bar .nav-list ul a');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		// header.style.backgroundColor = ' rgba(255,255,255, 0.5)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
    menu_item.classList.toggle('active');
	});
});
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  var screen_width = window.innerWidth;
  var elemnet = document.getElementsByClassName('menu_list');

  console.log(screen_width); //브라우저 너비가 1200 이상일 때만 메뉴바 색 변경 적용
  if(screen_width>=1200){

    if ( scroll_position > 700 ) {
      header.style.backgroundColor = 'rgba(252, 112, 50)';
    }
    else {
      header.style.backgroundColor = 'transparent';
    }
}
});  
