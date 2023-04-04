const toggleMenu = document.querySelector('nav .toggle-menu');
const navMenu = document.querySelector('nav .nav-menu');

toggleMenu.addEventListener('click', function () {
	navMenu.classList.toggle('show');

	if(navMenu.classList.contains('show')) {
		toggleMenu.classList.replace('bx-menu', 'bx-x');
	} else {
		toggleMenu.classList.replace('bx-x', 'bx-menu');
	}
})


let slidePerPage = 3;

if(window.innerWidth < 576) {
	slidePerPage = 1;
} else if(window.innerWidth < 768) {
	slidePerPage = 2;
}

let swiper = new Swiper('.swiper', {
  slidesPerView: slidePerPage,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
