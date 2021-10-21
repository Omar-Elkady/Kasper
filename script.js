var images = [
	
	"img/x11.jpeg",
	"img/cover.jpeg",
	"img/x.jpeg",
	"img/x1.jpeg",
	"img/x2.jpeg",
	"img/x3.jpeg",
	"img/x4.jpeg",
	"img/x5.jpeg",
	"img/x6.jpeg",
	"img/x7.jpeg",
	"img/x8.jpeg",
	"img/x9.jpeg",
	"img/x10.jpeg",
	
];

var num =0;
function few(){
var slider=document.getElementById("slide");
num++;
if(num>=images.length){
	num=0;
	}
	 slider.style.backgroundImage=images[num];
	slider.src=images[num];
}

function few1(){
var slider=document.getElementById("slide");
num--;
if(num<0){
	num=images.length-1;
	}
	//slider.style.backgroundImage=url(images[num]);
	slider.style.backgroundImage=images[num];
	slider.src=images[num];
} 

function x1(){

	$(function(){
		$(".img-container").css({"display":"flex"});
		$(".portfolio .shuffle li.active").css({"background-color":" var(--main-color)","color": "white"});
		$("#x2").css({"display":"flex"});
	});
}

function x2(){

	$(function(){
		$(".img-container").css({"display":"none"});
		$(".img-container1").css({"display":"flex"});
		$(".portfolio .shuffle li").css({"background-color":" var(--main-color)","color": "white"});
		$("p").addClass("custom").css()
	});
}

