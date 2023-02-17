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
		menu_colorl.classList.add('active');
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
let imageAnim = document.getElementById("image-animate");

let imageArray = [
  "https://cdn.pixabay.com/photo/2022/09/04/20/11/plane-7432680_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/11/04/13/43/texture-2917553_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/07/20/18/44/reading-7334749_960_720.png"
]

let imageIndex = 0;

const startImage = () =>{
  imageAnim.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

setInterval(startImage,1000);

/* sm image slider end */