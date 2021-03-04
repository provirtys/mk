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
			$('*').removeClass('selected');
			$('.news__arrow').removeClass('disable');
		}
		});

	$('.news__arrow').click(function (event) {
		$('.selected').next().addClass('selected');
		$('.slider .news__item.selected:first').removeClass('selected');
		if($('.news__arrow').prev().hasClass('selected')){
			$(this).addClass('disable');
		}
	});
});

