$(".slider").slick({
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
// window.onresize = function(){location.reload()};
// let local = {};
// if(!localStorage.hasOwnProperty("local")){localStorage.setItem("local",JSON.stringify(local));};
// local = JSON.parse(localStorage.getItem("local"));