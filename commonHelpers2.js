import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */const s=document.querySelector(".feedback-form"),r="feedback-form-state";s.addEventListener("input",n);function n(e){const t=e.currentTarget.elements.email.value.trim(),a=e.currentTarget.elements.message.value.trim();o(r,{email:t,message:a})}s.addEventListener("submit",m);function m(e){e.preventDefault();const t=e.target.elements.email.value.trim(),a=e.target.elements.message.value.trim();if(!t||!a){alert("All form fields must be filled in");return}localStorage.removeItem(r),s.reset()}function o(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function l(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function i(){const e=l(r)||{};s.elements.email.value=e.email||"",s.elements.message.value=e.message||""}i();
//# sourceMappingURL=commonHelpers2.js.map
