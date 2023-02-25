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
		header.style.backgroundColor = ' rgba(255,255,255, 0.5)';
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

const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

/*메뉴 클릭 시 색 변화 유지 */