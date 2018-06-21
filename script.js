let navigation = $('nav');
$('.hamburger_icon').click(function(evt){
	navigation.toggleClass('open');
});

$('main').click(function(){
	navigation.addClass('open');
});