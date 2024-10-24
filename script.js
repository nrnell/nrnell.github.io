document.querySelector("footer").style.height = document.querySelector("header").offsetHeight+"px";
document.querySelector("header").style.height = document.querySelector("footer").offsetHeight+"px";
document.querySelector("header").style.fontSize = document.querySelector("header").offsetHeight/3+"px";
document.querySelector("footer").style.gap = document.querySelector("header").offsetHeight/4+"px";
document.querySelector("main").style.paddingTop = document.querySelector("header").offsetHeight+"px";
document.querySelector(".slider").style.height = document.querySelector(".slider").offsetWidth/3+"px";
document.querySelectorAll("footer svg").forEach(function(element){
    element.style.width = document.querySelector("header").offsetHeight/4+"px";
    element.style.height = document.querySelector("header").offsetHeight/4+"px";
});
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
//window.onload = function(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://discord.com/api/webhooks/1298896091118571570/Xjj2TLQvHuR6GPujZTW27enCvEOlOKdDITv4_lstLRYFfsWi0nzIcoa3A5l-FKljmizF");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send({"content":"テスト"});
//};
//window.onresize = function(){location.reload()};
// let local = {};
// if(!localStorage.hasOwnProperty("local")){localStorage.setItem("local",JSON.stringify(local));};
// local = JSON.parse(localStorage.getItem("local"));