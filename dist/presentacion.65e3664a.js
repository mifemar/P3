document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logo"),t=!1;e.addEventListener("mouseover",()=>{t||(t=!0,function(){let n=0,s=1,r=()=>{n+=5*s,e.style.transform=`translateX(${n}px)`,Math.abs(n)>=5&&(s*=-1),t?setTimeout(r,200):e.style.transform=""};r()}())}),e.addEventListener("mouseout",()=>{t=!1}),document.getElementById("newsletter-form").addEventListener("submit",e=>{alert("¡Muchas gracias por suscribirte a nuestra newsletter!"),document.getElementById("newsletter-form").submit()})});
//# sourceMappingURL=presentacion.65e3664a.js.map
