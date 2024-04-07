import{i as d}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const p="https://pixabay.com/api/",h="43264129-0a20e73c7f6f9c0a58d1fd1ca",g=document.querySelector("form"),y=document.querySelector(".gallery");g.addEventListener("submit",b);function b(i){i.preventDefault();const o=i.target,s=o.elements.imgName.value;if(console.log(s),s===""){d.show({message:" Field must be filled! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}const l=new URLSearchParams({key:h,q:`${s}`,imege_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e.hits),y.insertAdjacentHTML("beforeend",t(e.hits))}).catch(e=>console.log("catch",e)).finally(()=>o.reset());function t(e){return e.map(({webformatURL:r,largeImageURL:c,tags:n,likes:a,views:u,comments:f,downloads:m})=>`<li class="gallery-item">
<a class="gallery-link" href=${c}>
   <img 
   class="gallery-image" 
  src="${r}" 
  alt="${n}"/>
 <ul class="box-list">
   <li>
    <h2 class="box-title">Likes</h2>
     <p class="box-text">${a}</p>
     </li>
    <li>
    <h2 class="box-title">Views</h2>
    <p class="box-text">${u}</p>
    </li>
    <li class="box-item">
    <h2 class="box-title">Comments</h2>
    <p class="box-text">${f}</p>
    </li>
    <li class="box-item">
    <h2 class="box-title">Downloads</h2>
    <p class="box-text">${m}</p>
    </li>
    </ul>
    </a>
    </li>`).join("")}}
//# sourceMappingURL=commonHelpers.js.map
