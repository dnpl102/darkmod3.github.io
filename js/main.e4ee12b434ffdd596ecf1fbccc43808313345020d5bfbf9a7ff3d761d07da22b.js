"use strict";(()=>{var n=document.documentElement;function a(){n.setAttribute("data-mode","dark")}function l(){n.setAttribute("data-mode","light")}var s=localStorage.getItem("mode"),i=window.matchMedia("(prefers-color-scheme: dark)"),h=window.matchMedia("(prefers-color-scheme: light)");s==="dark"?a():s==="light"?l():i.matches?a():h.matches&&l();function m(){let o=n.getAttribute("data-mode"),c=localStorage.getItem("darkAccent"),r=localStorage.getItem("lightAccent"),e;return o==="dark"?c===null?e="#1dbc91":e=c:r===null?e="#1f676b":e=r,e}var d=m(),u=n.style;u.setProperty("--accent",d);var g=document.querySelector("meta[name=theme-color]");g.setAttribute("content",d);document.addEventListener("DOMContentLoaded",function(){let o=document.querySelector("footer input");function c(){let t=m();u.setProperty("--accent",t),o.value=t,g.setAttribute("content",t)}o.onchange=function(){let t=o.value;u.setProperty("--accent",t),n.getAttribute("data-mode")==="dark"?localStorage.setItem("darkAccent",t):localStorage.setItem("lightAccent",t),c()},o.value=d;function r(){document.body.style.transition=document.querySelector("header").style.transition=document.querySelector("footer").style.transition="background-color .3s ease, color .3s ease"}function e(){r(),n.getAttribute("data-mode")==="light"?(a(),localStorage.setItem("mode","dark")):(l(),localStorage.setItem("mode","light")),c()}function f(){r(),i.matches?a():l(),c(),s!==null&&localStorage.removeItem("mode")}i.addEventListener("change",f),document.querySelector("footer button").addEventListener("click",e)});})();
