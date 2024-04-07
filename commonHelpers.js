(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const d="https://pixabay.com/api/",h="43264129-0a20e73c7f6f9c0a58d1fd1ca",p=document.querySelector("form"),g=document.querySelector(".gallery");p.addEventListener("submit",y);function y(c){c.preventDefault();const r=c.target.elements.imgName.value;console.log(r);const l=new URLSearchParams({key:h,q:`${r}`,imege_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e.hits),g.insertAdjacentHTML("beforeend",t(e.hits))}).catch(e=>console.log("catch",e));function t(e){return e.map(({webformatURL:o,largeImageURL:i,tags:n,likes:a,views:u,comments:f,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href=${i}>
              <img 
                  class="gallery-image" 
                  src=${o} 
                  alt=${n}
              />
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
