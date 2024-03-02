'use strict'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const radioBtn = document.getElementsByName('state');
const inputForm = document.querySelector('form');

let delayValue;
let radioBtnValue;


const makePromise = () => {
    event.preventDefault();
    const form = event.target;
    delayValue = Math.round(form.elements.delay.value.trim());
    console.log(delayValue);

    for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            radioBtnValue = radioBtn[i].value;
            console.log(radioBtnValue);
        }
    }
    return new Promise((resolve, reject) => {
        const canFulfill = radioBtnValue = "Fulfilled";
        setTimeout(() => {
            for (let i = 0; i < radioBtn.length; i++){
                if (radioBtn[0].checked) {
                resolve(`Fulfilled promise in ${delayValue}ms`
)
            }
            else if(radioBtn[1].checked) {
                reject(`❌ Rejected promise in ${delayValue}ms`)
            }
            }
            
        }, Math.floor(delayValue));
    });

};

 inputForm.addEventListener("submit", event => {
     makePromise()
         .then((res) => iziToast.show({
             title: 'OK',
             titleColor: 'white',
             iconUrl: '../img/bi_check2-circle.svg',
             iconText: 'OK',
             transitionIn: 'fadeInLeft',
             transitionOut: 'fadeOutRight',
            position: 'topRight',
            messageColor: 'white',
            backgroundColor: 'rgba(89, 161, 13, 1)',
             message: `${res}`}))
         .catch((res) => iziToast.show({
            transitionIn: 'fadeInLeft',
            transitionOut: 'fadeOutRight',
            position: 'topRight',
            messageColor: 'white',
            backgroundColor: 'rgba(255, 110, 110, 1)',
             message: `${res}`}));
    });







// inputForm.addEventListener('submit',submitForm)

// function submitForm(event) {
//     const radioBtn = document.getElementsByName('state').map((btn) => {
//         return new Promise((res, rej) =>
//             radioBtnValue? res : rej)
//     });
// };

// Promise.allSettled(radioBtn).then(btns => {
//     console.log(btns)

//     values.forEach((btn, i) => {
//         setTimeout(() => {
//             radioBtn[i] = btn.value;
//         }, 2000)
//     });
// });







// function submitForm(event) {
//     new Promise((resolve, reject) => {
//         event.preventDefault();
//         const form = event.target;
//         delayValue = Math.round(form.elements.delay.value.trim());
//         console.log(delayValue);

//         for (let i = 0; i < radioBtn.length; i++) {
//             if (radioBtn[i].checked) {
//                 radioBtnValue = radioBtn[i].value;
//                 console.log(radioBtnValue);
//             }
//         }
//         setTimeout(() => {
//             if (radioBtnValue = "fulfilled") {
//                 resolve(`Fulfilled promise in ${delayValue}ms`)
//             } else {
//                 reject(`Rejected promise in ${delayValue}ms`)
//             }
            
//         }, delayValue);
//     });

//     Promise.then((res) => console.log(`${res}`));
// };


    
// function submitForm(event) {
//         event.preventDefault();
//         const form = event.target;
//         delayValue = Math.round(form.elements.delay.value.trim());
//         console.log(delayValue);

//         for (let i = 0; i < radioBtn.length; i++) {
//             if (radioBtn[i].checked) {
//                 radioBtnValue = radioBtn[i].value;
//                 console.log(radioBtnValue);
//             }
//         }
//     };

// new Promise((resolve,reject) => {
// setTimeout(() => {
//         if (radioBtnValue = "fulfilled") {
//             resolve(`Fulfilled promise in ${delayValue}ms`)
//         } else {
//             reject(`Rejected promise in ${delayValue}ms`)
//         }
        
//     }, delayValue);
// });
