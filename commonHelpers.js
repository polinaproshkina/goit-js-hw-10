import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as u,i as m}from"./assets/vendor-77e16229.js";const e=document.querySelector("[data-start]");e.disabled=!0;let r,a=Date.now();const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0],r<a?(m.show({title:"Error",titleColor:"white",iconUrl:"../img/bi_x-octagon.svg",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Please choose a date in the future"}),e.classList.replace("isActive","disabled"),e.disabled=!0):r>=a&&(e.classList.replace("disabled","isActive"),e.disabled=!1)}};u("input#datetime-picker",f);function h(t){const s=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:d,seconds:l}}e.addEventListener("click",p);function p(){const t=setInterval(()=>{const n=Date.now(),i=r-n,o=h(i);i>0&&(document.querySelector("[data-days]").innerHTML=o.days.toString().padStart(2,"0"),document.querySelector("[data-hours]").innerHTML=o.hours.toString().padStart(2,"0"),document.querySelector("[data-minutes]").innerHTML=o.minutes.toString().padStart(2,"0"),document.querySelector("[data-seconds]").innerHTML=o.seconds.toString().padStart(2,"0"),document.querySelector("input#datetime-picker").disabled=!0,e.classList.replace("isActive","disabled"),e.disabled=!0),i<=0&&(clearInterval(t),e.classList.replace("disabled","isActive"),e.disabled=!1,document.querySelector("input#datetime-picker").disabled=!1)},1e3)}
//# sourceMappingURL=commonHelpers.js.map