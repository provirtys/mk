$(document).ready(function() {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.actorsgroup').click(function(event){
		$(this).addClass('selected');
		$(this).css({'color':'white','font-weight':'900'});
		$('.actorsgroup').addClass('selected');
		$('.creatorsgroup').not(this).removeClass('selected');
		$('.people__titles span').not(this).css('color','grey');
	});
	$('.creatorsgroup').click(function(event){
		$(this).addClass('selected');
		$(this).css({'color':'white','font-weight':'900'});
		$('.creatorsgroup').addClass('selected');
		$('.actorsgroup').not(this).removeClass('selected');
		$('.people__titles span').not(this).css('color','grey');
	});
	if($(window).width()<=576){
		$('.news__row-container').addClass('slider');
		$('.slider>div:first-child').addClass('selected');
		$('.news__arrow').addClass('selected');
	}
	else if($(window).width()>576){
		$('.news__row-container').removeClass('slider');
		$('.news__arrow').removeClass('disable');
	}

	
	$(window).resize(function(){
		if(($(window).width()<=576)&& (!$('.news__row-container').hasClass('slider'))){
			$('.news__row-container').addClass('slider');
			$('.slider>div:first-child').addClass('selected');
			$('.news__arrow').addClass('selected');
		}
		else if($(window).width()>576){
			$('.news__row-container').removeClass('slider');
			$('.news *').removeClass('selected');
			$('.news__arrow').removeClass('disable');
		}
		});

	$('.news__arrow').click(function (event) {
		if($('.news__arrow').hasClass('backward')){
			$('.news__item.selected').prev().addClass('selected');
			$('.news__item.selected:last').removeClass('selected');
			if($('.news__item:first').hasClass('selected')){
				$('.news__arrow').removeClass('backward');
			}
		}
		else{
			$('.selected').next().addClass('selected');
			$('.slider .news__item.selected:first').removeClass('selected');
			if($('.news__arrow').prev().hasClass('selected')){
				$(this).addClass('backward');
			}
		}
	});
});

//модальные окна 
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		document.querySelector('.video').setAttribute('src','https://www.youtube.com/embed/s8J-22E6mpk');
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
		document.body.classList.add('lock');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		document.querySelector('.video').setAttribute('src','');
		document.body.classList.remove('lock');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});