let navigation = $('nav');
$('.hamburger_icon').click(function(evt){
	navigation.toggleClass('open');
});

$('.items > a, main').click(function(){
	navigation.addClass('open');
});