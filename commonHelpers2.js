import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-9808d4ac.js";const t=document.querySelector(".form");console.dir(t);const n=e=>{e.preventDefault();const o=e.target.elements.delay.value;return new Promise((a,m)=>{setTimeout(()=>{e.target.elements.state.value==="fulfilled"?(i.message=`Fulfilled promise in ${o}ms`,a(s.success(i))):(r.message=`Rejected promise in ${o}ms`,m(s.error(r)))},o)})};t.addEventListener("submit",n);const i={messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#59a10d",theme:"dark",iconColor:"#fafafb",iconUrl:"../img/bi_check2-circle.png",maxWidth:"383px",close:!0,closeOnEscape:!0,closeOnClick:!0,position:"topRight"},r={messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",theme:"dark",iconColor:"#fafafb",iconUrl:"../img/bi_x-octagon.png",maxWidth:"302px",close:!0,closeOnEscape:!0,closeOnClick:!0,position:"topRight"};
//# sourceMappingURL=commonHelpers2.js.map
