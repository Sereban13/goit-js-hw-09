const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;let o;function r(){return n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,n.style.backgroundColor}t.addEventListener("click",(function(){o=setInterval(r,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2475b67b.js.map