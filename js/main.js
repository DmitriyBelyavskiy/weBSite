$(function(){
    $(".top__menu a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		
			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});
    $('.blog__slider').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next">  <img src="images/arrowright.svg" alt=""></button>',
        responsive:[
            {
            breakpoint:769,
            settings:{
            arrows:false,
            }
        }]
    });
    $('.menu__btn, .top__items a').on('click',function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
        


    });    
    var mixer = mixitup('.portfolio__galery');

});