import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const n=document.getElementsByName("state"),r=document.querySelector("form");let t;const a=()=>{event.preventDefault();const o=event.target;return t=Math.round(o.elements.delay.value.trim()),console.log(t),new Promise((e,s)=>{setTimeout(()=>{n[0].checked?e(`Fulfilled promise in ${t}ms`):n[1].checked&&s(`❌ Rejected promise in ${t}ms`)},Math.floor(t))})};r.addEventListener("submit",o=>{a().then(e=>i.show({title:"OK",titleColor:"white",iconUrl:"../img/bi_check2-circle.svg",iconText:"OK",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(89, 161, 13, 1)",message:`${e}`})).catch(e=>i.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:`${e}`}))});
//# sourceMappingURL=commonHelpers2.js.map
