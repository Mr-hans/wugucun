/*
 *	REM layout, design diagram size 750px
 * */
(function(d,c){var e=d.documentElement,b="orientationchange" in window?"orientationchange":"resize",a=function(){var f=e.clientWidth;if(!f){return}if(f>=750){e.style.fontSize="100px"}else{e.style.fontSize=100*(f/750)+"px"}};if(!d.addEventListener){return}c.addEventListener(b,a,false);d.addEventListener("DOMContentLoaded",a,false)})(document,window);