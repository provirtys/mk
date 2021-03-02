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
});