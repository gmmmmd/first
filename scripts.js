"use strict";var e=document.querySelector(".button_js"),o=document.querySelector(".popup"),t=document.querySelector(".overlay"),c=document.querySelector(".popup_close"),n=o.querySelector("input");e.addEventListener("click",function(){o.classList.add("popup_open"),t.classList.add("overlay_open"),n.focus()}),c.addEventListener("click",function(){o.classList.remove("popup_open"),t.classList.remove("overlay_open")}),window.addEventListener("keydown",function(e){"Escape"===e.code&&(o.classList.remove("popup_open"),t.classList.remove("overlay_open"))});var e=document.querySelector(".header__mobile-menu_js"),c=document.querySelector(".mobile-header_close_js"),r=document.querySelector(".mobile-header");e.addEventListener("click",function(){r.classList.add("mobile-header_open")}),c.addEventListener("click",function(){r.classList.remove("mobile-header_open")});