import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(l){return l.map(({webformatURL:s,largeImageURL:o,tags:r,likes:e,views:t,comments:i,downloads:c})=>`<li class="gallery-item">
<a class="gallery-link" href=${o}>
   <img 
   class="gallery-image" 
  src="${s}" 
  alt="${r}"/>
 <ul class="box-list">
   <li>
    <h2 class="box-title">Likes</h2>
     <p class="box-text">${e}</p>
     </li>
    <li>
    <h2 class="box-title">Views</h2>
    <p class="box-text">${t}</p>
    </li>
    <li class="box-item">
    <h2 class="box-title">Comments</h2>
    <p class="box-text">${i}</p>
    </li>
    <li class="box-item">
    <h2 class="box-title">Downloads</h2>
    <p class="box-text">${c}</p>
    </li>
    </ul>
    </a>
    </li>`).join("")}const f="https://pixabay.com/api/",d="43264129-0a20e73c7f6f9c0a58d1fd1ca";function p(l){const s=new URLSearchParams({key:d,q:`${l}`,imege_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const h=document.querySelector("form"),g=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";h.addEventListener("submit",y);function y(l){l.preventDefault();const s=l.target,o=s.elements.imgName.value;if(console.log(o),o===""){a.show({message:" Field must be filled! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}n.style.display="block",p(o).then(r=>{if(console.log(r.hits),n.style.display="None",r.hits.length===0){a.show({message:" Sorry, there are no images matching your search query. Please try again! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}g.innerHTML=m(r.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(r=>console.log("catch",r)).finally(()=>s.reset())}
//# sourceMappingURL=commonHelpers.js.map
