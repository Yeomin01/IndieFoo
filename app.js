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
		header.style.backgroundColor = '#29323c';
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

// langauge
const lang = {
	en: {
	  매뉴: "Menu",
	  berlin: "Berlin",
	  intro: "Introduction",
	  intro_txt:
		"Luna is a foodie, film lover studying to become a useful developer. 2021 new year's resolution is to run regularly and polish on rusty piano skill. she majored in food science and worked as UX designer at K7music for a year and half.",
	  title: "My Skills",
	  content:
		"Luna is motivated to make software that improves people's life by combining the art of programming and intuitive design.",
	  now_sys_lang: "EN",
	  skill_a: "Proficiency with web markup and design, including HTML5, CSS3",
	  skill_b:
		"Has solid working knowledge of server-side CSS pre-processing, such as LESS and SASS",
	  skill_c: "Has basic understanding of client-side scripting and JavaScript",
	  skill_d:
		"Experience with a variety of JS frameworks including React and Angular",
	  contactme: "Feel free to contact me for your next project",
	  portfolio: "Portfolio",
	},
	ko: {
	  seoul: "서울",
	  berlin: "베를린",
	  intro: "자기소개",
	  intro_txt:
		"맛있는 것과 재미있는 영화를 가장 좋아하는 30대 학생입니다. 올해에는 규칙적인 조깅과 피아노 실력향상을 목표로 하고있습니다. 식품영양을 전공했고 국비지원 자바 프론트엔드 과정을 들은 뒤에 독일의 인디음악회사에서 UX디자이너로 1년반정도 일했습니다. 앞으로 4개월간 잘 부탁드립니다!",
	  title: "스킬",
	  content:
		"사람들의 삶을 개선할 수 있는 소프트웨어를 만들고 싶습니다. 언어교육에 관심있습니다.",
	  now_sys_lang: "KO",
	  skill_a: "HTML, CSS를 포함한 웹디자인과 마크업에 능숙합니다",
	  skill_b: "SCSS, LESS등 CSS전처리기를 이용해서 일한 경험이 있습니다",
	  skill_c:
		"클라이언트측 스크립트 언어에 대한 지식이 있고 기본적인 자바스크립트를 활용할 수 있습니다",
	  skill_d:
		"React, Angular 프레임워크로 서비스를 제공하는 환경에서 일했습니다",
	  contactme: "궁금한 점이 있으면 언제든지 연락주세요",
	  portfolio: "포트폴리오",
	},
  };
  
  // 아래부분 4가지는 복사해다 붙여넣기 했는데 무슨 뜻인지 아직 잘 모르겠다.
  // 현재 브라우저의 언어 가져오기
  function getLanguage() {
	return navigator.language || navigator.userLanguage;
  }
  
  // 언어별 적용
  function init(localeStr) {
	document.getElementById("locale").textContent = localeStr;
  }
  
  // 초기 작업
  const currentLang = getLanguage();
  init(currentLang);
  render(currentLang.substr(0, 2));
  
  // 언어별 렌더링
  function render(locale) {
	const $lang = document.querySelectorAll("[data-lang]");
	$lang.forEach((el) => {
	  const code = el.dataset.lang;
	  el.textContent = lang[locale][code];
	});
  }
  
  // 버튼 이벤트
  document.getElementById("btn-en").addEventListener("click", (e) => {
	render("en");
  });
  document.getElementById("btn-ko").addEventListener("click", (e) => {
	render("ko");
  });

  
  // 버튼 활성화 - 비활성화일 때 클릭하면 활성화
  $(".nav-lang").on("click", function () {
  // nav-lang 클래스가 클릭되면 함수실행
	$(".nav-lang").removeClass("active");
	// nav-lang 클래스 모두(버튼3개)에서 active 클래스 삭제 
	$(this).addClass("active");
	// 클릭된 버튼 클래스에 active클래스 추가
  });
