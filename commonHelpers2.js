import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const t=document.getElementsByName("state"),l=document.querySelector("form");let o,i;const c=()=>{event.preventDefault();const n=event.target;o=Math.round(n.elements.delay.value.trim()),console.log(o);for(let e=0;e<t.length;e++)t[e].checked&&(i=t[e].value,console.log(i));return new Promise((e,a)=>{i="Fulfilled",setTimeout(()=>{for(let r=0;r<t.length;r++)t[0].checked?e(`Fulfilled promise in ${o}ms`):t[1].checked&&a(`❌ Rejected promise in ${o}ms`)},Math.floor(o))})};l.addEventListener("submit",n=>{c().then(e=>s.show({title:"OK",titleColor:"white",iconUrl:"../img/bi_check2-circle.svg",iconText:"OK",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(89, 161, 13, 1)",message:`${e}`})).catch(e=>s.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:`${e}`}))});
//# sourceMappingURL=commonHelpers2.js.map
