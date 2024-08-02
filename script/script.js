document.querySelector('footer').style.height = document.querySelector('header').offsetHeight+'px';
document.querySelector('header').style.height = document.querySelector('footer').offsetHeight+'px';
document.querySelector('header').style.fontSize = document.querySelector('header').offsetHeight/3+'px';
document.querySelector('main').style.paddingTop = document.querySelector('header').offsetHeight+'px';
document.querySelector('.slider').style.height = document.querySelector('.slider').offsetWidth/3+'px';
document.querySelectorAll('footer svg').forEach(function(element){
    element.style.width = document.querySelector('header').offsetHeight/4+'px';
    element.style.height = document.querySelector('header').offsetHeight/4+'px';
    element.style.padding = document.querySelector('header').offsetHeight/8+'px';
});
document.querySelectorAll('.slider .banner').forEach(function(element){
    element.style.width = document.querySelector('.slider').offsetWidth+'px';
    element.style.height = element.offsetWidth/3+'px';
});
// window.onresize = function(){location.reload()};
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
    arrows:false,
    pauseOnFocus:false,
    pauseOnHover:false,
});